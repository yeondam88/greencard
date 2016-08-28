<?php
/**
 * Step 1: Require the Slim Framework
 *
 * If you are not using Composer, you need to require the
 * Slim Framework and register its PSR-0 autoloader.
 *
 * If you are using Composer, you can skip this step.
 */
require 'Slim/Slim.php';
require_once "lib/mysql.php";

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(); 

function authorize(){

	$headers = apache_request_headers();

	if(!empty($headers['Authorization']))
		$auth = $headers['Authorization'];
	else
		$auth = null;

	/*
	if($auth){
		$parts = explode(" ", $auth);

		$uid = $parts[0];
		$token = $parts[1];
		
		$db = connect_db();

		try{
			$q = $db->prepare("SELECT id, token FROM tbl_users WHERE id = $uid AND token = '$token'");
			$q->execute();
			$user = $q->fetch(PDO::FETCH_OBJ);
			
			return $user;

		}
		catch(PDOException $e)
		{
			return false;
		}
	} else {
		return false;
	}
	*/

	return true;
}

$app->post('/login', 'login');
$app->post('/admin/login', 'adminLogin');
$app->put('/admin/user/:id', 'adminUpdate');
$app->get('/countries', 'getCountries');
$app->put('/countries', 'putCountries');
$app->get('/applications', 'getApplications');
$app->get('/applications/:id', 'getApplication');
$app->post('/applications', 'postApplication');
$app->get('/applications/:id/family', 'getFamily');
$app->get('/news', 'getNews');
$app->get('/news/latest', 'getLatestNews');
$app->get('/news/:id', 'getArticle');
$app->post('/news', 'postArticle');
$app->put('/news/:id', 'putArticle');


/*********** API START *****************/
function adminLogin(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$credentials = $data->credential;

	$db = connect_db();
	try{
		$sql = "SELECT * FROM tbl_admins WHERE username = :username";
		$q = $db->prepare($sql);
		$q->bindParam(':username', $credentials->username);
		$q->execute();
		$user = $q->fetch(PDO::FETCH_OBJ);
		if($user)
		{
			if(password_verify($credentials->password, $user->password)) {				
				echo json_encode($user, JSON_NUMERIC_CHECK);
			}
			else
			{
				$app->response->setStatus(401);
			}
		}
		else
		{
			$app->response->setStatus(401);
		}
	}
	catch(PDOException $e)
	{
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}
}

function login(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$credentials = $data->credential;

	$db = connect_db();
	try{
		$sql = "SELECT id, firstname, lastname, password, email, token FROM tbl_applications WHERE email = :email";

		$q = $db->prepare($sql);
		$q->bindParam(':email', $credentials->email);
		$q->execute();
		$user = $q->fetch(PDO::FETCH_OBJ);
		if($user)
		{
			if(password_verify($credentials->password, $user->password)) {	
				$response = array('id'=>$user->id, 'firstname'=>$user->firstname, 'lastname'=>$user->lastname, 'email'=>$user->email, 'token'=>$user->token);
				echo json_encode($response, JSON_NUMERIC_CHECK);
			}
			else
			{
				$app->response->setStatus(401);
			}
		}
		else
		{
			$app->response->setStatus(401);
		}
	}
	catch(PDOException $e)
	{
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}
}

function register(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$credentials = $data->credential;

	$db = connect_db();
	try{
		$sql = "INSERT INTO tbl_users (username, password, token) values (:username, :password, :token)";
		
		$hash = password_hash($credentials->password, PASSWORD_DEFAULT);
		$token = md5(uniqid(mt_rand(), true));

		$q = $db->prepare($sql);
		$q->bindParam(':username', $credentials->username);
		$q->bindParam(':password', $hash);
		$q->bindParam(':token', $token);
		$q->execute();
		echo json_encode($credentials, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e)
	{
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}
}


function adminUpdate($user_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$user = $data->user;

		$sql = "SELECT id, username, password FROM tbl_admins WHERE id = :id";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->bindParam(':id', $user_id);
		$q->execute();
		$existuser = $q->fetch(PDO::FETCH_OBJ);
		if($existuser)
		{
			try{
				$hash = password_hash($user->password, PASSWORD_BCRYPT);
				$sql_user = "UPDATE tbl_admins SET username = :username, password = :password, token = :token WHERE id = :id";
				$q = $db->prepare($sql_user);
				$q->bindParam(':id', $user_id);
				$q->bindParam(':username', $user->username);
				$q->bindParam(':password', $hash);
				$q->bindParam(':token', md5(uniqid(mt_rand(), true)));
				$q->execute();

				echo '{"id":"'.$user_id.'"}';
			}
			catch(PDOException $e){
				if ($e->errorInfo[1] == 1062) {
					$app->response->setStatus(409);
					$app->response->setBody('Porfavor elija un nombre unico.');

				} else {
					$app->response->setStatus(400);
				}
			}	
		}
		else
		{
			$app->response->setStatus(401);
			$app->response->setBody('Usuario no existe');
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function getCountries(){
	$sql = "SELECT * FROM tbl_countries";
	$db = connect_db();
	$q = $db->prepare($sql);
	$q->execute();
	$result = $q->fetchAll(PDO::FETCH_OBJ);
	echo json_encode($result, JSON_NUMERIC_CHECK);
}

function putCountries(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$denied = $data->denied;
	$auth = authorize();

	if($auth){
		$db = connect_db(); 
		$reset = "UPDATE tbl_countries set pass = 1";
		$sql = "UPDATE tbl_countries set pass = 0 where id = :id";
		$sql_countries = "SELECT * from tbl_countries";
		$db->beginTransaction();

		$q = $db->prepare($reset);
		$q->execute();

		$q = $db->prepare($sql);
		foreach($denied as $country){
			$q->bindParam(':id', $country->id);
			$q->execute();
		}

		$q = $db->prepare($sql_countries);
		$q->execute();
		$countries = $q->fetchAll(PDO::FETCH_OBJ);

		$db->commit();
		echo json_encode($countries, JSON_NUMERIC_CHECK);
	}
	else{
		echo "No Authorization";
	}
}

function getApplications(){
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_applications";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	else{
		echo "No Authorization";
	}
}

function getApplication($id){
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_applications WHERE id = :id";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->bindParam(':id', $id);
		$q->execute();
		$result = $q->fetch(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	else{
		echo "No Authorization";
	}
}

function postApplication(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$application = $data->application;

	$sql = "INSERT INTO tbl_applications (title, firstname, lastname, gender, education, 
		experience, birth_city, birth_country, marital, email, password, phone_country, phone_number, 
		address, address2, postal, address_city, address_state, address_country, birthday, children, token) 
		VALUES 
		(:title, :firstname, :lastname, :gender, :education, :experience, :birth_city, :birth_country, 
		:marital, :email, :password, :phone_country, :phone_number, :address, :address2, :postal, :address_city, 
		:address_state, :address_country, :birthday, :children, :token)";

	$sql_family = "INSERT INTO tbl_applications_family (firstname, lastname, gender, education, 
		experience, birthday, birth_city, birth_country, relationship, application_id) VALUES (:firstname, :lastname, 
		:gender, :education, :experience, :birthday, :birth_city, :birth_country, :relationship, :application_id)";

	$db = connect_db();

	try{
		$passwordHash = password_hash($application->password, PASSWORD_DEFAULT);

		$q = $db->prepare($sql);
		$q->bindParam(':title', $application->title->id);
		$q->bindParam(':firstname', $application->firstname);
		$q->bindParam(':lastname', $application->lastname);
		$q->bindParam(':gender', $application->gender->id);
		$q->bindParam(':education', $application->education->id);
		$q->bindParam(':experience', $application->experience->id);
		$q->bindParam(':birth_city', $application->city);
		$q->bindParam(':birth_country', $application->country->id);
		$q->bindParam(':marital', $application->marital->id);
		$q->bindParam(':email', $application->email);
		$q->bindParam(':password', $passwordHash);
		$q->bindParam(':phone_country', $application->phone->country);
		$q->bindParam(':phone_number', $application->phone->number);
		$q->bindParam(':address', $application->address->line1);
		$q->bindParam(':address2', $application->address->line2);
		$q->bindParam(':postal', $application->address->postal);
		$q->bindParam(':address_city', $application->address->city);
		$q->bindParam(':address_state', $application->address->state);
		$q->bindParam(':address_country', $application->address->country->id);
		$q->bindParam(':birthday', $application->birthday);
		$q->bindParam(':children', $application->children);
		$q->bindParam(':token', md5(uniqid(mt_rand(), true)));
		$q->execute();
		$application_id = $db->lastInsertId();

		if(isset($application->family)){
			$q = $db->prepare($sql_family);
			if(isset($application->family->spouse)){
				$relationship = 1;
				$q->bindParam(':application_id', $application_id);
				$q->bindParam(':firstname', $application->family->spouse->firstname);
				$q->bindParam(':lastname', $application->family->spouse->lastname);
				$q->bindParam(':gender', $application->family->spouse->gender->id);
				$q->bindParam(':education', $application->family->spouse->education->id);
				$q->bindParam(':experience', $application->family->spouse->experience->id);
				$q->bindParam(':birthday', $application->family->spouse->birthday);
				$q->bindParam(':birth_city', $application->family->spouse->city);
				$q->bindParam(':birth_country', $application->family->spouse->country->id);
				$q->bindParam(':relationship', $relationship);
				$q->execute();
			}
			if(isset($application->family->children)){
				for($x=0; $x < count($application->family->children); $x++){
					$child = $application->family->children[$x];
					$relationship = 2;
					$default = 0;
					$q->bindParam(':application_id', $application_id);
					$q->bindParam(':firstname', $child->firstname);
					$q->bindParam(':lastname', $child->lastname);
					$q->bindParam(':gender', $child->gender->id);
					$q->bindParam(':education', $default);
					$q->bindParam(':experience', $default);
					$q->bindParam(':birthday', $child->birthday);
					$q->bindParam(':birth_city', $child->city);
					$q->bindParam(':birth_country', $child->country->id);
					$q->bindParam(':relationship', $relationship);
					$q->execute();
				}
			}
		}

		echo json_encode($application, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
			$app->response->setBody('The email has already been registered, please choose another email');

		} else {
			$app->response->setStatus(400);
			$app->response->setBody('There seems to be an error, please carefully check all the fields');
		}
	}
}

function getFamily($id){
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_applications_family WHERE application_id = :id";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->bindParam(':id', $id);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	else{
		echo "No Authorization";
	}
}

function getNews(){
	$sql = "SELECT * FROM tbl_news";
	$db = connect_db();
	$q = $db->prepare($sql);
	$q->execute();
	$result = $q->fetchAll(PDO::FETCH_OBJ);
	echo json_encode($result, JSON_NUMERIC_CHECK);
}

function getLatestNews(){
	$sql = "SELECT * FROM tbl_news order by timestamp desc limit 5";
	$db = connect_db();
	$q = $db->prepare($sql);
	$q->execute();
	$result = $q->fetchAll(PDO::FETCH_OBJ);
	echo json_encode($result, JSON_NUMERIC_CHECK);
}

function getArticle($id){
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_news WHERE id = :id";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->bindParam(':id', $id);
		$q->execute();
		$result = $q->fetch(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	else{
		echo "No Authorization";
	}
}

function postArticle(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$article = $data->article;

	$auth = authorize();
	if($auth)
	{
		$db = connect_db();
		try{
			$sql = "INSERT INTO tbl_news (title, heading, body) VALUES (:title, :heading, :body)";

			$q = $db->prepare($sql);
			$q->bindParam(':title', $article->title);
			$q->bindParam(':heading', $article->heading);
			$q->bindParam(':body', $article->body);
			$q->execute();
			echo json_encode($article, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e)
		{
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
}

function putArticle($id){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$article = $data->article;

	$auth = authorize();
	if($auth)
	{
		$db = connect_db();
		try{
			$sql = "UPDATE tbl_news set title = :title, heading = :heading, body = :body WHERE id = :id";

			$q = $db->prepare($sql);
			$q->bindParam(':title', $article->title);
			$q->bindParam(':heading', $article->heading);
			$q->bindParam(':body', $article->body);
			$q->bindParam(':id', $id);
			$q->execute();
			echo json_encode($article, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e)
		{
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
}
// Very Important to include this
$app->run();