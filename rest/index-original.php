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
require_once 'lib/mysql.php';
require_once 'lib/password.php';
require_once 'lib/xmlseclibs1.php';


\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim(); 
date_default_timezone_set('America/Santiago');

define ("DTE_VENTAS", "30,32,33,34,55,56,60,61,35,48,135,235,300");
define ("DTE_STOCK", "30,33,35,48,52,135,235,300");
define ("DTE_STOCK_ANULAR", "56,61");
define ("DTE_XML", "33,34,46,52,56,61");
define ("DTE_LIBRO_VENTAS", "30, 32, 33, 34, 55, 56, 60, 61");
define ("DTE_MAN", "30,32,55,60");
define ("DTE_MULTI_PAGE", "33, 34, 52");

function authorize(){

	$headers = apache_request_headers();

	if(!empty($headers['Authorization']))
		$auth = $headers['Authorization'];
	else
		$auth = null;

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

	return true;
}



/********************* Global Settings and Config ***************************/
$app->post('/login', 'login');
$app->get('/info', 'getInfo');
$app->get('/config', 'getConfig');
$app->put('/certificate', 'putCertificate');

/********************* CAF *******************************/
$app->get('/cafs', 'getCafs');
$app->get('/cafs/latest', 'latestCafs');
$app->get('/cafs/:id', 'getCaf');
$app->post('/cafs', 'postCaf');

/********************* USERS *****************************/
$app->get('/users', 'getUsers');
$app->put('/users/:id', 'putUser');
$app->put('/users/:id/precio', 'putUserPrecio');

/********************* ROLES *****************************/
$app->get('/roles', 'getRoles');
$app->get('/roles/user', 'getUserRoles');
$app->put('/roles/user/:user_id/role/:id', 'assignRole');
$app->delete('/roles/user/:user_id/role/:id', 'deleteRole');

/********************* PRODUCTOS **************************/
$app->get('/productos', 'getProductos');
$app->post('/productos', 'postProducto');
$app->post('/productos/excel', 'postExcelProductos');
$app->put('/productos/:id', 'putProducto'); // id is ok since its producto's id
$app->delete('/productos/:id', 'deleteProducto'); // id is ok

/********************* MODELOS ************************/
$app->get('/modelos', 'getModelos');
$app->post('/modelos', 'createModelo'); //change... we should not use :id
$app->delete('/modelos/:id', 'deleteModelo'); // id is ok since its modelo's
//$app->put('/modelos/:id', 'updateModelo');

/********************* CODIGOS **************************/
$app->get('/codigos', 'getCodigos');
$app->post('/codigos', 'createCodigo');
$app->delete('/codigos/:id', 'deleteCodigo');


/********************* CATEGORIAS **************************/
$app->get('/categorias', 'getCategorias');
$app->post('/categorias', 'postCategoria');
$app->put('/categorias/:id', 'putCategoria');
//$app->delete('/categorias', 'deleteCategoria');


/********************* PRECIOS MAYORES ***********************/
$app->get('/precios', 'getPrecios');
$app->post('/precios', 'postPrecio');
$app->put('/precios/:producto_id/:cantidad', 'putPrecio');
$app->get('/precios/producto/:id', 'getPreciosByProducto');
$app->delete('/precios/:param1/:param2', 'deletePrecio'); //needs two params since its 2 primary keys

/******************** STOCK **************************/
$app->get('/stock', 'getStock');
$app->post('/stock', 'postStock');

/****************** LISTA DTE *************************/
$app->get('/lista/dte', 'getListaDte');

/****************** FORMAS DE PAGO *************************/
$app->get('/formas', 'getFormas');

/********************* CLIENTES ***************************/
$app->get('/clientes', 'getClientes');
$app->post('/clientes', 'postCliente');
$app->put('/clientes/:id', 'updateCliente');

/********************* SUCURSALES ***************************/
$app->get('/sucursales', 'getSucursales');

/************** DIRECCIONES DE CLIENTES *******************/
$app->get('/direcciones', 'getDirecciones');
$app->post('/direcciones', 'createDireccion');
$app->put('/direcciones/:id', 'updateDireccion');


/********************* DTES ****************************/
$app->get('/dtes', 'getAllDtes');
$app->get('/dteswithclientes', 'getAllDtesWithClientes');
$app->get('/dtes/:dte/:id', 'getDte');
$app->get('/dtes/extra/:dte/:id', 'getDteExtra');
// Get which documents this references to... ex: get cotizacion and get factura as reference
$app->get('/dtes/referencias/:dte/:id', 'getDteReferencias');
// Get original documents that reference this document... ex: get factura and get cotizacion as reference
$app->get('/dtes/referenciados/:dte/:id', 'getDteReferenciados');
$app->get('/dtes/xml/:dte/:id', 'getXml');
$app->get('/dtes/electronicas', 'getDtesElectronicas');
$app->get('/dtes/electronicaswithclientes', 'getDtesElectronicasWithClientes');
$app->get('/dtes/detalles', 'getDetalles');
$app->get('/dtes/clientes', 'getClientesFromDte');
$app->put('/dtes/anular/:dte/:id', 'anularDTE');
$app->put('/dtes/desanular/:dte/:id', 'delAnulado');

/******************** DTES Manual **********************/
$app->post('/dtes/manual', 'postManual');
$app->delete('/dtes/manual/:dte/:id', 'deleteManual');

/********************* XML ******************************/
$app->get('/xml/envio/:dte/:id', 'getXmlEnvio');
$app->post('/xml/mail/:dte/:id', 'mailXml');
$app->post('/xml/set', 'createSet');

/******************** VENTAS **********************/
$app->post('/ventas', 'createVenta');

/******************** DTES Recibidos **********************/
$app->get('/recibidos', 'getRecibidos');
$app->get('/recibidos/:rut/:dte/:id', 'getRecibido');
$app->post('/recibidos', 'postRecibidos');
$app->put('/recibidos/:rut/:dte/:id', 'putRecibidos');
$app->delete('/recibidos/:rut/:dte/:id', 'deleteRecibidos');


/********************* LIBROS ******************************/
$app->get('/libroventa/datos', 'datosLibroVentasPorFechas');
$app->get('/libroventa/datos/boletas', 'boletasLibroVentasPorFechas');
$app->get('/librocompra/datos', 'dtesLibroCompras');
$app->get('/libroguias/datos', 'datosLibroGuias');


$app->post('/libroguia/create', 'createLibroGuia');

$app->get('/libro/check', 'checkLibro');
$app->get('/libro', 'getLibro');


$app->post('/libros/compras', 'envioCompra');
$app->post('/libros/ventas', 'envioVenta');
$app->post('/libros/compras/xml', 'xmlLibroCompra');
$app->post('/libros/ventas/xml', 'xmlLibroVenta');
$app->post('/libros/guias/xml', 'xmlLibroGuias');

$app->get('/libros/boletas', 'getBoletas');
$app->post('/libros/boletas', 'postBoleta');
$app->delete('/libros/boletas/:periodo/:dte', 'deleteBoleta');

$app->get('/libros/ultimos', 'getUltimosLibros');

/**************** REPORTES *******************/
$app->get('/reportes/ventas', 'reporteVentas');
$app->get('/reportes/topproductos', 'reporteTopProductos');
$app->get('/reportes/user/sale', 'reporteUserSale');
$app->get('/reportes/vendedoras/sale', 'reporteVendedorasSale');
$app->get('/reportes/formas', 'reporteFormas');


// :id means sucursal id
$app->get('/reportes/ventas/sucursal/:id', 'reporteVentasSucursal');
$app->get('/reportes/topproductos/sucursal/:id', 'reporteTopProductosSucursal');
$app->get('/reportes/user/sale/sucursal/:id', 'reporteUserSaleSucursal');
$app->get('/reportes/vendedoras/sale/sucursal/:id', 'reporteVendedorasSaleSucursal');
$app->get('/reportes/formas/sucursal/:id', 'reporteFormasSucursal');


$app->get('/reportes/dtes', 'reporteDtesDiarias');
$app->get('/reportes/productos', 'reporteProductos');

// :id means sucursal id
$app->get('/reportes/dtes/sucursal/:id', 'reporteDtesDiariasPorSucursal');
$app->get('/reportes/productos/sucursal/:id', 'reporteProductosPorSucursal');

// :id means modelo_id
$app->get('/reportes/productos/ventas/sucursal/:sucursal_id/:id', 'reporteProductoSucursalVentas');
$app->get('/reportes/productos/ventas/:id', 'reporteProductoVentas');
$app->get('/reportes/productos/stock/:id', 'reporteStockProducto');

// :id means cliente's id
$app->get('/reportes/clientes/ventas/:id', 'reporteClienteVentas');



/**************** INTERCAMBIO ********************/
$app->post('/intercambio/recibo', 'acuseRecibo');
$app->post('/intercambio/mercaderia', 'acuseMercaderia');
$app->post('/intercambio/comercial', 'acuseComercial');
$app->post('/intercambio/ignore', 'ignoreIntercambio');
$app->get('/intercambio/notification', 'getNotifications');
$app->get('/intercambio/list', 'getXmlRecibidos');

/*********** API START *****************/
function login(){
	global $app;
	$request = $app->request();
	$body = $request->getBody();
	$data = json_decode($body);
	$credentials = $data->credentials;
	

	$db = connect_db();
	try{
		$sql = "SELECT GROUP_CONCAT(role) as role, u.id, username, password, precio, token, sucursal_id 
		FROM tbl_users u LEFT JOIN tbl_user_role a ON u.id = a.user_id 
		LEFT JOIN tbl_roles b ON a.role_id = b.id 
		WHERE username = :username GROUP BY u.id";
		$q = $db->prepare($sql);
		$q->bindParam(':username', $credentials->username);
		$q->execute();
		$user = $q->fetch(PDO::FETCH_OBJ);
		if($user)
		{
			if(password_verify($credentials->password, $user->password)) {
				$response = array('id'=>$user->id, 'username'=>$user->username, 'precio'=>$user->precio, 'token'=>$user->token, 'role'=>$user->role, 'sucursal_id'=>$user->sucursal_id);
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
	}
}


/************************** Info **********************/
function getInfo(){
	global $app;
	$sql = "SELECT razon, rut, giro, direccion, comuna, ciudad, telefono, email, resolucion, fecha_resolucion, fecha_autorizacion, sii, acteco, iva FROM tbl_info";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetch(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		} else {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	}	
}

function getConfig(){
	global $app;
	$sql = "SELECT * FROM tbl_config";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetch(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
		} else {
			$app->response->setStatus(400);
		}
	}	
}

function putCertificate(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$certificate = $data->certificate;

		$id = 1;
		$sql = "INSERT INTO tbl_certificado (cert, pkey, issue, expiration, rut, id) VALUES (:cert, :pkey, :issue, :expiration, :rut, :id)
		ON DUPLICATE KEY UPDATE cert = :cert, pkey = :pkey, issue = :issue, expiration = :expiration, rut = :rut, id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':cert', $certificate->cert);
			$q->bindParam(':pkey', $certificate->key);
			$q->bindParam(':issue', $certificate->issue);
			$q->bindParam(':expiration', $certificate->expire);
			$q->bindParam(':rut', $certificate->rut);
			$q->bindParam(':id', $id);
			$q->execute();
		} catch(PDOException $e) {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

/************************** CAF **************************/
function getCafs(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT c.id, dte, caf, rsask, desde, hasta, fecha, username as user FROM tbl_caf c LEFT JOIN tbl_users u ON c.user_id = u.id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function getCaf($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_caf where id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam('id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function latestCafs(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT Max(b.id) as id, a.dte, Max(hasta) as hasta from tbl_caf a LEFT JOIN tbl_dtes b ON a.dte = b.dte group by a.dte";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function postCaf(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$caf = $data->caf;

		$sql = "INSERT INTO tbl_caf (dte, caf, rsask, desde, hasta, rut, user_id)
				VALUES (:dte, :caf, :rsask, :desde, :hasta, :rut, :user_id)";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $caf->dte);
			$q->bindParam(':caf', $caf->caf);
			$q->bindParam(':rsask', $caf->rsask);
			$q->bindParam(':desde', $caf->desde);
			$q->bindParam(':hasta', $caf->hasta);
			$q->bindParam(':rut', $caf->rut);
			$q->bindParam(':user_id', $caf->user->id);
			$q->execute();
			$id = $db->lastInsertId();

			echo '{ "id" : "'.$id.'"}';
		}
		catch (PDOException $e) {
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('Este CAF ya existe. Porfavor vuelva a intentar con un nuevo CAF');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


/************************** Users **********************/
function getUsers(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, username, precio, sucursal_id FROM tbl_users";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function getUserRoles(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$id = $request->get('user_id');
		$sql = "SELECT user_id, role_id, role FROM tbl_user_role ur LEFT JOIN tbl_roles r ON ur.role_id = r.id WHERE user_id = :user_id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':user_id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}			
}

function deleteRole($user_id, $role_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_user_role WHERE user_id = :user_id AND role_id = :role_id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':user_id', $user_id);
			$q->bindParam(':role_id', $role_id);
			$q->execute();
			echo '{"id": "'. $role_id. '"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}			
}

function assignRole($user_id, $role_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "INSERT INTO tbl_user_role (user_id, role_id) VALUES (:user_id, :role_id)";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':user_id', $user_id);
			$q->bindParam(':role_id', $role_id);
			$q->execute();
			echo '{"id":"'.$role_id .'"}';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}			
}

function putUser($user_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$user = $data->user;

		$sql = "SELECT id, username, password FROM tbl_users WHERE id = :id";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->bindParam(':id', $user_id);
		$q->execute();
		$existuser = $q->fetch(PDO::FETCH_OBJ);
		if($existuser)
		{
			try{
				$hash = password_hash($user->password, PASSWORD_BCRYPT, array("cost" => 4));
				$sql_user = "UPDATE tbl_users SET username = :username, password = :password, token = :token WHERE id = :id";
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

function putUserPrecio($user_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$user = $data->user;

		$sql = "UPDATE tbl_users set precio = :precio, sucursal_id = :sucursal_id WHERE id = :id";
		$db = connect_db();

		try{
			$q = $db->prepare($sql);
			$q->bindParam(':id', $user_id);
			$q->bindParam(':precio', $user->precio);
			$q->bindParam(':sucursal_id', $user->sucursal_id);
			$q->execute();

			echo '{"id":"'.$user_id.'"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

/************************* ROLES **************************/
function getRoles(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, role FROM tbl_roles";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

/********************* PRODUCTOS *****************/
function getProductos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * from tbl_productos ORDER BY id desc";
		
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function postProducto(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$producto = $data->producto;
		if(empty($producto->modelo))
			$producto->modelo = "";
		if(empty($producto->codigo))
			$producto->codigo = null;
		if(empty($producto->categoria_id))
			$producto->categoria_id = null;
		if(empty($producto->unidad))
			$producto->unidad = "";
		if(empty($producto->exento))
			$producto->exento = 0;

		$sql = "INSERT INTO tbl_productos (producto, unidad, precio, categoria_id, exento)
				VALUES (:producto, :unidad, :precio, :categoria_id, :exento)";
		$sql2 = "INSERT INTO tbl_productos_modelos (modelo, producto_id)
				VALUES (:modelo, :producto_id)";
		$sql3 = "INSERT INTO tbl_productos_codigos (modelo_id, codigo) 
				VALUES (:modelo_id, :codigo)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':producto', $producto->producto);
			$q->bindParam(':unidad', $producto->unidad);
			$q->bindParam(':precio', $producto->precio);
			$q->bindParam(':categoria_id', $producto->categoria_id);
			$q->bindParam(':exento', $producto->exento);
			$q->execute();
			$id = $db->lastInsertId();

			$q = $db->prepare($sql2);
			$q->bindParam(':modelo', $producto->modelo->modelo);
			$q->bindParam(':producto_id', $id);
			$q->execute();
			$mid = $db->lastInsertId();

			$cid = null;
			if($producto->codigo){
				$q = $db->prepare($sql3);
				$q->bindParam(':modelo_id', $mid);
				$q->bindParam(':codigo', $producto->codigo);
				$q->execute();
				$cid = $db->lastInsertId();
			}

			$db->commit();

			echo '{ "producto_id" : "'.$id.'", "modelo_id" : "'. $mid .'", "codigo_id" : "'. $cid .'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('No se pudo crear el producto, el codigo: ' . $producto->codigo . ' ya esta en uso.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function postExcelProductos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$productos = $data->productos;
		$sql = "INSERT INTO tbl_productos (producto, unidad, precio, categoria_id, exento)
				VALUES (:producto, :unidad, :precio, :categoria_id, :exento)";
		$sql2 = "INSERT INTO tbl_productos_modelos (modelo, producto_id)
				VALUES (:modelo, :producto_id)";
		$sql3 = "INSERT INTO tbl_productos_codigos (modelo_id, codigo) 
				VALUES (:modelo_id, :codigo)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q2 = $db->prepare($sql2);
			$q3 = $db->prepare($sql3);
			foreach($productos as $producto)
			{
				if(empty($producto->modelo))
					$producto->modelo = "";
				if(empty($producto->codigo))
					$producto->codigo = null;
				if(empty($producto->categoria_id))
					$producto->categoria_id = null;
				if(empty($producto->unidad))
					$producto->unidad = "";
				if(empty($producto->excento))
					$producto->exento = 0;

				$q->bindParam(':producto', $producto->producto);
				$q->bindParam(':unidad', $producto->unidad);
				$q->bindParam(':precio', $producto->precio);
				$q->bindParam(':categoria_id', $producto->categoria_id);
				$q->bindParam(':exento', $producto->exento);
				$q->execute();
				$id = $db->lastInsertId();

				$q2->bindParam(':modelo', $producto->modelo);
				$q2->bindParam(':producto_id', $id);
				$q2->execute();
				$mid = $db->lastInsertId();

				$cid = null;
				if($producto->codigo){
					$q3->bindParam(':modelo_id', $mid);
					$q3->bindParam(':codigo', $producto->codigo);
					$q3->execute();
					$cid = $db->lastInsertId();
				}
			}
			$db->commit();

			echo '{ "producto_id" : "'.$id.'", "modelo_id" : "'. $mid .'", "codigo_id" : "'. $cid .'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('No se pudo crear el producto, el codigo: ' . $producto->codigo . ' ya esta en uso.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function putProducto($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$producto = $data->producto;
		if(empty($producto->categoria_id))
			$producto->categoria_id = null;
		if(empty($producto->unidad))
			$producto->unidad = "";
		if(empty($producto->codigo_id))
			$producto->codigo_id = null;
		if(empty($producto->codigo))
			$producto->codigo = null;
		if(empty($producto->unidad))
			$producto->unidad = "";

		try{
			$sql = "UPDATE tbl_productos SET producto = :producto, unidad = :unidad,
			precio = :precio, categoria_id = :categoria_id, exento = :exento WHERE id = :id";

			$sql_codigo = "UPDATE tbl_productos_codigos SET codigo = :codigo WHERE id = :id";
			$sql_nuevo_codigo = "INSERT INTO tbl_productos_codigos (modelo_id, codigo) 
				VALUES (:modelo_id, :codigo)";
			$sql_delete_codigo = "DELETE FROM tbl_productos_codigos WHERE id = :codigo_id";

			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':producto', $producto->producto);
			$q->bindParam(':precio', $producto->precio);
			$q->bindParam(':unidad', $producto->unidad);
			$q->bindParam(':categoria_id', $producto->categoria_id);
			$q->bindParam(':exento', $producto->exento);
			$q->bindParam(':id', $producto->id);
			$q->execute();

			if($producto->codigo_id){
				if($producto->codigo){
					$q = $db->prepare($sql_codigo);
					$q->bindParam(':codigo', $producto->codigo);
					$q->bindParam(':id', $producto->codigo_id);
					$q->execute();
				}
				else{
					$q = $db->prepare($sql_delete_codigo);
					$q->bindParam(':codigo_id', $producto->codigo_id);
					$q->execute();
				}
			}
			else{
				if($producto->codigo){
					$q = $db->prepare($sql_nuevo_codigo);
					$q->bindParam(':codigo', $producto->codigo);
					$q->bindParam(':modelo_id', $producto->modelo->id);
					$q->execute();
				}
			}

			$db->commit();

			echo '{"id" : "'.$id.'"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function deleteProducto($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_productos WHERE id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':id', $id);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}


/************************ MODELOS ********************/
function getModelos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "Select * from tbl_productos_modelos";
		
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function createModelo($producto_id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$modelo = $data->modelo;
		if(empty($modelo->modelo))
			$modelo->modelo = "";
		if(empty($modelo->codigo))
			$modelo->codigo = null;

		$sql2 = "INSERT INTO tbl_productos_modelos (modelo, producto_id)
				VALUES (:modelo, :producto_id)";
		$sql3 = "INSERT INTO tbl_productos_codigos (modelo_id, codigo) 
				VALUES (:modelo_id, :codigo)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql2);
			$q->bindParam(':modelo', $modelo->modelo);
			$q->bindParam(':producto_id', $producto_id);
			$q->execute();
			$mid = $db->lastInsertId();

			if($modelo->codigo){
				$q = $db->prepare($sql3);
				$q->bindParam(':modelo_id', $mid);
				$q->bindParam(':codigo', $modelo->codigo);
				$q->execute();
			}

			$db->commit();

			echo '{ "id" : "'.$mid.'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('No se pudo crear el producto, el codigo: ' . $modelo->codigo . ' ya esta en uso.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function deleteModelo($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_productos_modelos WHERE id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':id', $id);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}


/********************* Codigos ************************/
function getCodigos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, codigo, modelo_id FROM tbl_productos_codigos";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function createCodigo(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$codigo = $data->codigo;

		$sql = "INSERT INTO tbl_productos_codigos (codigo, modelo_id) VALUES (:codigo, :modelo_id)";

		try{
			$db = connect_db();

			$q = $db->prepare($sql);
			$q->bindParam(':codigo', $codigo->codigo);
			$q->bindParam(':modelo_id', $codigo->modelo_id);
			$q->execute();
			$id = $db->lastInsertId();

			echo '{ "id" : "'.$id.'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('El codigo: ' . $codigo->codigo . ' ya esta en uso.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function deleteCodigo($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_productos_codigos WHERE id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':id', $id);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

/********************* Categorias **********************/
function getCategorias(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, categoria FROM tbl_categorias ORDER BY categoria ASC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}


function postCategoria(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$categoria = $data->categoria;

		$sql = "INSERT INTO tbl_categorias (categoria)
				VALUES (:categoria)";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':categoria', $categoria->categoria);
			$q->execute();
			$id = $db->lastInsertId();
			echo '{ "id" : "'.$id.'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function putCategoria($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$categoria = $data->categoria;

		try{
			$sql = "UPDATE tbl_categorias SET categoria = :categoria WHERE id = :id";
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':categoria', $categoria->categoria);
			$q->bindParam(':id', $id);
			$q->execute();
			echo '{ "id" : "'.$id.'" }';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}


/********************* Descuentos **********************/
function getPrecios(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT producto_id, precio, cantidad FROM tbl_productos_descuentos ORDER BY cantidad ASC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function postPrecio(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$precio = $data->precio;
		$sql = "INSERT INTO tbl_productos_descuentos(producto_id, precio, cantidad) VALUES (:producto_id, :precio, :cantidad)";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':producto_id', $precio->producto_id);
			$q->bindParam(':precio', $precio->precio);
			$q->bindParam(':cantidad', $precio->cantidad);
			$q->execute();
			echo json_encode($precio, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function putPrecio($producto_id, $cantidad){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$precio = $data->precio;
		$sql = "UPDATE tbl_productos_descuentos SET precio = :precio WHERE producto_id = :producto_id AND cantidad = :cantidad";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':producto_id', $producto_id);
			$q->bindParam(':precio', $precio->precio);
			$q->bindParam(':cantidad', $cantidad);
			$q->execute();

			echo json_encode($precio, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('El ID/Grado/Cantidad del precio ya existe para este producto. Porfavor elija otro ID/Grado/Cantidad'); 
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage()); 
			}
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function getPreciosByProducto($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT producto_id, precio, cantidad FROM tbl_productos_descuentos WHERE :id = producto_id ORDER BY cantidad ASC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function deletePrecio($producto_id, $cantidad){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_productos_descuentos WHERE producto_id = :producto_id AND cantidad = :cantidad";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':producto_id', $producto_id);
			$q->bindParam(':cantidad', $cantidad);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

/******************* STOCK *************************/
function getStock(){
	global $app;
	$sql = "SELECT * from tbl_productos_stock";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}	
}


function postStock(){
	global $app;
	try{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$doc = $data->doc;

		/*
		$sql_ingreso = "INSERT INTO tbl_stock_transaction (user_id, sucursal_id) 
				VALUES (:user_id, :sucursal_id)";

		$sql_detalles = "INSERT INTO tbl_stock_transaction_detalles (codigo, producto, cantidad, modelo_id, producto_id, ingreso_id) 
				VALUES (:codigo, :producto, :cantidad, :modelo_id, producto_id, :ingreso_id)";
		*/

		$sql_stock = "INSERT INTO tbl_productos_stock (sucursal_id, modelo_id, stock) VALUES (:sucursal_id, :modelo_id, :cantidad) 
		ON DUPLICATE KEY UPDATE stock=stock+:cantidad";
		$db = connect_db();
		$q = $db->prepare($sql_stock);

		foreach($doc->detalles as $detalle)
		{
			$q->bindParam(':sucursal_id', $doc->sucursal->id);
			$q->bindParam(':modelo_id', $detalle->modelo_id);
			$q->bindParam(':cantidad', $detalle->cantidad);
			$q->execute();
		}

		echo '{ "status" : "ok" }';
	}
	catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}	
}


/******************* Lista DTE **********************/
function getListaDte(){
	global $app;
	$sql = "SELECT id, dte FROM tbl_lista_dte";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}		
}


/******************* Formas de Pago **********************/
function getFormas(){
	global $app;
	$sql = "SELECT id, forma FROM tbl_forma_pago";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}		
}


/******************* Clientes **********************/
function getClientes(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, razon, rut, giro, telefono, email, grade FROM tbl_clientes";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function postCliente(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$cliente = $data->cliente;
		if(empty($cliente->grade)){
			$cliente->grade = 0;
		}

		$sql = "INSERT INTO tbl_clientes (razon, rut, giro, telefono, email, grade)
				VALUES (:razon, :rut, :giro, :telefono, :email, :grade)";

		$sql_dir = "INSERT INTO tbl_direcciones (cliente_id, direccion, comuna, ciudad)
				VALUES (:cliente_id, :direccion, :comuna, :ciudad)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':razon', $cliente->razon);
			$q->bindParam(':rut', $cliente->rut);
			$q->bindParam(':giro', $cliente->giro);
			$q->bindParam(':telefono', $cliente->telefono);
			$q->bindParam(':email', $cliente->email);
			$q->bindParam(':grade', $cliente->grade);
			$q->execute();
			
			$id = $db->lastInsertId();
			$cliente->id = $id;

			$q = $db->prepare($sql_dir);
			$q->bindParam(':direccion', $cliente->direccion);
			$q->bindParam(':comuna', $cliente->comuna);
			$q->bindParam(':ciudad', $cliente->ciudad);
			$q->bindParam(':cliente_id', $id);
			$q->execute();
			$did = $db->lastInsertId();
			$cliente->did = $did;

			$db->commit();
			echo json_encode($cliente, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function updateCliente($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$cliente = $data->cliente;
		if(empty($cliente->telefono))
			$cliente->telefono = null;
		if(empty($cliente->email))
			$cliente->email = null;
		if(empty($cliente->grade))
			$cliente->grade = 0;

		try{
			$sql = "UPDATE tbl_clientes SET rut = :rut, razon = :razon, giro = :giro, telefono = :telefono, email = :email, grade = :grade WHERE id = :id";

			$sql_dir = "UPDATE tbl_direcciones SET direccion = :direccion, comuna = :comuna, ciudad = :ciudad where id = :address_id";

			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':rut', $cliente->rut);
			$q->bindParam(':razon', $cliente->razon);
			$q->bindParam(':giro', $cliente->giro);
			$q->bindParam(':telefono', $cliente->telefono);
			$q->bindParam(':email', $cliente->email);
			$q->bindParam(':grade', $cliente->grade);
			$q->bindParam(':id', $id);
			$q->execute();

			$q = $db->prepare($sql_dir);
			$q->bindParam(':direccion', $cliente->direccion);
			$q->bindParam(':comuna', $cliente->comuna);
			$q->bindParam(':ciudad', $cliente->ciudad);
			$q->bindParam(':address_id', $cliente->address_id);
			$q->execute();

			$db->commit();
			echo '{ "id" : "'.$id.'" }';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}


/************************** Sucursales ****************************/
function getSucursales(){
	$sql = "SELECT * FROM tbl_sucursales";
	try{
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$result = $q->fetchAll(PDO::FETCH_OBJ);
		echo json_encode($result, JSON_NUMERIC_CHECK);
	}
	catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage()); 
	}	
}


/************************* DIRECCIONES ***************************/
function getDirecciones(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT id, cliente_id, direccion, comuna, ciudad FROM tbl_direcciones";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function createDireccion(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$direccion = $data->direccion;
		$cliente_id = $data->cliente_id;

		$sql_dir = "INSERT INTO tbl_direcciones (cliente_id, direccion, comuna, ciudad)
				VALUES (:cliente_id, :direccion, :comuna, :ciudad)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql_dir);
			$q->bindParam(':direccion', $direccion->direccion);
			$q->bindParam(':comuna', $direccion->comuna);
			$q->bindParam(':ciudad', $direccion->ciudad);
			$q->bindParam(':cliente_id', $cliente_id);
			$q->execute();

			$db->commit();
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function updateDireccion($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$direccion = $data->address;
		$sql = "UPDATE tbl_direcciones set ciudad = :ciudad, comuna = :comuna, direccion = :direccion WHERE id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':ciudad', $direccion->ciudad);
			$q->bindParam(':comuna', $direccion->comuna);
			$q->bindParam(':direccion', $direccion->direccion);
			$q->bindParam(':id', $id);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


/************************** DTES ****************************/
function getAllDtes(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$dte = $request->get('dte');
		$sql = "SELECT * FROM tbl_dtes where dte = :dte ORDER BY dte ASC, id DESC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getAllDtesWithClientes(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$dte = $request->get('dte');
		$sql = "SELECT a.dte, a.id, fecha, b.rut, b.razon, b.giro,
		b.direccion, b.comuna, b.ciudad, exento, neto, iva, total, trackid, anulado FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_cliente b ON a.dte = b.dte AND a.id = b.folio_id 
		LEFT JOIN tbl_clientes c ON b.cliente_id = c.id 
		LEFT JOIN tbl_dtes_xml d ON d.dte = a.dte AND d.folio_id = a.id 
		LEFT JOIN tbl_dtes_anulado e ON e.dte = a.dte AND a.id = e.folio_id
		WHERE a.dte = :dte
		ORDER BY fecha DESC, dte ASC, id DESC limit 1000";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDte($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_dtes WHERE dte = :dte AND id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDteExtra($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT a.dte, a.id, fecha, descuentoNeto, descuentoBruto, exento, neto, iva, total, user_id, vendedor_id, a.sucursal_id, bruto, e.username as user, f.username as vendedor, sucursal, forma, condicion FROM tbl_dtes a 
			LEFT JOIN tbl_dtes_forma_pago b ON a.dte = b.dte AND a.id = b.folio_id
			LEFT JOIN tbl_forma_pago c ON b.forma_id = c.id
			LEFT JOIN tbl_sucursales d ON a.sucursal_id = d.id 
			LEFT JOIN tbl_users e ON a.user_id = e.id
			LEFT JOIN tbl_users f ON a.vendedor_id = f.id
			LEFT JOIN tbl_dtes_credito g ON a.dte = g.dte AND a.id = g.folio_id
			WHERE a.dte = :dte AND a.id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDteReferencias($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT ref_dte, ref_folio_id, razon, codref FROM tbl_dtes_referencia WHERE dte = :dte AND folio_id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDteReferenciados($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT dte, folio_id, razon, codref FROM tbl_dtes_referencia WHERE ref_dte = :dte AND ref_folio_id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getXml($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_dtes_xml WHERE dte = :dte AND folio_id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDtesElectronicas(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_dtes WHERE dte = :dte ORDER BY dte ASC, id DESC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDtesElectronicasWithClientes(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$dte = $request->get('dte');
		$sql = "SELECT a.dte, a.id, fecha, b.rut, b.razon, b.giro,
		b.direccion, b.comuna, b.ciudad, exento, neto, iva, total, anulado FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_cliente b ON a.dte = b.dte AND a.id = b.folio_id 
		LEFT JOIN tbl_clientes c ON b.cliente_id = c.id 
		LEFT JOIN tbl_dtes_xml d ON d.dte = a.dte AND d.folio_id = a.id
		LEFT JOIN tbl_dtes_anulado e ON a.dte = e.dte AND a.id = e.folio_id
		WHERE a.dte = :dte ORDER BY fecha desc, dte ASC, id DESC limit 1000";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getDetalles(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$dte = $request->get('dte');
		$id = $request->get('id');
		$sql = "SELECT producto_id as id, modelo_id, producto, unidad, cantidad, precio, porciento, exento, codigo, iva_adicional FROM tbl_dtes_detalles WHERE dte = :dte AND folio_id = :id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getClientesFromDte(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$dte = $request->get('dte');
		$id = $request->get('id');

		$sql = "SELECT cliente_id as id, razon, rut, giro, direccion, comuna, ciudad, telefono, email FROM tbl_dtes_cliente WHERE dte = :dte AND folio_id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function anularDTE($dte, $id){
	global $app;
	$dte_stock = explode(",", DTE_STOCK);
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		if(empty($data->detalles))
			$data->detalles = null;

		if(empty($data->doc))
			$data->doc = null;

		$sql = "INSERT INTO tbl_dtes_anulado (dte, folio_id, anulado) VALUES (:dte, :folio_id, :anulado)";
		$sql_stock = "UPDATE tbl_productos_stock set stock=stock+:cantidad 
		WHERE sucursal_id = :sucursal_id AND modelo_id = :modelo_id";
		$anulado = 1;
		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dte);
			$q->bindParam(":folio_id", $id);
			$q->bindParam(":anulado", $anulado);
			$q->execute();

			if(in_array($dte, $dte_stock)){
				$q = $db->prepare($sql_stock);
				if(isset($data->doc) && isset($data->detalles)){
					foreach($data->detalles as $detalle)
					{
						if($detalle->id){
							$q->bindParam(':modelo_id', $detalle->modelo_id);
							$q->bindParam(':sucursal_id', $data->doc->sucursal_id);
							$q->bindParam(':cantidad', $detalle->cantidad);
							$q->execute();
						}
					}
				}
			}

			$db->commit();
			echo '{ "id" : "'.$id.'"}';
		}
		catch (PDOException $e) {
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('Este documento ya esta anulado.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function delAnulado($dte, $id){
	global $app;
	$dte_stock = explode(",", DTE_STOCK);
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		if(empty($data->detalles))
			$data->detalles = null;

		if(empty($data->doc))
			$data->doc = null;

		$sql = "DELETE FROM tbl_dtes_anulado WHERE dte = :dte AND folio_id = :folio_id";
		$sql_stock = "UPDATE tbl_productos_stock set stock=stock-:cantidad 
		WHERE sucursal_id = :sucursal_id AND modelo_id = :modelo_id";
		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dte);
			$q->bindParam(":folio_id", $id);
			$q->execute();

			if(in_array($dte, $dte_stock)){
				$q = $db->prepare($sql_stock);
				if(isset($data->doc) && isset($data->detalles)){
					foreach($data->detalles as $detalle)
					{
						if($detalle->id){
							$q->bindParam(':modelo_id', $detalle->modelo_id);
							$q->bindParam(':sucursal_id', $data->doc->sucursal_id);
							$q->bindParam(':cantidad', $detalle->cantidad);
							$q->execute();
						}
					}
				}
			}

			$db->commit();

			echo '{ "id" : "'.$id.'"}';
		}
		catch (PDOException $e) {
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('Este documento ya esta anulado.');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


/************************** DTES MANUAL *****************************/


function postManual(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dte = $data->dte;

		$sql_dte = "INSERT INTO tbl_dtes (dte, id, fecha, neto, iva, total) 
			VALUES (:dte, :id, :fecha, :neto, :iva, :total)";

		$sql_cliente = "INSERT INTO tbl_dtes_cliente (dte, folio_id, rut, razon) 
			VALUES (:dte, :folio_id, :rut, :razon)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql_dte);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':id', $dte->id);
			$q->bindParam(':fecha', $dte->fecha);
			$q->bindParam(':neto', $dte->neto);
			$q->bindParam(':iva', $dte->iva);
			$q->bindParam(':total', $dte->total);
			$q->execute();

			$q = $db->prepare($sql_cliente);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':folio_id', $dte->id);
			$q->bindParam(':rut', $dte->rut);
			$q->bindParam(':razon', $dte->razon);
			$q->execute();

			$db->commit();

			echo '{ "id" : "'.$dte->id.'"}';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('El DTE ya esta ingresado');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function deleteManual($paramDte, $paramId){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_dtes WHERE dte = :dte AND id = :id";

		try{
			$db = connect_db();

			$q = $db->prepare($sql);
			$q->bindParam(':dte', $paramDte);
			$q->bindParam(':id', $paramId);
			$q->execute();

			echo '{ "done" : "done"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}



/************************** Recibidos ****************************/
function getRecibidos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_r_dtes ORDER BY rut ASC, dte ASC, id DESC";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getRecibido($rut, $dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_r_dtes WHERE rut = :rut AND dte = :dte AND id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':rut', $rut);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function postRecibidos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dte = $data->dte;
		if(empty($dte->status))
			$dte->status = 0;
		if(empty($dte->xml))
			$dte->xml = "";

		$sql = "INSERT INTO tbl_r_dtes (dte, id, rut, fecha, razon, exento, neto, iva, total, user_id, status, dtexml)
				VALUES (:dte, :id, :rut, :fecha, :razon, :exento, :neto, :iva, :total, :user_id, :status, :dtexml)";

		$sql_ivacomun = "INSERT INTO tbl_r_dtes_ivacomun (dte, folio_id, rut, fctprop, iva, total) VALUES (:dte, :id, :rut, :fctprop, :iva, :total)";

		$sql_norec = "INSERT INTO tbl_r_dtes_norec (dte, folio_id, rut, codigo, iva) VALUES (:dte, :id, :rut, :codigo, :iva)";

		$sql_ila = "INSERT INTO tbl_r_dtes_ila (dte, folio_id, rut, codigo, tasa, monto) VALUES (:dte, :id, :rut, :codigo, :tasa, :monto)";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':id', $dte->id);
			$q->bindParam(':rut', $dte->rut);
			$q->bindParam(':fecha', $dte->fecha);
			$q->bindParam(':razon', $dte->razon);
			$q->bindParam(':exento', $dte->exento);
			$q->bindParam(':neto', $dte->neto);
			$q->bindParam(':iva', $dte->iva);
			$q->bindParam(':total', $dte->total);
			$q->bindParam(':user_id', $dte->user->id);
			$q->bindParam(':status', $dte->status);
			$q->bindParam(':dtexml', $dte->xml);
			$q->execute();
			$id = $db->lastInsertId();

			if(isset($dte->ivacomun)){
				$q = $db->prepare($sql_ivacomun);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->bindParam(':fctprop', $dte->ivacomun->fctprop);
				$q->bindParam(':iva', $dte->ivacomun->iva);
				$q->bindParam(':total', $dte->ivacomun->total);
				$q->execute();
			}

			if(isset($dte->norec)){
				$q = $db->prepare($sql_norec);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->bindParam(':codigo', $dte->norec->codigo);
				$q->bindParam(':iva', $dte->norec->iva);
				$q->execute();
			}

			if(isset($dte->ila)){
				if($dte->ila->codigo > 0){
					$q = $db->prepare($sql_ila);
					$q->bindParam(':dte', $dte->dte);
					$q->bindParam(':id', $dte->id);
					$q->bindParam(':rut', $dte->rut);
					$q->bindParam(':codigo', $dte->ila->codigo);
					$q->bindParam(':tasa', $dte->ila->tasa);
					$q->bindParam(':monto', $dte->ila->monto);
					$q->execute();
				}
			}

			$db->commit();

			echo '{ "id" : "'.$id.'"}';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
				$app->response->setBody('El DTE ya esta ingresado');
			} else {
				$app->response->setStatus(400);
				$app->response->setBody($e->getMessage());
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function putRecibidos($paramRut, $paramDte, $paramId){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dte = $data->dte;

		$sql = "UPDATE tbl_r_dtes SET dte = :dte, id = :id, rut = :rut, fecha = :fecha, razon = :razon, exento = :exento, neto = :neto, iva = :iva, total = :total, user_id = :user_id WHERE dte = :olddte AND rut = :oldrut AND id = :oldid";

		// For the next updates the WHERE condition must NOT be the old DTE, RUT, ID
		// Since these are changed on the update above
		$sql_ivacomun = "INSERT INTO tbl_r_dtes_ivacomun (dte, folio_id, rut, fctprop, iva, total) VALUES (:dte, :id, :rut, :fctprop, :iva, :total) ON DUPLICATE KEY UPDATE fctprop = :fctprop, iva = :iva, total = :total";

		$sql_ivacomun_del = "DELETE FROM tbl_r_dtes_ivacomun where dte = :dte AND rut = :rut AND folio_id = :id";

		$sql_norec = "INSERT INTO tbl_r_dtes_norec (dte, folio_id, rut, codigo, iva) VALUES (:dte, :id, :rut, :codigo, :iva) ON DUPLICATE KEY UPDATE codigo = :codigo, iva = :iva";

		$sql_norec_del = "DELETE FROM tbl_r_dtes_norec where dte = :dte AND rut = :rut AND folio_id = :id";

		$sql_ila = "INSERT INTO tbl_r_dtes_ila (dte, folio_id, rut, codigo, tasa, monto) VALUES (:dte, :id, :rut, :codigo, :tasa, :monto)ON DUPLICATE KEY UPDATE codigo = :codigo, tasa = :tasa, monto = :monto";

		$sql_ila_del = "DELETE FROM tbl_r_dtes_ila where dte = :dte AND rut = :rut AND folio_id = :id";

		try{
			$db = connect_db();
			$db->beginTransaction();

			$q = $db->prepare($sql);
			$q->bindParam(':olddte', $paramDte);
			$q->bindParam(':oldid', $paramId);
			$q->bindParam(':oldrut', $paramRut);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':id', $dte->id);
			$q->bindParam(':rut', $dte->rut);
			$q->bindParam(':fecha', $dte->fecha);
			$q->bindParam(':razon', $dte->razon);
			$q->bindParam(':exento', $dte->exento);
			$q->bindParam(':neto', $dte->neto);
			$q->bindParam(':iva', $dte->iva);
			$q->bindParam(':total', $dte->total);
			$q->bindParam(':user_id', $dte->user->id);
			$q->execute();
			$id = $db->lastInsertId();

			if(isset($dte->ivacomun)){
				$q = $db->prepare($sql_ivacomun);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->bindParam(':fctprop', $dte->ivacomun->fctprop);
				$q->bindParam(':iva', $dte->ivacomun->iva);
				$q->bindParam(':total', $dte->ivacomun->total);
				$q->execute();
			}
			else{
				$q = $db->prepare($sql_ivacomun_del);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->execute();
			}

			if(isset($dte->norec)){
				$q = $db->prepare($sql_norec);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->bindParam(':codigo', $dte->norec->codigo);
				$q->bindParam(':iva', $dte->norec->iva);
				$q->execute();
			}
			else{
				$q = $db->prepare($sql_norec_del);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->execute();
			}

			if(isset($dte->ila)){
				if($dte->ila->codigo > 0){
					$q = $db->prepare($sql_ila);
					$q->bindParam(':dte', $dte->dte);
					$q->bindParam(':id', $dte->id);
					$q->bindParam(':rut', $dte->rut);
					$q->bindParam(':codigo', $dte->ila->codigo);
					$q->bindParam(':tasa', $dte->ila->tasa);
					$q->bindParam(':monto', $dte->ila->monto);
					$q->execute();
				}
				else{
					$q = $db->prepare($sql_ila_del);
					$q->bindParam(':dte', $dte->dte);
					$q->bindParam(':id', $dte->id);
					$q->bindParam(':rut', $dte->rut);
					$q->execute();
				}
			}
			else{
				$q = $db->prepare($sql_ila_del);
				$q->bindParam(':dte', $dte->dte);
				$q->bindParam(':id', $dte->id);
				$q->bindParam(':rut', $dte->rut);
				$q->execute();
			}

			$db->commit();

			echo '{ "id" : "'.$id.'"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function deleteRecibidos($paramRut, $paramDte, $paramId){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "DELETE FROM tbl_r_dtes WHERE rut = :rut AND dte = :dte AND id = :id";

		try{
			$db = connect_db();

			$q = $db->prepare($sql);
			$q->bindParam(':dte', $paramDte);
			$q->bindParam(':id', $paramId);
			$q->bindParam(':rut', $paramRut);
			$q->execute();

			echo '{ "done" : "done"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

/************************* XML **************************/
function getXmlEnvio($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT xml FROM tbl_dtes_xml WHERE folio_id = :id AND dte = :dte"; 
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			$xml = [$result->xml];

			$envio = dteSet($xml, $dte);
			$base64 = base64_encode($envio);
			echo '{"xml":"'.$base64.'"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function mailXml($dte, $id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$rut = $data->rut;

		$sql = "SELECT xml FROM tbl_dtes_xml WHERE folio_id = :id AND dte = :dte"; 
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			$xml = [$result->xml];

			$envio = dteSetCliente($xml, $dte, $rut);
			$base64 = base64_encode($envio);

			$sentmail = maildte($base64, $rut);
			echo '{"mail":'.$sentmail.'}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}		
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function createSet(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->dtes;
		$setXML = generarSetManual($dtes);
		$base64 = base64_encode($setXML);
		echo '{"xml":"'.$base64.'"}';
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


/************************* VENTAS ***************************/
function createVenta(){
	global $app;
	$dte_multi = explode(",", DTE_MULTI_PAGE);
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$doc = $data->doc;
		if($doc->tipoDte->id == 298 || $doc->tipoDte->id == 299){
			$doc->formaPago = null;
		}

		if(in_array($doc->tipoDte->id, $dte_multi)){
			multiPage($doc);
		}
		else{
			singlePage($doc);
		}
	}
}

function singlePage($doc){
	global $app;
	$dte_xml = explode(",", DTE_XML);
	$dte_stock = explode(",", DTE_STOCK);
	$dte_stock_anular = explode(",", DTE_STOCK_ANULAR);
	$fecha = date("Y-m-d H:i:s");
	$detalles = $doc->detalles;
	$dte = $doc->tipoDte->id;
	if(empty($doc->vendedor)){
		$doc->vendedor = $doc->user;
	}

	// Temp settings
	$sucursal = $doc->sucursal->id;
	$referencias = null;
	$despacho = null;

	// Set time format for SII 
	$tiempo = str_replace(' ', 'T', $fecha);
	$fechadte = substr($fecha, 0, 10);
	
	$sql0 = "SELECT MAX(id) as id FROM tbl_dtes where dte = :dte";

	$sql_config = "SELECT testMode from tbl_config where id = 1";

	$sql_caf = "SELECT dte, caf, rsask, desde, hasta, fecha FROM tbl_caf where dte = :dte AND :id >= desde AND :id <= hasta ORDER BY id DESC LIMIT 1";

	$sql_dte = "INSERT INTO tbl_dtes (dte, id, fecha, descuentoNeto, descuentoBruto, exento, neto, iva, total, user_id, vendedor_id, sucursal_id, bruto) 
			VALUES (:dte, :id, :fecha, :descuentoNeto, :descuentoBruto, :exento, :neto, :iva, :total, :user_id, :vendedor_id, :sucursal_id, :bruto)";

	$sql_forma_pago = "INSERT INTO tbl_dtes_forma_pago (dte, folio_id, forma_id) 
			VALUES (:dte, :folio_id, :forma_id)";

	$sql_credito = "INSERT INTO tbl_dtes_credito (dte, folio_id, condicion)
		VALUES (:dte, :folio_id, :condicion)";

	$sql_cliente = "INSERT INTO tbl_dtes_cliente (dte, folio_id, rut, razon, giro, direccion, comuna, ciudad, cliente_id) 
			VALUES (:dte, :folio_id, :rut, :razon, :giro, :direccion, :comuna, :ciudad, :cliente_id)";

	$sql_detalle = "INSERT INTO tbl_dtes_detalles (codigo, producto, unidad, cantidad, precio, porciento, exento, modelo_id, producto_id, dte, folio_id) 
			VALUES (:codigo, :producto, :unidad, :cantidad, :precio, :porciento, :exento, :modelo_id, :producto_id, :dte, :folio_id)";

	$sql_referencia = "INSERT INTO tbl_dtes_referencia (dte, folio_id, ref_dte, ref_folio_id, razon, codref)
		VALUES (:dte, :folio_id, :ref_dte, :ref_folio_id, :razon, :codref)";

	$sql_anular = "INSERT INTO tbl_dtes_anulado (dte, folio_id, anulado) VALUES (:dte, :folio_id, :anulado)";

	$sql_stock = "INSERT INTO tbl_productos_stock (sucursal_id, modelo_id, stock) VALUES (:sucursal_id, :modelo_id, :cantidad) 
	ON DUPLICATE KEY UPDATE stock=stock+:cantidad";

	/*
	$sql_transporte = "INSERT INTO tbl_dtes_transporte (dte, folio_id, bultos, transporte) VALUES (:dte, :folio_id, :bultos, :transporte)";
	*/

	$sql_xml = "INSERT INTO tbl_dtes_xml (dte, folio_id, xml) VALUES (:dte, :folio_id, :xml)";

	$sql_trackid = "UPDATE tbl_dtes_xml SET trackid = :trackid WHERE dte = :dte AND folio_id = :folio_id";
	
	$sql6 = "SELECT token from tbl_sii where id = 1";

	$sql_mail = "INSERT INTO tbl_dtes_mail (dte, folio_id, email) VALUES (:dte, :folio_id, :email)";


	try{
		$db = connect_db();
		$db->beginTransaction();
		$xmls = array();

		/* Get last ID for the dte and assign the next one*/
		$q0 = $db->prepare($sql0);
		$q0->bindParam(":dte", $dte);
		$q0->execute();
		$result = $q0->fetch(PDO::FETCH_OBJ);

		$q = $db->prepare($sql_config);
		$q->execute();
		$config = $q->fetch(PDO::FETCH_OBJ);

		if($result !== null)
			$lastid = $result->id + 1;
		else
			$lastid = 1;
	
		if(in_array($dte, $dte_xml)){
			$qcaf = $db->prepare($sql_caf);
			$qcaf->bindParam(':dte', $dte);
			$qcaf->bindParam(':id', $lastid);
			$qcaf->execute();
			$caf = $qcaf->fetch(PDO::FETCH_OBJ);
			if (empty($caf)){
				throw new Exception("No se encontro el CAF para folio #" . $lastid . '. Porfavor pida mas folios al www.sii.cl.');
			}
			
			$RSASK = (string)$caf->rsask;
			$pkeyid = openssl_pkey_get_private($RSASK);
		}

		$q1 = $db->prepare($sql_dte);
		$q1->bindParam(':dte', $dte);
		$q1->bindParam(':id', $lastid);
		$q1->bindParam(':fecha', $fecha);
		$q1->bindParam(':descuentoNeto', $doc->descuentoNeto);
		$q1->bindParam(':descuentoBruto', $doc->descuentoBruto);
		$q1->bindParam(':exento', $doc->totalExento);
		$q1->bindParam(':neto', $doc->totalNeto);
		$q1->bindParam(':iva', $doc->iva);
		$q1->bindParam(':total', $doc->granTotal);
		$q1->bindParam(':user_id', $doc->user->id);
		$q1->bindParam(':vendedor_id', $doc->vendedor->id); //we need to change this to vendedor
		$q1->bindParam(':sucursal_id', $doc->sucursal->id);
		$q1->bindParam(':bruto', $doc->bruto);
		$q1->execute();

		if(isset($doc->formaPago)){
			$q = $db->prepare($sql_forma_pago);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':folio_id', $lastid);
			$q->bindParam(':forma_id', $doc->formaPago->id);
			$q->execute();
		}

		if(isset($doc->condicion)){
			$q = $db->prepare($sql_credito);
			$q->bindParam(':dte', $dte);
			$q->bindParam(':folio_id', $lastid);
			$q->bindParam(':condicion', $doc->condicion);
			$q->execute();
		}

		if(isset($doc->cliente->id)){
			if($doc->cliente->id > 0){
				$q = $db->prepare($sql_cliente);
				$q->bindParam(':dte', $dte);
				$q->bindParam(':folio_id', $lastid);
				$q->bindParam(':rut', $doc->cliente->rut);
				$q->bindParam(':razon', $doc->cliente->razon);
				$q->bindParam(':giro', $doc->cliente->giro);
				$q->bindParam(':direccion', $doc->cliente->direccion);
				$q->bindParam(':comuna', $doc->cliente->comuna);
				$q->bindParam(':ciudad', $doc->cliente->ciudad);
				$q->bindParam(':cliente_id', $doc->cliente->id);
				$q->execute();
			}
		}

		$q2 = $db->prepare($sql_detalle);
		foreach($detalles as $detalle)
		{
			$tempModeloId = null;
			if(empty($detalle->unidad))
				$detalle->unidad = '';
			if(empty($detalle->exento))
				$detalle->exento = 0;
			if(empty($detalle->id))
				$detalle->id = null;

			if(isset($detalle->modelo)){
				$tempModeloId = $detalle->modelo->id;
			}

			$q2->bindParam(':codigo', $detalle->codigo);
			$q2->bindParam(':producto', $detalle->producto);
			$q2->bindParam(':unidad', $detalle->unidad);
			$q2->bindParam(':cantidad', $detalle->cantidad);
			$q2->bindParam(':precio', $detalle->precio);
			$q2->bindParam(':porciento', $detalle->porciento);
			$q2->bindParam(':exento', $detalle->exento);
			$q2->bindParam(':modelo_id', $tempModeloId);
			$q2->bindParam(':producto_id', $detalle->id);
			$q2->bindParam(':dte', $dte);
			$q2->bindParam(':folio_id', $lastid);
			$q2->execute();
		}

		if(isset($doc->referencias)){
			$q = $db->prepare($sql_referencia);
			foreach($doc->referencias as $referencia){
				if(empty($referencia->codref))
					continue;
				if($referencia->dte == 0){
					$referencia->dte = "SET";
					continue;
				}
				$q->bindParam(':dte', $dte);
				$q->bindParam(':folio_id', $lastid);
				$q->bindParam(':ref_dte', $referencia->dte);
				$q->bindParam(':ref_folio_id', $referencia->id);
				$q->bindParam(':razon', $referencia->razonref);
				$q->bindParam(':codref', $referencia->codref);
				$q->execute();
			}
		}

		if(in_array($dte, $dte_stock)){
			$q = $db->prepare($sql_stock);
			foreach($detalles as $detalle)
			{
				$tempModeloId = null;
					
				if(isset($detalle->modelo)){
					$tempModeloId = $detalle->modelo->id;
				}
				if(!empty($tempModeloId)){
					$stock = $detalle->cantidad * -1;
					$q->bindParam(':modelo_id', $tempModeloId);
					$q->bindParam(':sucursal_id', $doc->sucursal->id);
					$q->bindParam(':cantidad', $stock);
					$q->execute();
				}
			}
		}

		if(in_array($dte, $dte_stock_anular) && $doc->codref == 1){
			$q = $db->prepare($sql_stock);
			if($dte == 61){
				$modifier = 1;
			}
			else{
				$modifier = -1;
			}
			foreach($detalles as $detalle)
			{
				$stock = $detalle->cantidad * $modifier;
				if(!empty($detalle->modelo_id)){
					$q->bindParam(':modelo_id', $detalle->modelo_id);
					$q->bindParam(':sucursal_id', $doc->sucursal->id);
					$q->bindParam(':cantidad', $stock);
					$q->execute();
				}
			}
		}

		if(isset($doc->referencia)){
			if($doc->referencia->codref == 1){
				$anulado = 1;
				$q = $db->prepare($sql_anular);
				$q->bindParam(":dte", $doc->referencia->dte);
				$q->bindParam(":folio_id", $doc->referencia->id);
				$q->bindParam(":anulado", $anulado);
				$q->execute();
			}
		}

		/*
		if($doc->bultos || $doc->transporte){
			$q = $db->prepare($sql_transporte);
			$q->bindParam(":dte", $dte);
			$q->bindParam(":folio_id", $lastid);
			$q->bindParam(":bultos", $doc->bultos);
			$q->bindParam(":transporte", $doc->transporte);
			$q->execute();
		}
		*/

		$DTEstring = "";

		if(in_array($dte, $dte_xml)){
			$DTEstring = generarDTE($db, $doc, $lastid, $fecha, $pkeyid, $caf->caf);
			$xmls[] = $DTEstring;

			$q5 = $db->prepare($sql_xml);
			$q5->bindParam(':dte', $dte);
			$q5->bindParam(':folio_id', $lastid);
			$q5->bindParam(':xml', $DTEstring);
			$q5->execute();		

			$q6 = $db->prepare($sql6);
			$q6->execute();
			$semilla = $q6->fetch(PDO::FETCH_OBJ);
			$token = $semilla->token;

			/************ GENERAR EL SET DTE ****************/
			$envio = dteSet($xmls, $dte);
			$envio_cliente = dteSetCliente($xmls, $dte, $doc->cliente->rut);
			$base64 = base64_encode($envio_cliente);

			if(!$config->testMode){
				$siiPHP = envioAutomatico($envio, $token);

				if($siiPHP->STATUS != 0){
					if($siiPHP->STATUS == 5){
						$newToken = updateToken();
						if($newToken == false){
							throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . '. No se pudo recuperar token ya que SII esta saturado.  Porfavor intente crear denuevo.');
						}
						else{
							$siiPHP = envioAutomatico($envio, $newToken);
						}
					}
					else
						throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII. Porfavor contacte a Tokki.");
				}
			
				if(!empty($siiPHP->TRACKID)){
					$q5 = $db->prepare($sql_trackid);
					$q5->bindParam(':trackid', $siiPHP->TRACKID);
					$q5->bindParam(':dte', $dte);
					$q5->bindParam(':folio_id', $lastid);
					$q5->execute();		
				}
				else
					throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII.");
			
				/************ MANDAR EL DTE AL CLIENTE ****************/
				$sentmail = maildte($base64, $doc->cliente->rut);

				if($sentmail != ""){
					$q = $db->prepare($sql_mail);
					$q->bindParam(':dte', $dte);
					$q->bindParam(':folio_id', $lastid);
					$q->bindParam(':email', $sentmail);
					$q->execute();
				}
				/************ END MANDAR AL CLIENTE ****************/
			}
		}

		$result = array();
		$result['xml'] = $xmls;

   		$db->commit();
		echo '{"id" : "' . $lastid . '", "fecha" : "' . $fecha . '", "xml" : ' . json_encode($result, JSON_NUMERIC_CHECK) . '}';
	}
	catch (PDOException $e) {
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
			$app->response->setBody('El folio que quiere crear ya fue creada.  Por favor intente crear denuevo.');
		} else {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage() . '\r\n' . $e->getLine());
		}
	}
	catch (Exception $e) {
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage() . '\r\n' . $e->getLine());
	}
}

function multiPage($doc){
	global $app;
	$dte_xml = explode(",", DTE_XML);
	$dte_stock = explode(",", DTE_STOCK);
	$dte = $doc->tipoDte->id;
	$fecha = date("Y-m-d H:i:s");
	$pages = $doc->pages;

	// Set time format for SII 
	$tiempo = str_replace(' ', 'T', $fecha);
	$fechadte = substr($fecha, 0, 10);

	$sql0 = "SELECT MAX(id) as id FROM tbl_dtes where dte = :dte";

	$sql_config = "SELECT testMode from tbl_config where id = 1";

	$sql_caf = "SELECT dte, caf, rsask, desde, hasta, fecha FROM tbl_caf where dte = :dte AND :id >= desde AND :id <= hasta ORDER BY id DESC LIMIT 1";

	$sql_dte = "INSERT INTO tbl_dtes (dte, id, fecha, descuentoNeto, descuentoBruto, exento, neto, iva, total, user_id, vendedor_id, sucursal_id, bruto) 
			VALUES (:dte, :id, :fecha, :descuentoNeto, :descuentoBruto, :exento, :neto, :iva, :total, :user_id, :vendedor_id, :sucursal_id, :bruto)";

	$sql_forma_pago = "INSERT INTO tbl_dtes_forma_pago (dte, folio_id, forma_id) 
			VALUES (:dte, :folio_id, :forma_id)";

	$sql_credito = "INSERT INTO tbl_dtes_credito (dte, folio_id, condicion)
		VALUES (:dte, :folio_id, :condicion)";

	$sql_cliente = "INSERT INTO tbl_dtes_cliente (dte, folio_id, rut, razon, giro, direccion, comuna, ciudad, cliente_id) 
			VALUES (:dte, :folio_id, :rut, :razon, :giro, :direccion, :comuna, :ciudad, :cliente_id)";

	$sql_new_cliente = "INSERT INTO tbl_clientes (razon, rut, giro, telefono, email, grade)
			VALUES (:razon, :rut, :giro, :telefono, :email, :grade)";

	$sql_new_dir = "INSERT INTO tbl_direcciones (cliente_id, direccion, comuna, ciudad)
			VALUES (:cliente_id, :direccion, :comuna, :ciudad)";

	$sql_detalle = "INSERT INTO tbl_dtes_detalles (codigo, producto, unidad, cantidad, precio, porciento, exento, modelo_id, producto_id, dte, folio_id) 
			VALUES (:codigo, :producto, :unidad, :cantidad, :precio, :porciento, :exento, :modelo_id, :producto_id, :dte, :folio_id)";

	$sql_stock = "INSERT INTO tbl_productos_stock (sucursal_id, modelo_id, stock) VALUES (:sucursal_id, :modelo_id, :cantidad) 
	ON DUPLICATE KEY UPDATE stock=stock+:cantidad";

	$sql_xml = "INSERT INTO tbl_dtes_xml (dte, folio_id, xml) VALUES (:dte, :folio_id, :xml)";

	$sql_trackid = "UPDATE tbl_dtes_xml SET trackid = :trackid WHERE dte = :dte AND folio_id = :folio_id";

	$sql_referencia = "INSERT INTO tbl_dtes_referencia (dte, folio_id, ref_dte, ref_folio_id, razon, codref)
		VALUES (:dte, :folio_id, :ref_dte, :ref_folio_id, :razon, :codref)";

	$sql_despacho = "INSERT INTO tbl_dtes_despacho (dte, folio_id, traslado, tipo)
		VALUES (:dte, :folio_id, :traslado, :tipo)";

	$sql6 = "SELECT token from tbl_sii where id = 1";

	$sql_mail = "INSERT INTO tbl_dtes_mail (dte, folio_id, email) VALUES (:dte, :folio_id, :email)";

	$credito_id = 1;

	try{
		$db = connect_db();
		$db->beginTransaction();

		// count facturas 
		$paginas = count($pages);

		// Initialize the array where the xmls will be stored to generate the set 
		$xmls = array();
		$folios = array();
		$xs = array();

		$q = $db->prepare($sql_config);
		$q->execute();
		$config = $q->fetch(PDO::FETCH_OBJ);

		// Get last ID for the dte and assign the next one
		$q0 = $db->prepare($sql0);
		$q0->bindParam(":dte", $dte);
		$q0->execute();
		$result = $q0->fetch(PDO::FETCH_OBJ);
		if($result !== null){
			$lastid = $result->id + $paginas;
			$folio_id = $result->id + $paginas;
		}
		else{
			$lastid = $paginas;
			$folio_id = $paginas;
		}

		for($x=0; $x<$paginas; $x++){
			$page = $pages[$x];
			$detalles = $page->detalles;
			if(empty($doc->vendedor)){
				$page->vendedor = $page->user;
			}
			else{
				$page->vendedor = $doc->vendedor;
			}

			if(isset($doc->referencias)){
				$page->referencias = $doc->referencias;
			}
			if($dte == 52){
				$page->traslado = $doc->traslado;
				$page->despacho = $doc->despacho;
			}

			if(empty($page->descuentoNeto))
				$page->descuentoNeto = 0;


			if(empty($page->descuentoBruto))
				$page->descuentoBruto = 0;

			if(empty($page->bruto))
				$page->bruto = 0;

			if(empty($page->formaPago))
				$page->formaPago = null;

			if(empty($page->referencias))
				$page->referencias = null;

			if(empty($page->despacho))
				$page->despacho = null;

			// add the id to the folios array
			$folios[] = $lastid;
			$xs[] = $x;

			$qcaf = $db->prepare($sql_caf);
			$qcaf->bindParam(':dte', $dte);
			$qcaf->bindParam(':id', $lastid);
			$qcaf->execute();
			$caf = $qcaf->fetch(PDO::FETCH_OBJ);
			if (empty($caf)){
				throw new Exception("No se encontro el CAF para folio #" . $lastid . '. Porfavor pida mas folios al www.sii.cl.');
			}
			
			$RSASK = (string)$caf->rsask;
			$pkeyid = openssl_pkey_get_private($RSASK);
			

			$q1 = $db->prepare($sql_dte);
			$q1->bindParam(':dte', $dte);
			$q1->bindParam(':id', $lastid);
			$q1->bindParam(':fecha', $fecha);
			$q1->bindParam(':descuentoNeto', $page->descuentoNeto);
			$q1->bindParam(':descuentoBruto', $page->descuentoBruto);
			$q1->bindParam(':exento', $page->totalExento);
			$q1->bindParam(':neto', $page->totalNeto);
			$q1->bindParam(':iva', $page->iva);
			$q1->bindParam(':total', $page->granTotal);
			$q1->bindParam(':user_id', $page->user->id);
			$q1->bindParam(':vendedor_id', $page->vendedor->id); //This is temp
			$q1->bindParam(':sucursal_id', $doc->sucursal->id);
			$q1->bindParam(':bruto', $page->bruto); // Maybe it should be $doc->bruto
			$q1->execute();

			if($page->formaPago){
				$q = $db->prepare($sql_forma_pago);
				$q->bindParam(':dte', $dte);
				$q->bindParam(':folio_id', $lastid);
				$q->bindParam(':forma_id', $page->formaPago->id);
				$q->execute();
			}

			if(isset($page->condicion)){
				$q = $db->prepare($sql_credito);
				$q->bindParam(':dte', $dte);
				$q->bindParam(':folio_id', $lastid);
				$q->bindParam(':condicion', $page->condicion);
				$q->execute();
			}

			if($page->cliente){
				if(isset($page->cliente->id) && $page->cliente->id > 0){
					$q = $db->prepare($sql_cliente);
					$q->bindParam(':dte', $dte);
					$q->bindParam(':folio_id', $lastid);
					$q->bindParam(':rut', $page->cliente->rut);
					$q->bindParam(':razon', $page->cliente->razon);
					$q->bindParam(':giro', $page->cliente->giro);
					$q->bindParam(':direccion', $page->cliente->direccion);
					$q->bindParam(':comuna', $page->cliente->comuna);
					$q->bindParam(':ciudad', $page->cliente->ciudad);
					$q->bindParam(':cliente_id', $page->cliente->id);
					$q->execute();
				}
				else{
					if(empty($page->cliente->grade))
						$page->cliente->grade = 0;
					$q = $db->prepare($sql_new_cliente);			
					$q->bindParam(':razon', $page->cliente->razon);
					$q->bindParam(':rut', $page->cliente->rut);
					$q->bindParam(':giro', $page->cliente->giro);
					$q->bindParam(':telefono', $page->cliente->telefono);
					$q->bindParam(':email', $page->cliente->email);
					$q->bindParam(':grade', $page->cliente->grade);
					$q->execute();
					
					$cliente_id = $db->lastInsertId();
					$page->cliente->id = $cliente_id;

					$q = $db->prepare($sql_new_dir);
					$q->bindParam(':direccion', $page->cliente->direccion);
					$q->bindParam(':comuna', $page->cliente->comuna);
					$q->bindParam(':ciudad', $page->cliente->ciudad);
					$q->bindParam(':cliente_id', $cliente_id);
					$q->execute();

					$q = $db->prepare($sql_cliente);
					$q->bindParam(':dte', $dte);
					$q->bindParam(':folio_id', $lastid);
					$q->bindParam(':rut', $page->cliente->rut);
					$q->bindParam(':razon', $page->cliente->razon);
					$q->bindParam(':giro', $page->cliente->giro);
					$q->bindParam(':direccion', $page->cliente->direccion);
					$q->bindParam(':comuna', $page->cliente->comuna);
					$q->bindParam(':ciudad', $page->cliente->ciudad);
					$q->bindParam(':cliente_id', $page->cliente->id);
					$q->execute();
				}
			}

			$q2 = $db->prepare($sql_detalle);
			foreach($detalles as $detalle)
			{
				$tempModeloId = null;
				if(empty($detalle->unidad))
					$detalle->unidad = '';
				if(empty($detalle->exento))
					$detalle->exento = 0;
				if(empty($detalle->id))
					$detalle->id = null;

				if(isset($detalle->modelo)){
					$tempModeloId = $detalle->modelo->id;
				}

				$q2->bindParam(':codigo', $detalle->codigo);
				$q2->bindParam(':producto', $detalle->producto);
				$q2->bindParam(':unidad', $detalle->unidad);
				$q2->bindParam(':cantidad', $detalle->cantidad);
				$q2->bindParam(':precio', $detalle->precio);
				$q2->bindParam(':porciento', $detalle->porciento);
				$q2->bindParam(':exento', $detalle->exento);
				$q2->bindParam(':modelo_id', $tempModeloId);
				$q2->bindParam(':producto_id', $detalle->id);
				$q2->bindParam(':dte', $dte);
				$q2->bindParam(':folio_id', $lastid);
				$q2->execute();
			}

			if(in_array($dte, $dte_stock)){
				$q = $db->prepare($sql_stock);
				foreach($detalles as $detalle)
				{
					$tempModeloId = null;

					if(isset($detalle->modelo)){
						$tempModeloId = $detalle->modelo->id;
					}
					if(!empty($tempModeloId)){
						$stock = $detalle->cantidad * -1;
						$q->bindParam(':modelo_id', $tempModeloId);
						$q->bindParam(':sucursal_id', $doc->sucursal->id);
						$q->bindParam(':cantidad', $stock);
						$q->execute();
					}
				}
			}
			
			if($page->referencias){
				$q = $db->prepare($sql_referencia);
				foreach($page->referencias as $referencia){
					if(empty($referencia->codref))
						continue;
					if($referencia->dte == 0){
						$referencia->dte = "SET";
						continue;
					}
					$q->bindParam(':dte', $dte);
					$q->bindParam(':folio_id', $lastid);
					$q->bindParam(':ref_dte', $referencia->dte);
					$q->bindParam(':ref_folio_id', $referencia->id);
					$q->bindParam(':razon', $referencia->razonref);
					$q->bindParam(':codref', $referencia->codref);
					$q->execute();
				}
			}

			if($dte == 52 && isset($page->traslado->id)){
				$q = $db->prepare($sql_despacho);
				$q->bindParam(':dte', $dte);
				$q->bindParam(':folio_id', $lastid);
				$q->bindParam(':traslado', $page->traslado->id);
				$q->bindParam(':tipo', $page->despacho->id);
				$q->execute();
			}

			if(in_array($dte, $dte_xml)){
				$DTEstring = generarDTE($db, $page, $lastid, $fecha, $pkeyid, $caf->caf);
				$xmls[] = $DTEstring;

				$q5 = $db->prepare($sql_xml);
				$q5->bindParam(':dte', $dte);
				$q5->bindParam(':folio_id', $lastid);
				$q5->bindParam(':xml', $DTEstring);
				$q5->execute();
			}
			$lastid--;
		}			

		$lastid++;	


		$q6 = $db->prepare($sql6);
		$q6->execute();
		$semilla = $q6->fetch(PDO::FETCH_OBJ);
		$token = $semilla->token;	


		/************ GENERAR EL SET DTE ****************/
		$envio = dteSet($xmls, $dte);
		$envio_cliente = dteSetCliente($xmls, $dte, $doc->cliente->rut);
		$base64 = base64_encode($envio_cliente);

		/************ MANDAR EL DTE AL SII ****************/
		// if its not testMode 
		if(!$config->testMode){
			$siiPHP = envioAutomatico($envio, $token);

			if($siiPHP->STATUS != 0){
				if($siiPHP->STATUS == 5){
					$newToken = updateToken();
					if($newToken == false){
						throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . '. No se pudo recuperar token ya que SII esta saturado.  Porfavor intente crear denuevo.');
					}
					else{
						$siiPHP = envioAutomatico($envio, $newToken);
					}
				}
				else
					throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII ya que SII esta saturado.  Porfavor contactese con Tokki si el problema persiste");
			}

			
			// Here we put the trackid (only 1) for all the folios
			for($x=0; $x<$paginas; $x++){

				if(!empty($siiPHP->TRACKID)){
					$q5 = $db->prepare($sql_trackid);
					$q5->bindParam(':trackid', $siiPHP->TRACKID);
					$q5->bindParam(':dte', $dte);
					$q5->bindParam(':folio_id', $folio_id);
					$q5->execute();		
				}
				else
					throw new Exception("DTE no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII.");
			
				$folio_id--;
			}

			/************ MANDAR EL DTE AL CLIENTE ****************/
			$sentmail = maildte($base64, $doc->cliente->rut);

			if($sentmail != ""){
				for($x=0; $x<count($folios); $x++){
					$id = $folios[$x];
					if($sentmail != ""){
						$q = $db->prepare($sql_mail);
						$q->bindParam(':dte', $dte);
						$q->bindParam(':folio_id', $id);
						$q->bindParam(':email', $sentmail);
						$q->execute();
					}
				}
			}

			/************ END MANDAR AL CLIENTE ****************/

			$result = $xmls;
	   		$db->commit();
	   		echo '{"id" : "' . $lastid . '", "trackid" : "' . $siiPHP->TRACKID . '", "xml" : ' . json_encode($result, JSON_NUMERIC_CHECK) .  ', "cliente_id" : "' . $page->cliente->id . '"}';
		}
		else{

			/************ MANDAR EL DTE AL CLIENTE ****************/
			/*
			$sentmail = maildte($base64, $doc->cliente->rut);

			if($sentmail != ""){
				for($x=0; $x<count($folios); $x++){
					$id = $folios[$x];
					if($sentmail != ""){
						$q = $db->prepare($sql_mail);
						$q->bindParam(':dte', $dte);
						$q->bindParam(':folio_id', $id);
						$q->bindParam(':email', $sentmail);
						$q->execute();
					}
				}
			}
			*/
			

			/************ END MANDAR AL CLIENTE ****************/
			$result = $xmls;
	   		$db->commit();
	   		echo '{"id" : "' . $lastid . '", "fecha" : "' . $fecha . 
	   		'", "xml" : ' . json_encode($result, JSON_NUMERIC_CHECK) . 
	   		', "cliente_id" : "' . $page->cliente->id . '"}';
		}
	}
	catch (PDOException $e) {
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
			$app->response->setBody('El folio que quiere crear ya fue creada.  Por favor intente crear denuevo. ' . implode(", ", $folios));
		} else {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage() . '\r\n' . $e->getLine());
		}
	}
	catch (Exception $e) {
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage() . '\r\n' . $e->getLine());
	}
}


function datosLibroVentasPorFechas(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$fecha = substr($request->get('fecha'), 0, 7) . '%';
		$sql = "SELECT a.dte, a.id, fecha, b.rut, b.razon, exento, neto, iva, total, anulado FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_cliente b ON a.dte = b.dte AND a.id = b.folio_id
		LEFT JOIN tbl_clientes c ON b.cliente_id = c.id
		LEFT JOIN tbl_dtes_anulado d ON a.dte = d.dte AND a.id = d.folio_id
		WHERE a.dte IN (" . DTE_LIBRO_VENTAS . ") AND fecha LIKE :fecha";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':fecha', $fecha);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function boletasLibroVentasPorFechas(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$fecha = substr($request->get('fecha'), 0, 7) . '%';
		$sql = "SELECT id, fecha, anulado, exento, neto, iva, total FROM tbl_dtes WHERE dte = 35 AND fecha LIKE :fecha";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':fecha', $fecha);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function dtesLibroCompras(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$gotFecha = $request->get('fecha') . '-01';
		$fecha = date("Y-m-t", strtotime($gotFecha));
		$sql = "SELECT a.dte, a.id, a.rut, a.fecha, a.razon, a.exento, a.neto, a.iva, a.total, a.user_id, a.status, a.dtexml, b.fctprop as ivacomun_fctprop, b.iva as ivacomun_iva, b.total as ivacomun_total, c.codigo as norec_codigo, c.iva as norec_iva, d.codigo as ila_codigo, d.tasa as ila_tasa, d.monto as ila_monto FROM tbl_r_dtes a 
			LEFT JOIN tbl_r_dtes_ivacomun b ON a.dte = b.dte AND a.id = b.folio_id AND a.rut = b.rut
			LEFT JOIN tbl_r_dtes_norec c ON a.dte = c.dte AND a.id = c.folio_id AND a.rut = c.rut
			LEFT JOIN tbl_r_dtes_ila d ON a.dte = d.dte AND a.id = d.folio_id AND a.rut = d.rut
			WHERE status = 0 AND fecha BETWEEN DATE_SUB(:fecha ,INTERVAL 90 DAY) AND :fecha";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':fecha', $fecha);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function datosLibroGuias(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$gotFecha = $request->get('fecha') . '-01';
		$fecha = date("Y-m-t 23:59:59", strtotime($gotFecha));
		$sql = "SELECT a.dte, a.id, fecha, b.rut, b.razon, exento, neto, iva, total, traslado, tipo, e.anulado FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_cliente b ON a.dte = b.dte AND a.id = b.folio_id
		LEFT JOIN tbl_clientes c ON b.cliente_id = c.id
		LEFT JOIN tbl_dtes_despacho d ON a.id = d.folio_id AND a.dte = d.dte 
		LEFT JOIN tbl_dtes_anulado e ON a.id = e.folio_id AND a.dte = e.dte
		WHERE a.dte = 52 AND fecha BETWEEN DATE_SUB(:fecha ,INTERVAL 90 DAY) AND :fecha";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':fecha', $fecha);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	}
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}
/************************* Libro Ventas *********************************/
function envioVenta(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->data;
		$resumen = $data->resumen;
		$periodo = $data->periodo;
		if(empty($data->rectificacion)){
			$rectificacion = "";
		}
		else{
			$rectificacion = $data->rectificacion;
		}
		$periodoSql = $periodo . '-01';
		$tipoLibro = 0;

		$db = connect_db();
		$db->beginTransaction();
		$envio = createLibroVenta($db, $periodo, $dtes, $resumen, $rectificacion);
		$base64 = base64_encode($envio);

		$sql = "INSERT INTO tbl_libros (tipo, periodo, trackid, xml) VALUES (:tipo, :periodo, :trackid, :xml)";
		$sql_token = "SELECT token from tbl_sii where id = 1";
		$sql_config = "SELECT testMode from tbl_config where id = 1";

		try{
			$q = $db->prepare($sql_token);
			$q->execute();
			$semilla = $q->fetch(PDO::FETCH_OBJ);
			$token = $semilla->token;


			$q = $db->prepare($sql_config);
			$q->execute();
			$config = $q->fetch(PDO::FETCH_OBJ);

			$trackid = 0;

			if(!$config->testMode){
				
				$siiPHP = envioAutomatico($envio, $token);

				if($siiPHP->STATUS != 0){
					if($siiPHP->STATUS == 5){
						$newToken = updateToken();
						if($newToken == false){
							throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . '. No se pudo recuperar token ya que SII esta saturado.  Porfavor intente crear denuevo.');
						}
						else{
							$siiPHP = envioAutomatico($envio, $newToken);
						}
					}
					else
						throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII. Porfavor contacte a Tokki.");
				}

				if(!empty($siiPHP->TRACKID)){
					$q = $db->prepare($sql);
					$q->bindParam(':tipo', $tipoLibro);
					$q->bindParam(':periodo', $periodoSql);
					$q->bindParam(':xml', $base64);
					$q->bindParam(':trackid', $siiPHP->TRACKID);
					$q->execute();		
				}
				else
					throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII.");
				
				$trackid = $siiPHP->TRACKID;
			}
			$db->commit();

			echo '{"tipo": "' . $tipoLibro . '", "periodo": "'. $periodoSql .'", "xml": "' . $base64 . '", "trackid": "'. $trackid . '"}';
		}
		catch (Exception $e) {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
}


function xmlLibroVenta(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->data;
		$resumen = $data->resumen;
		$periodo = $data->periodo;
		if(empty($data->rectificacion)){
			$rectificacion = "";
		}
		else{
			$rectificacion = $data->rectificacion;
		}
		$periodoSql = $periodo . '-01';
		$tipoLibro = 0;

		$db = connect_db();
		$db->beginTransaction();
		$envio = createLibroVenta($db, $periodo, $dtes, $resumen, $rectificacion);
		$base64 = base64_encode($envio);
	
		$db->commit();

		echo '{"tipo": "' . $tipoLibro . '", "periodo": "'. $periodoSql .'", "xml": "' . $base64 . '"}';
	}
}

function createLibroVenta($db, $periodo, $dtes, $resumen, $rectificacion){
	$tiempo = date("Y-m-d\TH:i:s");

	$sql_info = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";

	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	try{
		$q = $db->prepare($sql_info);
		$q->execute();
		$Emisor = $q->fetch(PDO::FETCH_OBJ);

		$q = $db->prepare($sql_certificate);
		$q->execute();
		$Certificado = $q->fetch(PDO::FETCH_OBJ);
	}
	catch(PDOException $e){
	}

	$xml = new XMLWriter(); 
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('LibroCompraVenta'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte LibroCV_v10.xsd'); 
			$xml->startElement('EnvioLibro'); 
			//No se que ID
			$xml->writeAttribute('ID', 'LibroVenta'.$periodo); 
				$xml->startElement('Caratula');
					$xml->writeElement('RutEmisorLibro', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					$xml->writeElement('PeriodoTributario', $periodo);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					$xml->writeElement('TipoOperacion', 'VENTA');
					if($rectificacion){
						$xml->writeElement('TipoLibro', 'RECTIFICA');
						$xml->writeElement('TipoEnvio', 'TOTAL');
						$xml->writeElement('CodAutRec', $rectificacion);
					}
					else{
						$xml->writeElement('TipoLibro', 'MENSUAL');
						$xml->writeElement('TipoEnvio', 'TOTAL');
					}

				$xml->endElement(); //end Caratula

				if(count($resumen)){
					$xml->startElement('ResumenPeriodo');
					foreach($resumen as $dte){
						if($dte->folios > 0){
							if(empty($dte->anulados)){
								$dte->anulados = 0;
							}
							$xml->startElement('TotalesPeriodo');
								$xml->writeElement('TpoDoc', $dte->dte);
								$xml->writeElement('TotDoc', $dte->folios);
								if($dte->anulados > 0){
									$xml->writeElement('TotAnulado', $dte->anulados);
								}
								$xml->writeElement('TotMntExe', $dte->exento);
								$xml->writeElement('TotMntNeto', $dte->neto);
								$xml->writeElement('TotMntIVA', $dte->iva);
								$xml->writeElement('TotMntTotal', $dte->total);
							$xml->endElement();
						}
					}
					$xml->endElement(); //End Resumen Periodo
				}

				foreach($dtes as $dte){
					if(empty($dte->anulado)){
						$dte->anulado = 0;
					}
					$xml->startElement('Detalle');
						$xml->writeElement('TpoDoc', $dte->dte);
						$xml->writeElement('NroDoc', $dte->id);
						if($dte->anulado > 0 && ($dte->dte == 52 || $dte->dte == 30)){
							$xml->writeElement('Anulado', 'A');
						}
						$xml->writeElement('TasaImp', $Emisor->iva);
						$xml->writeElement('FchDoc', substr($dte->fecha, 0, 10));
						$xml->writeElement('RUTDoc', $dte->rut);
						$xml->writeElement('RznSoc', substr($dte->razon, 0, 40));
						$xml->writeElement('MntExe', $dte->exento);
						$xml->writeElement('MntNeto', $dte->neto);
						$xml->writeElement('MntIVA', $dte->iva);
						$xml->writeElement('MntTotal', $dte->total);
					$xml->endElement();
				}
				$xml->writeElement('TmstFirma', $tiempo);
			$xml->endElement(); //end Libro
		$xml->endElement(); //end EnvioLibro
	$xml->endDocument();

	// Convertir a DOM Element para firmar
	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'EnvioLibro', false);
	$envio = $finaldom->saveXML();
	return $envio;
}

function checkLibro(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$fecha = substr($request->get('fecha'), 0, 7) . '%';
		$tipo = $request->get('tipo');
		$sql = "SELECT tipo, periodo, fecha, trackid, xml from tbl_libros WHERE tipo = :tipo AND periodo LIKE :fecha limit 1";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':fecha', $fecha);
			$q->bindParam(':tipo', $tipo);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function envioCompra(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->data;
		$resumen = $data->resumen;
		$periodo = $data->periodo;
		$periodoSql = $periodo . '-01';
		$tipoLibro = 1;

		$db = connect_db();
		$db->beginTransaction();
		$envio = createLibroCompra($db, $periodo, $dtes, $resumen);
		$base64 = base64_encode($envio);

		$sql = "INSERT INTO tbl_libros (tipo, periodo, trackid, xml) VALUES (:tipo, :periodo, :trackid, :xml)";
		$sql_token = "SELECT token from tbl_sii where id = 1";
		$sql_update = "UPDATE tbl_r_dtes set status = 1 where dte = :dte AND id = :id AND rut = :rut";
		$sql_config = "SELECT testMode from tbl_config where id = 1";
		//$sql_dte = "UPDATE tbl_r_dtes..."

		try{
			$q = $db->prepare($sql_token);
			$q->execute();
			$semilla = $q->fetch(PDO::FETCH_OBJ);
			$token = $semilla->token;

			$q = $db->prepare($sql_config);
			$q->execute();
			$config = $q->fetch(PDO::FETCH_OBJ);
			$trackid = 0;

			if(!$config->testMode){
				$siiPHP = envioAutomatico($envio, $token);

				if($siiPHP->STATUS != 0){
					if($siiPHP->STATUS == 5){
						$newToken = updateToken();
						if($newToken == false){
							throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . '. No se pudo recuperar token ya que SII esta saturado.  Porfavor intente crear denuevo.');
						}
						else{
							$siiPHP = envioAutomatico($envio, $newToken);
						}
					}
					else
						throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII. Porfavor contacte a Tokki.");
				}

				if(!empty($siiPHP->TRACKID)){
					$q = $db->prepare($sql);
					$q->bindParam(':tipo', $tipoLibro);
					$q->bindParam(':periodo', $periodoSql);
					$q->bindParam(':xml', $base64);
					$q->bindParam(':trackid', $siiPHP->TRACKID);
					$q->execute();		
				}
				else
					throw new Exception("Libro no fue recibido por SII, error #" . $siiPHP->STATUS . " del SII.");
			
				$q = $db->prepare($sql_update);
				foreach($dtes as $dte){
					$q->bindParam(':dte', $dte->dte);
					$q->bindParam(':id', $dte->id);
					$q->bindParam(':rut', $dte->rut);
					$q->execute();
				}

				$trackid = $siiPHP->TRACKID;
			}

			$db->commit();

			echo '{"tipo": "' . $tipoLibro . '", "periodo": "'. $periodoSql .'", "xml": "' . $base64 . '", "trackid": "'. $trackid . '"}';
		}
		catch (Exception $e) {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
}

function xmlLibroCompra(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->data;
		$resumen = $data->resumen;
		$periodo = $data->periodo;
		$periodoSql = $periodo . '-01';
		$tipoLibro = 1;

		$db = connect_db();
		$db->beginTransaction();
		$envio = createLibroCompra($db, $periodo, $dtes, $resumen);
		$base64 = base64_encode($envio);
		$db->commit();

		echo '{"tipo": "' . $tipoLibro . '", "periodo": "'. $periodoSql .'", "xml": "' . $base64 . '"}';
	}
}

function createLibroCompra($db, $periodo, $dtes, $resumen){
	$tiempo = date("Y-m-d\TH:i:s");

	$sql_info = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";

	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	try{
		$q = $db->prepare($sql_info);
		$q->execute();
		$Emisor = $q->fetch(PDO::FETCH_OBJ);

		$q = $db->prepare($sql_certificate);
		$q->execute();
		$Certificado = $q->fetch(PDO::FETCH_OBJ);
	}
	catch(PDOException $e){
	}

	$ivaAdicional = 0;
	$ivaNoRec = 0;
	$ivaRetenido = 0;

	$xml = new XMLWriter(); 
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('LibroCompraVenta'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte LibroCV_v10.xsd'); 
			$xml->startElement('EnvioLibro'); 
			$xml->writeAttribute('ID', 'LibroCompra'.$periodo); 
				$xml->startElement('Caratula');
					$xml->writeElement('RutEmisorLibro', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					$xml->writeElement('PeriodoTributario', $periodo);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					$xml->writeElement('TipoOperacion', 'COMPRA');
					//ES ESPECIAL PERO ESTA ESPECIFICADO EN http://www.sii.cl/factura_electronica/factura_mercado/inst_set_pruebas.pdf PERO ME FUNCIONO CON MENSUAL
					$xml->writeElement('TipoLibro', 'MENSUAL');
					$xml->writeElement('TipoEnvio', 'TOTAL');
					//if($rectificacion)
					//	$xml->writeElement('CodAutRec', $rectificacion);
				$xml->endElement(); //end Caratula
				
				if(count($resumen)){
						$xml->startElement('ResumenPeriodo');
						foreach($resumen as $dte){
							$ivaNoRec = 0;
							$ivaRetenido = 0;
							if($dte->folios > 0){
								$xml->startElement('TotalesPeriodo');
									$xml->writeElement('TpoDoc', $dte->dte);
									$xml->writeElement('TotDoc', $dte->folios);
									$xml->writeElement('TotMntExe', $dte->exento);
									$xml->writeElement('TotMntNeto', $dte->neto);
									$xml->writeElement('TotMntIVA', $dte->iva);
									foreach($dte->resumenNoRec as $norec){
										$ivaNoRec += $norec->iva;
										$xml->startElement('TotIVANoRec');
											$xml->writeElement('CodIVANoRec', $norec->codigo);
											$xml->writeElement('TotOpIVANoRec', $norec->op);
											$xml->writeElement('TotMntIVANoRec', $norec->iva);
										$xml->endElement();
									}
									if($dte->ivacomun->op > 0){
										$xml->writeElement('TotOpIVAUsoComun', $dte->ivacomun->op);
										$xml->writeElement('TotIVAUsoComun', $dte->ivacomun->iva);
										$xml->writeElement('FctProp', ($dte->ivacomun->fctprop/100));
										$xml->writeElement('TotCredIVAUsoComun', $dte->ivacomun->total);
									}
									if($dte->ilas){
										foreach($dte->ilas as $ila){
											if($ila->codigo != 15){
												$ivaAdicional += $ila->iva;
											}
											$xml->startElement('TotOtrosImp');
												$xml->writeElement('CodImp', $ila->codigo);
												$xml->writeElement('TotMntImp', $ila->iva);
											$xml->endElement();
										}
									}
									if(isset($dte->ivaret->op)){
										$ivaRetenido = $dte->ivaret->iva;
										$xml->writeElement('TotOpIVARetTotal', $dte->ivaret->op);
										$xml->writeElement('TotIVARetTotal', $dte->ivaret->iva);
									}
									$xml->writeElement('TotMntTotal', 
										$dte->exento + $dte->neto + $dte->iva + $ivaNoRec + $dte->ivacomun->iva - $ivaRetenido + $ivaAdicional
									);
								$xml->endElement();
							}
						}
					$xml->endElement(); //End Resumen Periodo
				}

				foreach($dtes as $dte){
					$xml->startElement('Detalle');
						$xml->writeElement('TpoDoc', $dte->dte);
						$xml->writeElement('NroDoc', $dte->id);
						$xml->writeElement('TasaImp', $Emisor->iva);
						$xml->writeElement('FchDoc', substr($dte->fecha, 0, 10));
						$xml->writeElement('RUTDoc', $dte->rut);
						$xml->writeElement('RznSoc', substr($dte->razon, 0, 40));
						$xml->writeElement('MntExe', $dte->exento);
						$xml->writeElement('MntNeto', $dte->neto);
						if(isset($dte->ivacomun_iva)){
							$xml->writeElement('MntIVA', 0);
							$xml->writeElement('IVAUsoComun', $dte->ivacomun_iva);
						}
						elseif(isset($dte->norec_iva)){
							$xml->writeElement('MntIVA', 0);
							$xml->startElement('IVANoRec');
								$xml->writeElement('CodIVANoRec', $dte->norec_codigo);
								$xml->writeElement('MntIVANoRec', $dte->norec_iva);
							$xml->endElement();
						}
						else{
							$xml->writeElement('MntIVA', $dte->iva);
						}

						// Should be For loop because there can be more than 1 ila
						if($dte->ila_codigo > 0){
							$xml->startElement('OtrosImp');
								$xml->writeElement('CodImp', $dte->ila_codigo);
								$xml->writeElement('TasaImp', $dte->ila_tasa);
								$xml->writeElement('MntImp', $dte->ila_monto);
							$xml->endElement();
						}
						if($dte->dte == 46){
							$xml->writeElement('IVARetTotal', $dte->iva);
						}
						$xml->writeElement('MntTotal', $dte->total);
					$xml->endElement();
				}
				$xml->writeElement('TmstFirma', $tiempo);
			$xml->endElement(); //end Libro
		$xml->endElement(); //end EnvioLibro
	$xml->endDocument();

	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'EnvioLibro', false);
	$envio = $finaldom->saveXML();

	return $envio;
}



function xmlLibroGuias(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$dtes = $data->data;
		$resumen = $data->resumen;
		$periodo = $data->periodo;
		$periodoSql = $periodo . '-01';

		$db = connect_db();
		$db->beginTransaction();
		$envio = createLibroGuia($db, $periodo, $dtes, $resumen);
		$base64 = base64_encode($envio);

		$db->commit();

		echo '{"periodo": "'. $periodoSql .'", "xml": "' . $base64 . '"}';
	}
}

function createLibroGuia($db, $periodo, $dtes, $resumen){
	$tiempo = date("Y-m-d\TH:i:s");

	$sql_info = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";

	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	$resumen = $resumen[0];

	try{
		$q = $db->prepare($sql_info);
		$q->execute();
		$Emisor = $q->fetch(PDO::FETCH_OBJ);

		$q = $db->prepare($sql_certificate);
		$q->execute();
		$Certificado = $q->fetch(PDO::FETCH_OBJ);
	}
	catch(PDOException $e){
	}

	$xml = new XMLWriter(); 
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('LibroGuia'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte LibroGuia_v10.xsd'); 
			$xml->startElement('EnvioLibro'); 
			$xml->writeAttribute('ID', 'Libro'.$periodo); 
				$xml->startElement('Caratula');
					$xml->writeElement('RutEmisorLibro', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					$xml->writeElement('PeriodoTributario', $periodo);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					$xml->writeElement('TipoLibro', 'ESPECIAL');
					$xml->writeElement('TipoEnvio', 'TOTAL');
					//Should be a number sent by SII
					$xml->writeElement('FolioNotificacion', '1');
				$xml->endElement(); //end Caratula
				$xml->startElement('ResumenPeriodo');
					$xml->writeElement('TotGuiaAnulada', $resumen->anulados);
					$xml->writeElement('TotGuiaVenta', $resumen->foliosventa);
					$xml->writeElement('TotMntGuiaVta', $resumen->mntventa);
					foreach($resumen->traslados as $key=>$traslado){
						if(!empty($traslado->folios)){
							if($key > 2 && $key < 8){
								$xml->startElement('TotTraslado');
										$xml->writeElement('TpoTraslado', $key);
										$xml->writeElement('CantGuia', $traslado->folios);
										if($key == 5){
											$xml->writeElement('MntGuia', 0);
										}
										else{
											$xml->writeElement('MntGuia', $traslado->total);
										}
								$xml->endElement();
							}
						}
					}
				$xml->endElement(); //End Resumen Periodo
				foreach($dtes as $dte){
					$xml->startElement('Detalle');
						$xml->writeElement('Folio', $dte->id);
						if($dte->anulado){
							// 1. Anulado Previo a su Envio al SII
							// 2. Anulado Posterior a su Envio al SII
							// 3. Productos Recibidos Parcialmente
							$xml->writeElement('Anulado', 2);
						}
						$xml->writeElement('TpoOper', $dte->traslado);
						$xml->writeElement('FchDoc', substr($dte->fecha, 0, 10));
						if($dte->rut){
							$xml->writeElement('RUTDoc', $dte->rut);
						}
						else{
							$xml->writeElement('RUTDoc', $Emisor->rut);
						}

						if($dte->razon){
							$xml->writeElement('RznSoc', substr($dte->razon, 0, 50));
						}
						else{
							$xml->writeElement('RznSoc', substr($Emisor->razon, 0, 50));
						}

						if($dte->traslado == 5){
							$xml->writeElement('MntNeto', 0);
							$xml->writeElement('TasaImp', 0);
							$xml->writeElement('IVA', 0);
							$xml->writeElement('MntTotal', 0);
						}
						else{								
							$xml->writeElement('MntNeto', $dte->neto);
							$xml->writeElement('TasaImp', $Emisor->iva);
							$xml->writeElement('IVA', $dte->iva);
							$xml->writeElement('MntTotal', $dte->total);
						}
					$xml->endElement();
				}
				$xml->writeElement('TmstFirma', $tiempo);
			$xml->endElement(); //end Libro
		$xml->endElement(); //end EnvioLibro
	$xml->endDocument();

	// Convertir a DOM Element para firmar
	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'EnvioLibro', false);
	$envio = $finaldom->saveXML();

	return $envio;
}

function getLibro(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$periodo = $request->get('periodo') . '%';
		$tipo = $request->get('tipo');

		$sql = "SELECT * from tbl_libros where tipo = :tipo and periodo like :periodo";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':tipo', $tipo);
			$q->bindParam(':periodo', $periodo);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function getUltimosLibros() {
	global $app;
	$auth = authorize();
	if($auth)
	{
		$start = date("Y-m-d", strtotime("first day of previous year"));
		$end = date("Y-m-d", strtotime("last day of this month"));

		/* I think this is how we substract from nota creditos and ignore anulados */
		$sql = "SELECT tipo, periodo, fecha, trackid from tbl_libros where periodo 
		BETWEEN :start AND :end";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			$libros = json_encode($result, JSON_NUMERIC_CHECK);
			$last = '{"last":"' .$end . '", "libros":' . $libros . '}';
			echo $last;
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getBoletas(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$periodo = $request->get('periodo') . '-01';
		$sql = "SELECT * FROM tbl_libros_boletas WHERE periodo = :periodo";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':periodo', $periodo);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function postBoleta(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);
		$periodo = $data->periodo . '-01';
		$dte = $data->dte;
		if(empty($dte->cantidad))
			$dte->cantidad = 0;
		if(empty($dte->anulados))
			$dte->anulados = 0;
		if(empty($dte->total))
			$dte->total = 0;


		$sql = "INSERT INTO tbl_libros_boletas (periodo, dte, cantidad, anulados, total)
				VALUES (:periodo, :dte, :cantidad, :anulados, :total)";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':periodo', $periodo);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':cantidad', $dte->cantidad);
			$q->bindParam(':anulados', $dte->anulados);
			$q->bindParam(':total', $dte->total);
			$q->execute();
			$id = $db->lastInsertId();
			echo '{ "periodo" : "'.$periodo.'" }';
		}
		catch(PDOException $e){
			if ($e->errorInfo[1] == 1062) {
				$app->response->setStatus(409);
			} else {
				$app->response->setStatus(400);
			}
		}	
	} else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function deleteBoleta($periodo, $dte){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$periodo = $periodo . '-01';
		$sql = "DELETE FROM tbl_libros_boletas WHERE periodo = :periodo AND dte = :dte";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':periodo', $periodo);
			$q->bindParam(':dte', $dte);
			$q->execute();

			echo '{ "id" : "'.$dte.'"}';
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}		
}


/*********************** REPORTES *********************/
function reporteVentas(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* I think this is how we substract from nota creditos and ignore anulados */
		$sql = "SELECT a.dte, fecha,
		SUM(CASE 
			WHEN a.dte = 61 THEN total*-1 
			WHEN anulado = 1 THEN total*0
		ELSE total END) AS total
		FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_anulado b ON a.dte = b.dte AND a.id = b.folio_id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND anulado is null
		AND fecha BETWEEN :start AND :end
		GROUP BY date(fecha)";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteTopProductos(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... I think its done*/
		$sql = "SELECT a.producto, modelo, a.modelo_id, fecha, 
		SUM(CASE 
			WHEN a.dte = 61 THEN cantidad * -1
			WHEN anulado = 1 then cantidad*0 
		ELSE cantidad END) AS count FROM tbl_dtes_detalles a 
		LEFT JOIN tbl_dtes b ON b.dte = a.dte AND b.id = a.folio_id 
		LEFT JOIN tbl_productos_modelos c ON a.modelo_id = c.id
		LEFT JOIN tbl_productos d ON d.id = c.producto_id
		LEFT JOIN tbl_dtes_anulado e ON a.dte = e.dte AND a.id = e.folio_id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end GROUP BY c.producto_id 
		ORDER BY count DESC LIMIT 10";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteUserSale(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT fecha, username, user_id, 
		SUM(CASE 
			WHEN d.dte = 61 THEN total * -1 
			WHEN anulado = 1 THEN total * 0
		ELSE total END) AS total FROM tbl_dtes d 
		LEFT JOIN tbl_users u ON u.id = d.user_id 
		LEFT JOIN tbl_dtes_anulado e ON d.dte = e.dte AND d.id = e.folio_id
		WHERE d.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end
		GROUP BY user_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteVendedorasSale(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT fecha, username, user_id, 
		SUM(CASE 
			WHEN d.dte = 61 THEN total * -1 
			WHEN anulado = 1 THEN total * 0
		ELSE total END) AS total FROM tbl_dtes d 
		LEFT JOIN tbl_users u ON u.id = d.vendedor_id 
		LEFT JOIN tbl_dtes_anulado e ON d.dte = e.dte AND d.id = e.folio_id
		WHERE d.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end
		GROUP BY vendedor_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteFormas(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		$sql = "SELECT fecha, SUM(total) as total, count(forma_id) as count, forma_id, forma from tbl_dtes b 
		LEFT JOIN tbl_forma_pago p ON b.forma_id = p.id
		WHERE fecha BETWEEN :start AND :end GROUP BY forma_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteVentasSucursal($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* I think this is how we substract from nota creditos and ignore anulados */
		$sql = "SELECT a.dte, fecha,
		SUM(CASE 
			WHEN a.dte = 61 THEN total*-1 
			WHEN anulado = 1 THEN total*0
		ELSE total END) AS total
		FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_anulado b ON a.dte = b.dte AND a.id = b.folio_id
		WHERE a.dte IN (" . DTE_VENTAS . ")
		AND a.sucursal_id = :id 
		AND anulado is null
		AND fecha BETWEEN :start AND :end
		GROUP BY date(fecha)";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteTopProductosSucursal($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... I think its done*/
		$sql = "SELECT a.producto, modelo, a.modelo_id, fecha, 
		SUM(CASE 
			WHEN a.dte = 61 THEN cantidad * -1
			WHEN anulado = 1 then cantidad*0 
		ELSE cantidad END) AS count FROM tbl_dtes_detalles a 
		LEFT JOIN tbl_dtes b ON b.dte = a.dte AND b.id = a.folio_id 
		LEFT JOIN tbl_productos_modelos c ON a.modelo_id = c.id
		LEFT JOIN tbl_productos d ON d.id = c.producto_id
		LEFT JOIN tbl_dtes_anulado e ON a.dte = e.dte AND a.id = e.folio_id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND b.sucursal_id = :id
		AND fecha BETWEEN :start AND :end GROUP BY c.producto_id 
		ORDER BY count DESC LIMIT 10";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteUserSaleSucursal($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT fecha, username, user_id, 
		SUM(CASE 
			WHEN d.dte = 61 THEN total * -1 
			WHEN anulado = 1 THEN total * 0
		ELSE total END) AS total FROM tbl_dtes d 
		LEFT JOIN tbl_users u ON u.id = d.user_id 
		LEFT JOIN tbl_dtes_anulado e ON d.dte = e.dte AND d.id = e.folio_id
		WHERE d.dte IN (" . DTE_VENTAS . ") 
		AND d.sucursal_id = :id
		AND fecha BETWEEN :start AND :end
		GROUP BY user_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteVendedorasSaleSucursal($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT fecha, username, user_id, 
		SUM(CASE 
			WHEN d.dte = 61 THEN total * -1 
			WHEN anulado = 1 THEN total * 0
		ELSE total END) AS total FROM tbl_dtes d 
		LEFT JOIN tbl_users u ON u.id = d.vendedor_id 
		LEFT JOIN tbl_dtes_anulado e ON d.dte = e.dte AND d.id = e.folio_id
		WHERE d.dte IN (" . DTE_VENTAS . ") 
		AND d.sucursal_id = :id
		AND fecha BETWEEN :start AND :end
		GROUP BY vendedor_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteFormasSucursal($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		$sql = "SELECT fecha, SUM(total) as total, count(forma_id) as count, forma_id, forma from tbl_dtes b 
		LEFT JOIN tbl_forma_pago p ON b.forma_id = p.id
		WHERE sucursal_id =:id AND fecha BETWEEN :start AND :end GROUP BY forma_id";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteProductoSucursalVentas($sucursal_id, $id) {
	global $app;
	$auth = authorize();
	if($auth)
	{
		$start = $app->request->params('start');
		$end = $app->request->params('end');

		// DEBE SER MODELO ID not producto id
		$sql = "SELECT DATE(fecha) as fecha, modelo_id, sum(cantidad) as cantidad, 
		a.dte, a.folio_id, b.sucursal_id FROM tbl_dtes_detalles a
		LEFT JOIN tbl_dtes b ON a.folio_id = b.id AND a.dte = b.dte
		WHERE b.sucursal_id = :sucursal_id AND modelo_id = :id AND a.dte IN (33, 34, 35, 48) AND fecha BETWEEN :start AND :end
		GROUP BY DATE(fecha)";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':sucursal_id', $sucursal_id);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}		
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteProductoVentas($id) {
	global $app;
	$auth = authorize();
	if($auth)
	{
		$start = $app->request->params('start');
		$end = $app->request->params('end');

		// DEBE SER MODELO ID not producto id
		$sql = "SELECT DATE(fecha) as fecha, modelo_id, sum(cantidad) as cantidad, 
		a.dte, a.folio_id FROM tbl_dtes_detalles a
		LEFT JOIN tbl_dtes b ON a.folio_id = b.id AND a.dte = b.dte
		WHERE modelo_id = :id AND a.dte IN (33, 34, 35, 48) AND fecha BETWEEN :start AND :end
		GROUP BY DATE(fecha)";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}		
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteStockProducto($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT b.id, sucursal, IFNULL(stock, 0) as stock from tbl_productos_stock a 
		LEFT JOIN tbl_sucursales b ON a.sucursal_id = b.id WHERE modelo_id = :id";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}	
}

function reporteDtesDiarias(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT a.dte, max(id) as max, min(id) as min, sucursal_id, 
		SUM(CASE 
			WHEN a.dte = 61 THEN total*-1 
			WHEN anulado = 1 THEN total*0
		ELSE total END) AS total, 
		count(a.dte) as count FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_anulado b ON a.dte = b.dte AND a.id = b.folio_id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end GROUP BY a.dte";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteProductos(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT modelo_id as id, producto, modelo, fecha, anulado,
		SUM(CASE 
			WHEN a.dte = 61 THEN cantidad*-1 
			WHEN anulado = 1 THEN cantidad*0
		ELSE cantidad END) AS count FROM tbl_dtes_detalles a
		LEFT JOIN tbl_dtes b ON b.dte = a.dte AND a.folio_id = b.id
		LEFT JOIN tbl_dtes_anulado d ON b.dte = d.dte AND b.id = d.folio_id
		LEFT JOIN tbl_productos_modelos c ON a.modelo_id = c.id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end
		GROUP BY a.producto_id ORDER BY count DESC";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function reporteDtesDiariasPorSucursal($id){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT a.dte, max(id) as max, min(id) as min, sucursal_id, 
		SUM(CASE 
			WHEN a.dte = 61 THEN total*-1 
			WHEN anulado = 1 THEN total*0
		ELSE total END) AS total, 
		count(a.dte) as count FROM tbl_dtes a 
		LEFT JOIN tbl_dtes_anulado b ON a.dte = b.dte AND a.id = b.folio_id
		WHERE sucursal_id = :id 
		AND a.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end GROUP BY a.dte";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}	
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteProductosPorSucursal($id){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$start = $app->request->params('start');
		$end = $app->request->params('end');

		/* We need to substract the nota de creditos... and anulados somehow */
		$sql = "SELECT modelo_id as id, producto, modelo, fecha, anulado,
		SUM(CASE 
			WHEN a.dte = 61 THEN cantidad*-1 
			WHEN anulado = 1 THEN cantidad*0
		ELSE cantidad END) AS count FROM tbl_dtes_detalles a
		LEFT JOIN tbl_dtes b ON b.dte = a.dte AND a.folio_id = b.id
		LEFT JOIN tbl_dtes_anulado d ON b.dte = d.dte AND b.id = d.folio_id
		LEFT JOIN tbl_productos_modelos c ON a.modelo_id = c.id
		WHERE a.dte IN (" . DTE_VENTAS . ") 
		AND sucursal_id = :id AND fecha BETWEEN :start AND :end
		GROUP BY a.producto_id ORDER BY count DESC";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reporteClienteVentas($id){
	global $app;
	$auth = authorize();
	if($auth)
	{		
		$start = $app->request->params('start');
		$end = $app->request->params('end');
		$sql = "SELECT DATE(fecha)as fecha, SUM(CASE WHEN a.dte = 61 THEN total * -1 ELSE total END) AS total 
		FROM tbl_dtes a LEFT JOIN tbl_dtes_cliente b ON a.dte = b.dte AND a.id = b.folio_id 
		WHERE cliente_id = :id AND a.dte IN (" . DTE_VENTAS . ") 
		AND fecha BETWEEN :start AND :end GROUP BY DATE(fecha)";

		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(':start', $start);
			$q->bindParam(':end', $end);
			$q->bindParam(':id', $id);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}			
	}	
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

/*********************** INTERCAMBIO ********************/
function getNotifications(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT count(*) as notification FROM tbl_xml_recibidos WHERE status = 0";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetch(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function getXmlRecibidos(){
	global $app;
	$auth = authorize();
	if($auth)
	{
		$sql = "SELECT * FROM tbl_xml_recibidos WHERE status = 0";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->execute();
			$result = $q->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($result, JSON_NUMERIC_CHECK);
		}
		catch(PDOException $e){
			$app->response->setStatus(409);
			$app->response->setBody($e->getMessage()); 
		}
	} 
	else {
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}


function acuseRecibo(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$respuesta = $data->respuesta;
		$dtes = $respuesta->dtes;
		$user_id = $respuesta->user->id;
		$now = date('Y-m-d H:i:s');
		$fechadte = substr($now, 0, 10);
		$tiempo = str_replace(' ', 'T', $now);

		if($respuesta->recepcion == 0){
			foreach($dtes as $dte){
				if($dte->recepcion == "0")
					recibeDte($dte, $user_id);
			}
		}

		/********* START DTE *******************/
		$XML = new XMLWriter(); 

		$XML->openMemory(); 
		$XML->setIndent(true);
		$XML->startDocument('1.0', 'ISO-8859-1'); 
		$XML->startElement('RespuestaDTE');
		$XML->writeAttribute('version', '1.0');
		$XML->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$XML->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$XML->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte RespuestaEnvioDTE_v10.xsd'); 
			$XML->startElement('Resultado');
			$XML->writeAttribute('ID', 'Respuesta');
				$XML->startElement('Caratula');
				$XML->writeAttribute('version', '1.0');
					$XML->writeElement('RutResponde', $respuesta->rutReceptor);
					$XML->writeElement('RutRecibe', $respuesta->rutEmisor);
					// No se porque pero no funciona con otro rut
					$XML->writeElement('IdRespuesta', '1');
					$XML->writeElement('NroDetalles', $respuesta->nroDetalles);
					$XML->writeElement('TmstFirmaResp', $tiempo);
				$XML->endElement();
				$XML->startElement('RecepcionEnvio');
					$XML->writeElement('NmbEnvio', 'Recibo-'.$respuesta->rutEmisor . '.xml');
					$XML->writeElement('FchRecep', $tiempo);
					$XML->writeElement('CodEnvio', '1');
					$XML->writeElement('EnvioDTEID', 'Recibo-'.$respuesta->rutEmisor.'-'.$tiempo);
					$XML->writeElement('EstadoRecepEnv', $respuesta->recepcion);
					$XML->writeElement('RecepEnvGlosa', '');
					foreach($dtes as $dte){
					$XML->startElement('RecepcionDTE');
						$XML->writeElement('TipoDTE', $dte->dte);
						$XML->writeElement('Folio', $dte->id);
						$XML->writeElement('FchEmis', $dte->fecha);
						$XML->writeElement('RUTEmisor', $dte->rutEmisor);
						$XML->writeElement('RUTRecep', $dte->rutReceptor);
						$XML->writeElement('MntTotal', $dte->total);
						$XML->writeElement('EstadoRecepDTE', $dte->recepcion);
						$XML->writeElement('RecepDTEGlosa', '');
					$XML->endElement();
					}
				$XML->endElement();
			$XML->endElement();
		$XML->endElement();
		$XML->endDocument();

		$finalxml = $XML->outputMemory(TRUE);
		$finaldom = new DOMDocument();
		$finaldom->loadXML($finalxml);

		$acuseXML = signXML($finaldom, 'Resultado');

		$base64 = base64_encode($acuseXML);

		$sql = "UPDATE tbl_xml_recibidos set status = 1 where dte = :dte AND id = :id AND rut = :rut";
		$sql_config = "SELECT * FROM tbl_config WHERE id = 1";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dtes[0]->dte);
			$q->bindParam(":id", $dtes[0]->id);
			$q->bindParam(":rut", $respuesta->rutEmisor);
			$q->execute();

			$q = $db->prepare($sql_config);
			$q->execute();
			$config = $q->fetch(PDO::FETCH_OBJ);

			if(!$config->testMode){
				/************ MANDAR EL DTE AL CLIENTE ****************/
				$sentmail = maildte($base64, $respuesta->rutEmisor);
			}
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}

		/************ MANDAR EL DTE AL CLIENTE ****************/
		/*
		$sentmail = maildte($base64, $respuesta->rutEmisor);
		*/
		echo '{"xml":"'.$base64.'"}';
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function acuseMercaderia(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$respuesta = $data->respuesta;
		$dtes = $respuesta->dtes;
		$user_id = $respuesta->user->id;
		$now = date('Y-m-d H:i:s');
		$fechadte = substr($now, 0, 10);
		$tiempo = str_replace(' ', 'T', $now);

		foreach($dtes as $dte){
			if($dte->recepcion == "0")
				recibeDte($dte, $user_id);
		}

		$DOC = '';
		foreach($dtes as $dte){
			// algo asi
			if(!$dte->rechazado)
			$DOC .= reciboMercaderia($dte, $tiempo);
		}

		/********* START DTE *******************/
		$XML = new XMLWriter(); 

		$XML->openMemory(); 
		$XML->setIndent(true);
		$XML->startDocument('1.0', 'ISO-8859-1'); 
		$XML->startElement('EnvioRecibos');
		$XML->writeAttribute('version', '1.0');
		$XML->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$XML->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$XML->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte EnvioRecibos_v10.xsd'); 
			$XML->startElement('SetRecibos');
			$XML->writeAttribute('ID', 'Recibo');
				$XML->startElement('Caratula');
				$XML->writeAttribute('version', '1.0');
					$XML->writeElement('RutResponde', $respuesta->rutReceptor);
					$XML->writeElement('RutRecibe', $respuesta->rutEmisor);
					$XML->writeElement('TmstFirmaEnv', $tiempo);
				$XML->endElement();
				$XML->writeRaw($DOC);
			$XML->endElement();
		$XML->endElement();
		$XML->endDocument();

		$finalxml = $XML->outputMemory(TRUE);
		$finaldom = new DOMDocument();
		$finaldom->loadXML($finalxml);

		$acuseXML = signXML($finaldom, 'SetRecibos');

		$base64 = base64_encode($acuseXML);

		$sql = "UPDATE tbl_xml_recibidos set status = 2 where dte = :dte AND id = :id AND rut = :rut";
		$sql_config = "SELECT * FROM tbl_config WHERE id = 1";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dtes[0]->dte);
			$q->bindParam(":id", $dtes[0]->id);
			$q->bindParam(":rut", $respuesta->rutEmisor);
			$q->execute();

			$q->execute();

			$q = $db->prepare($sql_config);
			$q->execute();
			$config = $q->fetch(PDO::FETCH_OBJ);

			if(!$config->testMode){
				/************ MANDAR EL DTE AL CLIENTE ****************/
				$sentmail = maildte($base64, $respuesta->rutEmisor);
			}
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}

		echo '{"xml":"'.$base64.'"}';
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function acuseComercial(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$respuesta = $data->respuesta;
		$dtes = $respuesta->dtes;
		$user_id = $respuesta->user->id;
		$now = date('Y-m-d H:i:s');
		$fechadte = substr($now, 0, 10);
		$tiempo = str_replace(' ', 'T', $now);

		foreach($dtes as $dte){
			if($dte->recepcion == "0")
				recibeDte($dte, $user_id);
		}

		/********* START DTE *******************/
		$XML = new XMLWriter(); 

		$XML->openMemory(); 
		$XML->setIndent(true);
		$XML->startDocument('1.0', 'ISO-8859-1'); 
		$XML->startElement('RespuestaDTE');
		$XML->writeAttribute('version', '1.0');
		$XML->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$XML->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$XML->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte RespuestaEnvioDTE_v10.xsd'); 
			$XML->startElement('Resultado');
			$XML->writeAttribute('ID', 'Respuesta');
				$XML->startElement('Caratula');
				$XML->writeAttribute('version', '1.0');
					$XML->writeElement('RutResponde', $respuesta->rutReceptor);
					$XML->writeElement('RutRecibe', $respuesta->rutEmisor);
					$XML->writeElement('IdRespuesta', '1');
					$XML->writeElement('NroDetalles', $respuesta->nroDetalles);
					$XML->writeElement('TmstFirmaResp', $tiempo);
				$XML->endElement();
					foreach($dtes as $dte){
					$XML->startElement('ResultadoDTE');
						$XML->writeElement('TipoDTE', $dte->dte);
						$XML->writeElement('Folio', $dte->id);
						$XML->writeElement('FchEmis', $dte->fecha);
						$XML->writeElement('RUTEmisor', $dte->rutEmisor);
						$XML->writeElement('RUTRecep', $dte->rutReceptor);
						$XML->writeElement('MntTotal', $dte->total);
						$XML->writeElement('CodEnvio', '1');
						$XML->writeElement('EstadoDTE', $dte->resultado);
						$XML->writeElement('EstadoDTEGlosa', $dte->rechazo);
					$XML->endElement();
					}
			$XML->endElement();
		$XML->endElement();
		$XML->endDocument();

		$finalxml = $XML->outputMemory(TRUE);
		$finaldom = new DOMDocument();
		$finaldom->loadXML($finalxml);

		$acuseXML = signXML($finaldom, 'Resultado');

		$base64 = base64_encode($acuseXML);
		
		$sql = "UPDATE tbl_xml_recibidos set status = 3 where dte = :dte AND id = :id AND rut = :rut";
		$sql_config = "SELECT * FROM tbl_config WHERE id = 1";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dtes[0]->dte);
			$q->bindParam(":id", $dtes[0]->id);
			$q->bindParam(":rut", $respuesta->rutEmisor);
			$q->execute();


			$q = $db->prepare($sql_config);
			$q->execute();
			$config = $q->fetch(PDO::FETCH_OBJ);

			if(!$config->testMode){
				/************ MANDAR EL DTE AL CLIENTE ****************/
				$sentmail = maildte($base64, $respuesta->rutEmisor);
			}
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}

		echo '{"xml":"'.$base64.'"}';
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function ignoreIntercambio(){
	global $app;
	$auth = authorize();
	if($auth){
		$request = $app->request();
		$body = $request->getBody();
		$data = json_decode($body);

		$rut = $data->rut;
		$dte = $data->dte;
		$id = $data->id;

		$sql = "UPDATE tbl_xml_recibidos set status = 9 where dte = :dte AND id = :id AND rut = :rut";
		try{
			$db = connect_db();
			$q = $db->prepare($sql);
			$q->bindParam(":dte", $dte);
			$q->bindParam(":id", $id);
			$q->bindParam(":rut", $rut);
			$q->execute();
		}
		catch(PDOException $e){
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage()); 
		}

		echo '{"ignored":"yes"}';
	}
	else{
		$app->response->setStatus(401);
		$app->response->setBody('No tiene autorizacion'); 
	}
}

function reciboMercaderia($dte, $tiempo){
	$DOC = new XMLWriter();
	$DOC->openMemory(); 
	$DOC->setIndent(true);
	$DOC->startElement('Recibo');
	$DOC->writeAttribute('version', '1.0');
		$DOC->startElement('DocumentoRecibo');
			$DOC->writeElement('TipoDoc', $dte->dte);
			$DOC->writeElement('Folio', $dte->id);
			$DOC->writeElement('FchEmis', $dte->fecha);
			$DOC->writeElement('RUTEmisor', $dte->rutEmisor);
			$DOC->writeElement('RUTRecep', $dte->rutReceptor);
			$DOC->writeElement('MntTotal', $dte->total);
			$DOC->writeElement('Recinto', $dte->recinto);
			$DOC->writeElement('RutFirma', $dte->rutFirma);
			$DOC->writeElement('Declaracion', 'El acuse de recibo que se declara en este acto, de acuerdo a lo dispuesto en la letra b) del Art. 4, y la letra c) del Art. 5 de la Ley 19.983, acredita que la entrega de mercaderias o servicio(s) prestado(s) ha(n) sido recibido(s).');
			$DOC->writeElement('TmstFirmaRecibo', $tiempo);
		$DOC->endElement();
	$DOC->endElement();
	$DOC->endDocument();

	$docxml = $DOC->outputMemory(TRUE);
	$docdom = new DOMDocument();
	$docdom->loadXML($docxml);

	$DTEstring = signXML($docdom, 'DocumentoRecibo', true);
	return $DTEstring;
}








// Very Important to include this
$app->run();










/********************************** DTE FUNCTIONS ************************************/
function generarSetManual($dtes, $rutReceptor = '60803000-K'){
	$now = date('Y-m-d H:i:s');
	$tiempo = str_replace(' ', 'T', $now);

	$sql = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";
	$sql_xml = "SELECT xml FROM tbl_dtes_xml WHERE dte = :dte AND folio_id = :id";
	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	$db = connect_db();
	$q = $db->prepare($sql);
	$q->execute();
	$Emisor = $q->fetch(PDO::FETCH_OBJ);

	$q = $db->prepare($sql_certificate);
	$q->execute();
	$Certificado = $q->fetch(PDO::FETCH_OBJ);

	$facturas=0;
	$creditos=0;
	$debitos=0;
	$exentas=0;
	$guias=0;
	$xmlString = "";

	/* Loop through the selection and separate the DTEs into their respective types */
	$length = count($dtes);
	for($x=0; $x<$length; $x++){
		if($dtes[$x]->dte == 33){
			$facturas++;
		}
		if($dtes[$x]->dte == 61){
			$creditos++;
		}
		if($dtes[$x]->dte == 56){
			$debitos++;
		}
		if($dtes[$x]->dte == 34){
			$exentas++;
		}
		if($dtes[$x]->dte == 52){
			$guias++;
		}

		$q = $db->prepare($sql_xml);
		$q->bindParam(':dte', $dtes[$x]->dte);
		$q->bindParam(':id', $dtes[$x]->id);
		$q->execute();
		$xml = $q->fetch(PDO::FETCH_OBJ);

		$xmlString .= $xml->xml;
	}

	$xml = new XMLWriter();
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('EnvioDTE'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte EnvioDTE_v10.xsd'); 
			$xml->startElement('SetDTE'); 
			$xml->writeAttribute('ID', 'SetDoc'); 
				$xml->startElement('Caratula');
				$xml->writeAttribute('version', '1.0');
					$xml->writeElement('RutEmisor', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					// No se porque pero no funciona con otro rut
					$xml->writeElement('RutReceptor', $rutReceptor);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					//put the date instead of string
					$xml->writeElement('TmstFirmaEnv', $tiempo);

					//Numero de documenots... hay q hacer algo para contar facturas, creditos, debitos...
					if($facturas > 0){
						$xml->startElement('SubTotDTE');
							$xml->writeElement('TpoDTE', '33');
							$xml->writeElement('NroDTE', $facturas);
						$xml->endElement();
					}
					if($creditos > 0){
						$xml->startElement('SubTotDTE');
							$xml->writeElement('TpoDTE', '61');
							$xml->writeElement('NroDTE', $creditos);
						$xml->endElement();
					}
					if($debitos > 0){
						$xml->startElement('SubTotDTE');
							$xml->writeElement('TpoDTE', '56');
							$xml->writeElement('NroDTE', $debitos);
						$xml->endElement();
					}
					if($exentas > 0){
						$xml->startElement('SubTotDTE');
							$xml->writeElement('TpoDTE', '34');
							$xml->writeElement('NroDTE', $exentas);
						$xml->endElement();
					}
					if($guias > 0){
						$xml->startElement('SubTotDTE');
							$xml->writeElement('TpoDTE', '52');
							$xml->writeElement('NroDTE', $guias);
						$xml->endElement();
					}
				$xml->endElement(); //end Caratula

				$xml->writeRaw($xmlString);

			$xml->endElement(); //end SetDTE
		$xml->endElement(); //end EnvioDte
	$xml->endDocument();

	// Convertir a DOM Element para firmar
	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'SetDTE', false);
	$envio = $finaldom->saveXML();
	return $envio;
}

function generarDTE($db, $doc, $folio, $fecha, $pkeyid, $cafaddon, $retencion=0){

	$TipoDTE = $doc->tipoDte->id;
	$cliente = $doc->cliente;
	$detalles = $doc->detalles;
	$referencias = $doc->referencias;

	$tiempo = str_replace(' ', 'T', $fecha);
	$fecha = substr($fecha, 0, 10);

	$sql = "SELECT razon, rut, giro, telefono, email, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";

	$sql_config = "SELECT * FROM tbl_config WHERE id = 1";

	$q = $db->prepare($sql);
	$q->execute();
	$Emisor = $q->fetch(PDO::FETCH_OBJ);

	$q = $db->prepare($sql_config);
	$q->execute();
	$config = $q->fetch(PDO::FETCH_OBJ);

	if($TipoDTE == 52){
		// we need to separate the if because nota de creditos don't have traslado or despacho
		if($doc->traslado->id == 4 || $doc->traslado->id == 5){
			$doc->totalExento = 0;
			$doc->totalNeto = 0;
			$doc->iva = 0;
			$doc->granTotal = 0;

			$length = count($detalles);
			for($i=1;$i<=$length;$i++)
			{	
				$detalles[$i-1]->precio = 0;
			}
		}
	}

	$retenido=0;
	//retencion para factura compra
	if($retencion > 0)
		$retenido = round($totneto * ($Emisor->iva/100));

	$dd = new XMLWriter(); 

	$dd->openMemory(); 
	//Create an element
	$dd->startDocument('1.0', 'ISO-8859-1');
	$dd->startElement('DD');
		$dd->writeElement('RE', $Emisor->rut);
		$dd->writeElement('TD', $TipoDTE);
		$dd->writeElement('F', $folio);
		//put the date of factura
		$dd->writeElement('FE', $fecha);
		$dd->writeElement('RR', $cliente->rut); 
		$dd->writeElement('RSR', substr($cliente->razon,0,39));
		$dd->writeElement('MNT', $doc->granTotal);

		$item1 = str_replace('"', "", $detalles[0]->producto);
		$dd->writeElement('IT1', substr($item1,0,40));
		//add caff...
		$dd->writeRaw($cafaddon);

		//put the date instead of string
		$dd->writeElement('TSTED', $tiempo);
	$dd->endElement(); //end DD
	$dd->endDocument();

	$ddXml = $dd->outputMemory(true);
	$ddXml = str_replace(array("\r\n", "\r", "\n"), "", $ddXml);
	//Remove <?xml> tag
	$ddXml = substr($ddXml, 43);

	$ddString = utf8_encode($ddXml);

	//Sign the DD with the private key from CAF
	openssl_sign($ddXml, $signature, $pkeyid, "sha1WithRSAEncryption");

	//Encode the signature base64
	$frmt = base64_encode($signature);

	$lala = new XMLReader();
	$caftest = $lala->xml($cafaddon);

	/********* START DTE *******************/
	$DTE = new XMLWriter(); 

	$DTE->openMemory(); 
	$DTE->setIndent(true);
	$DTE->startDocument('1.0', 'ISO-8859-1'); 
	$DTE->startElement('DTE');
	$DTE->writeAttribute('version', '1.0');
		$DTE->startElement('Documento');
		$DTE->writeAttribute('ID', 'F'. $folio . 'T'. $TipoDTE);
			$DTE->startElement('Encabezado');
				$DTE->startElement('IdDoc');
					$DTE->writeElement('TipoDTE', $TipoDTE);
					$DTE->writeElement('Folio', $folio);
					//put the date instead of string
					$DTE->writeElement('FchEmis', $fecha);
					if($TipoDTE == 52){
						if($doc->traslado->id != 5 && $doc->despacho->id > 0)
							$DTE->writeElement('TipoDespacho', $doc->despacho->id);
						$DTE->writeElement('IndTraslado', $doc->traslado->id);
					}
					// If its in bruto mode
					if($doc->bruto){
						$DTE->writeElement('MntBruto', 1);
					}
				$DTE->endElement();

				$DTE->startElement('Emisor');
					$DTE->writeElement('RUTEmisor', $Emisor->rut);
					$DTE->writeElement('RznSoc', substr($Emisor->razon, 0, 100));
					$DTE->writeElement('GiroEmis', substr($Emisor->giro, 0, 80));
					$DTE->writeElement('Acteco', $Emisor->acteco);
					$DTE->writeElement('Sucursal', substr($doc->sucursal->sucursal, 0, 20));
					$DTE->writeElement('CdgSIISucur', $doc->sucursal->codigo);
					$DTE->writeElement('DirOrigen', substr($doc->sucursal->direccion, 0, 70));
					$DTE->writeElement('CmnaOrigen', substr($doc->sucursal->comuna, 0, 20));
					$DTE->writeElement('CiudadOrigen', substr($doc->sucursal->ciudad, 0, 20));
				$DTE->endElement();

				$DTE->startElement('Receptor');
					$DTE->writeElement('RUTRecep', $cliente->rut);
					$DTE->writeElement('RznSocRecep', substr($cliente->razon, 0, 100));
					$DTE->writeElement('GiroRecep', substr($cliente->giro, 0, 40));
					$DTE->writeElement('DirRecep', substr($cliente->direccion, 0, 70));
					$DTE->writeElement('CmnaRecep', substr($cliente->comuna, 0, 20));
					$DTE->writeElement('CiudadRecep', substr($cliente->ciudad, 0, 20));
				$DTE->endElement();

				$DTE->startElement('Totales');
					if($TipoDTE != 34)
						$DTE->writeElement('MntNeto', $doc->totalNeto);

					$DTE->writeElement('MntExe', $doc->totalExento);
					if($TipoDTE != 34){
						$DTE->writeElement('TasaIVA', $Emisor->iva);
						$DTE->writeElement('IVA', $doc->iva);
					}
					if($retenido > 0){
						$DTE->startElement('ImptoReten');
							$DTE->writeElement('TipoImp', 15);
							$DTE->writeElement('TasaImp', $Emisor->iva);
							$DTE->writeElement('MontoImp', $retenido);
						$DTE->endElement();
					}
					$DTE->writeElement('MntTotal', $doc->granTotal);	
				$DTE->endElement();
			$DTE->endElement(); //end Encabezado

			$length = count($detalles);
			for($i=1;$i<=$length;$i++)
			{	
				// If its in bruto mode
				if($doc->bruto){
					$detalles[$i-1]->precio = round($detalles[$i-1]->precio * (1 + ($Emisor->iva/100)));
				}
				$subtotal = $detalles[$i-1]->cantidad * $detalles[$i-1]->precio;
				$detdesc = round($subtotal * $detalles[$i-1]->porciento/100);
				$montoItem = round($subtotal - $detdesc);

				/* Solo para Jacky Jioh */
				/*
				if(!empty($detalles[$i-1]->modelo)){
					$detalles[$i-1]->producto = $detalles[$i-1]->modelo . ' ' . $detalles[$i-1]->producto;
				}
				*/

				$DTE->startElement('Detalle');
					$DTE->writeElement('NroLinDet', $i);
					if($detalles[$i-1]->exento)
						$DTE->writeElement('IndExe', '1');
					$DTE->writeElement('NmbItem', substr($detalles[$i-1]->producto, 0, 40));
					$DTE->writeElement('DscItem', $detalles[$i-1]->producto);
					if($detalles[$i-1]->cantidad > 0)
						$DTE->writeElement('QtyItem', $detalles[$i-1]->cantidad);
					if(!empty($detalles[$i-1]->unidad))
						$DTE->writeElement('UnmdItem', substr($detalles[$i-1]->unidad,0,4));
					if($detalles[$i-1]->precio > 0){
						$DTE->writeElement('PrcItem', $detalles[$i-1]->precio);
					}
					if($detalles[$i-1]->porciento){
						$DTE->writeElement('DescuentoPct', $detalles[$i-1]->porciento);
						$DTE->writeElement('DescuentoMonto', $detdesc);
					}
					if($retencion == 1){
						$DTE->writeElement('CodImpAdic', 15);
					}
					$DTE->writeElement('MontoItem', $montoItem);
				$DTE->endElement();
			}

			if($doc->descuentoNeto > 0){
				$DTE->startElement('DscRcgGlobal');
					//Por ahora solo incluyamos una linea de descuentos o recargos
					$DTE->writeElement('NroLinDR', '1');
					$DTE->writeElement('TpoMov', 'D');

					if($doc->bruto){
						$DTE->writeElement('TpoValor', '$');
						$DTE->writeElement('ValorDR', $doc->descuentoBruto);
					}
					else{
						if($config->testMode == 1){
							$DTE->writeElement('TpoValor', '%');
							$DTE->writeElement('ValorDR', round($doc->descuentoNeto / $doc->sumNeto * 10000)/100);
						}
						else{
							$DTE->writeElement('TpoValor', '$');
							$DTE->writeElement('ValorDR', $doc->descuentoNeto);
						}
					}
				$DTE->endElement();
			}

			$refLength = count($referencias);
			for($x=0; $x<$refLength; $x++){
				if(empty($referencias[$x]->id))
					$referencias[$x]->id = $folio;
				if(empty($referencias[$x]->fecha))
					$referencias[$x]->fecha = $fecha;
				if(empty($referencias[$x]->codref))
					$referencias[$x]->codref = null;
				if($referencias[$x]->dte == 0){
					$referencias[$x]->dte = "SET";
				}

				$DTE->startElement('Referencia');
					$DTE->writeElement('NroLinRef', $x+1);
					//No se porque es SET???
					$DTE->writeElement('TpoDocRef', $referencias[$x]->dte);
					//Not sure why its 5???
					$DTE->writeElement('FolioRef', $referencias[$x]->id);
					//put the date instead of string
					$DTE->writeElement('FchRef', substr($referencias[$x]->fecha, 0, 10));
					if(isset($referencias[$x]->codref)){
						$DTE->writeElement('CodRef', $referencias[$x]->codref);
					}
					$DTE->writeElement('RazonRef', $referencias[$x]->razonref);
				$DTE->endElement();
			}

			$DTE->startElement('TED');
			$DTE->writeAttribute('version', '1.0');
				$DTE->writeRaw($ddString);
				$DTE->startElement('FRMT');
					$DTE->writeAttribute('algoritmo', 'SHA1withRSA');
					$DTE->writeRaw($frmt);
				$DTE->endElement();
			$DTE->endElement(); //end TED
			$DTE->writeElement('TmstFirma', $tiempo);
		$DTE->endElement(); //end Documento
	$DTE->endElement(); //end DTE
	$DTE->endDocument(); 

	$DTExml = $DTE->outputMemory(TRUE);
	$DTEdom = new DOMDocument();
	$DTEdom->loadXML($DTExml);

	$DTEstring = signXML($DTEdom, 'Documento', true);
	return $DTEstring;
}


/* solo para facturas */
function dteSet($xmlsDoc, $dte){
	$rutReceptor = '60803000-K';
	$now = date('Y-m-d H:i:s');
	$tiempo = str_replace(' ', 'T', $now);
	$docs = count($xmlsDoc);

	$sql_info = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";
	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	$db = connect_db();
	$q = $db->prepare($sql_info);
	$q->execute();
	$Emisor = $q->fetch(PDO::FETCH_OBJ);

	$q = $db->prepare($sql_certificate);
	$q->execute();
	$Certificado = $q->fetch(PDO::FETCH_OBJ);
	$uniqId = "ID-" . uniqid();

	$xml = new XMLWriter();
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('EnvioDTE'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte EnvioDTE_v10.xsd'); 
			$xml->startElement('SetDTE'); 
			$xml->writeAttribute('ID', $uniqId); 
				$xml->startElement('Caratula');
				$xml->writeAttribute('version', '1.0');
					$xml->writeElement('RutEmisor', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					// No se porque pero no funciona con otro rut
					$xml->writeElement('RutReceptor', $rutReceptor);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					//put the date instead of string
					$xml->writeElement('TmstFirmaEnv', $tiempo);

					//Numero de documenots... hay q hacer algo para contar facturas, creditos, debitos...
					$xml->startElement('SubTotDTE');
						$xml->writeElement('TpoDTE', $dte);
						$xml->writeElement('NroDTE', $docs);
					$xml->endElement();
				$xml->endElement(); //end Caratula
				
				// Add every xml from xmlsDoc
				foreach($xmlsDoc as $xmlDoc){
					$xml->writeRaw($xmlDoc);
				}

			$xml->endElement(); //end SetDTE
		$xml->endElement(); //end EnvioDte
	$xml->endDocument();

	// Convertir a DOM Element para firmar
	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'SetDTE', false);
	$envio = $finaldom->saveXML();
	return $envio;
}

function dteSetCliente($xmlsDoc, $dte, $rutReceptor){
	$now = date('Y-m-d H:i:s');
	$tiempo = str_replace(' ', 'T', $now);
	$docs = count($xmlsDoc);

	$sql_info = "SELECT razon, rut, giro, resolucion, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";
	$sql_certificate = "SELECT rut FROM tbl_certificado WHERE id = 1";

	$db = connect_db();
	$q = $db->prepare($sql_info);
	$q->execute();
	$Emisor = $q->fetch(PDO::FETCH_OBJ);

	$q = $db->prepare($sql_certificate);
	$q->execute();
	$Certificado = $q->fetch(PDO::FETCH_OBJ);
	$uniqId = "ID-" . uniqid();

	$xml = new XMLWriter();
	$xml->openMemory(); 
	$xml->setIndent(true);
	$xml->startDocument('1.0', 'ISO-8859-1'); 
		$xml->startElement('EnvioDTE'); 
		$xml->writeAttribute("version", "1.0");
		$xml->writeAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance'); 
		$xml->writeAttribute('xmlns', 'http://www.sii.cl/SiiDte'); 
		$xml->writeAttribute('xsi:schemaLocation', 'http://www.sii.cl/SiiDte EnvioDTE_v10.xsd'); 
			$xml->startElement('SetDTE'); 
			$xml->writeAttribute('ID', $uniqId); 
				$xml->startElement('Caratula');
				$xml->writeAttribute('version', '1.0');
					$xml->writeElement('RutEmisor', $Emisor->rut);
					$xml->writeElement('RutEnvia', $Certificado->rut);
					// No se porque pero no funciona con otro rut
					$xml->writeElement('RutReceptor', $rutReceptor);
					$xml->writeElement('FchResol', $Emisor->fecha_resolucion);
					$xml->writeElement('NroResol', $Emisor->resolucion);
					//put the date instead of string
					$xml->writeElement('TmstFirmaEnv', $tiempo);

					//Numero de documenots... hay q hacer algo para contar facturas, creditos, debitos...
					$xml->startElement('SubTotDTE');
						$xml->writeElement('TpoDTE', $dte);
						$xml->writeElement('NroDTE', $docs);
					$xml->endElement();
				$xml->endElement(); //end Caratula
				
				// Add every xml from xmlsDoc
				foreach($xmlsDoc as $xmlDoc){
					$xml->writeRaw($xmlDoc);
				}

			$xml->endElement(); //end SetDTE
		$xml->endElement(); //end EnvioDte
	$xml->endDocument();

	// Convertir a DOM Element para firmar
	$finalxml = $xml->outputMemory(TRUE);
	$finaldom = new DOMDocument();
	$finaldom->loadXML($finalxml);

	$setXML = signXML($finaldom, 'SetDTE', false);
	$envio = $finaldom->saveXML();
	return $envio;
}


function signXML($dom, $element, $string = false){ 
	try{
		$sql = "SELECT cert, pkey FROM tbl_certificado WHERE id = 1";
		$db = connect_db();
		$q = $db->prepare($sql);
		$q->execute();
		$certificate = $q->fetch(PDO::FETCH_OBJ);
	} catch(PDOException $e){
		$app->response->setStatus(400);
		$app->response->setBody($e->getMessage());
	}

	$objDSig = new XMLSecurityDSig();

	$objDSig->setCanonicalMethod(XMLSecurityDSig::C14N);

	$options['prefix'] = '';
	$options['prefix_ns'] = '';
	$options['force_uri'] = TRUE;
	$options['id_name'] = 'ID';
	$options['overwrite'] = False;

	if(!empty($element))
		$objDSig->addReference($dom->documentElement->getElementsByTagName($element)->item(0), XMLSecurityDSig::SHA1, XMLSecurityDSig::C14N, $options);
	else 
		$objDSig->addReference($dom->documentElement, XMLSecurityDSig::SHA1, array('http://www.w3.org/2000/09/xmldsig#enveloped-signature'), $options);

	$objKey = new XMLSecurityKey(XMLSecurityKey::RSA_SHA1, array('type'=>'private'));

	$objKey->loadKey($certificate->pkey);

	$public = openssl_pkey_get_public($certificate->cert);
	$modexp = openssl_pkey_get_details($public);

	$modulus = base64_encode($modexp['rsa']['n']);
	$exponent = base64_encode($modexp['rsa']['e']);

	$objDSig->myAppendKey($modulus, $exponent);
	$objDSig->add509Cert($certificate->cert);
	$objDSig->sign($objKey, $dom->documentElement);

	$KeyInfo = $dom->getElementsByTagName('KeyInfo');
	$KeyValue = $dom->createElement("KeyValue");
	$RSAKeyValue = $dom->createElement("RSAKeyValue");
	$docmodulus = $dom->createElement("Modulus", $modulus);
	$docexponent = $dom->createElement("Exponent", $exponent);
	$RSAKeyValue->appendChild($docmodulus);
	$RSAKeyValue->appendChild($docexponent);
	$KeyValue->appendChild($RSAKeyValue);

	if($string)
		$signedXML = $dom->saveXML($dom->documentElement);
	else
		$signedXML = $dom->saveXML();
	return $signedXML;
}

function envioAutomatico($envio, $token){
	$id = 1;
	$sql = "SELECT razon, rut, giro, fecha_resolucion, fecha_autorizacion, acteco, iva FROM tbl_info WHERE id = 1";
	$sql2 = "SELECT rut FROM tbl_certificado WHERE id = 1";

	$db = connect_db();
	$q = $db->prepare($sql);
	$q->execute();
	$company = $q->fetch(PDO::FETCH_OBJ);

	$q = $db->prepare($sql2);
	$q->execute();
	$sender = $q->fetch(PDO::FETCH_OBJ);

	$senderRut = explode("-", $sender->rut);
	$companyRut = explode("-", $company->rut);

	$rutSender = $senderRut[0];
	$dvSender = $senderRut[1];
	$rutCompany = $companyRut[0];
	$dvCompany = $companyRut[1];

	$assoc = array(
		'rutSender' => $rutSender, 
		'dvSender' => $dvSender,
		'rutCompany' => $rutCompany,
		'dvCompany' => $dvCompany,
	);

	$url = "https://palena.sii.cl/cgi_dte/UPL/DTEUpload";

	//setting the curl parameters.
	$ch = curl_init();

	$files = [];


	/***************************** BUILD POSTDATA ************************/
	// invalid characters for "name" and "filename"
    $disallow = array("\0", "\"", "\r", "\n");

    // initialize body
    $body = array();

    // build normal parameters
    foreach ($assoc as $k => $v) {
        $k = str_replace($disallow, "_", $k);
        $body[] = implode("\r\n", array(
            "Content-Disposition: form-data; name=\"{$k}\"",
            "",
            filter_var($v), 
        ));
    }

    // build file parameters
    foreach ($files as $k => $v) {
        switch (true) {
            case false === $v = realpath(filter_var($v)):
            case !is_file($v):
            case !is_readable($v):
                continue; // or return false, throw new InvalidArgumentException
        }
        $data = file_get_contents($v);
        $v = call_user_func("end", explode(DIRECTORY_SEPARATOR, $v));
        list($k, $v) = str_replace($disallow, "_", array($k, $v));
        $body[] = implode("\r\n", array(
            "Content-Disposition: form-data; name=\"{$k}\"; filename=\"{$v}\"",
            "Content-Type: application/octet-stream",
            "",
            $data,
        ));
    }

    $body[] = implode("\r\n", array(
        "Content-Disposition: form-data; name='enviodte'; filename='enviodte.xml'",
        "Content-Type: application/octet-stream",
        "",
        $envio,
    ));

    // generate safe boundary 
    do {
        $boundary = "---------------------" . md5(mt_rand() . microtime());
    } while (preg_grep("/{$boundary}/", $body));

    // add boundary for each parameters
    array_walk($body, function (&$part) use ($boundary) {
        $part = "--{$boundary}\r\n{$part}";
    });

    // add final boundary
    $body[] = "--{$boundary}--";
    $body[] = "";

    /************************** END POSTDATA ***************************/


	/************************** BUILD HEADER ***************************/
	$headers = array( 
        "POST /cgi_dte/UPL/DTEUpload HTTP/1.0",
        "Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-powerpoint, application/ms-excel, application/msword, */*", 
        "Accept-Language: es-cl",
        "Connection: Keep-Alive",
        "Cache-Control: no-cache", 
        "Expect: 100-continue",
        "Content-Type: multipart/form-data; boundary={$boundary}",
        "Cookie: TOKEN=" . $token,
    ); 
    /************************** END HEADER ***************************/

	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; PROG 1.0; Windows NT 5.0; YComp 5.0.2.4)");
	curl_setopt($ch, CURLOPT_ENCODING , "gzip, deflate");
    curl_setopt($ch, CURLOPT_PORT, 443);
    curl_setopt($ch, CURLOPT_VERBOSE, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, implode("\r\n", $body));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_REFERER, "http://www.tokki.cl");
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
    curl_setopt($ch, CURLINFO_HEADER_OUT, true);

	$data = curl_exec($ch);
	$info = curl_getinfo($ch, CURLINFO_HEADER_OUT);
	curl_close($ch);

	$siiPHP = simplexml_load_string($data);

	return $siiPHP;
}

function updateToken(){
	$auth = authorize();

	if($auth){
		$id = 1;
		$sql = "UPDATE tbl_sii SET token = :token WHERE id = :id";
		$db = connect_db();
        $token = siiToken();
		try{
			$q2 = $db->prepare($sql);
			$q2->bindParam(':token', $token);
			$q2->bindParam(':id', $id);
			$q2->execute();
			return $token;
		}
		catch(PDOException $e){
			return false;
		}
	}
	else{
		return false;
	}
}

function siiToken(){

	/*************** Pedir la Semilla ******************/
	$url = "https://palena.sii.cl/DTEWS/CrSeed.jws?WSDL";
    $client = new SoapClient($url, array("trace" => 1, "exception" => 0));
	$seed = $client->getSeed(); 
	$soapxml = simplexml_load_string($seed);

	// // Very ambiguos, we need to find a better way to get the semilla
	$resp_body = $soapxml->children('http://www.sii.cl/XMLSchema');
	$semilla = (string)$resp_body->children();

	/*************** Pedir el TOKEN con la semilla ******************/

	$Send = new XMLWriter(); 
	$Send->openMemory();
	$Send->startDocument(); 

	$Send->startElement("getToken");
		$Send->startElement("item");
			$Send->writeElement("Semilla",$semilla);
		$Send->endElement();
	$Send->endElement();

	$Send->endDocument();   
	$Sendxml = $Send->outputMemory(TRUE); 

	$Senddom = new DOMDocument();
	$Senddom->loadXML($Sendxml);

	$final = signXML($Senddom, null);

	$requesttoken=new SoapClient('https://palena.sii.cl/DTEWS/GetTokenFromSeed.jws?WSDL');
	$tokenresponse = $requesttoken->getToken($final);

	$tokenxml = simplexml_load_string($tokenresponse);

	// Very ambiguos, we need to find a better way to get the semilla
	$token = (string)$tokenxml->children('http://www.sii.cl/XMLSchema')->children();

	return $token;
}






function recibeDte($dte, $user_id){
	global $app;
	/*
	$sql_proveedores = "INSERT IGNORE INTO tbl_proveedores (rut, razon, giro, direccion, comuna, ciudad) VALUES (:rut, :razon, :giro, :direccion, :comuna, :ciudad)";
	*/

	$sql_find = "SELECT dte, id, rut FROM tbl_r_dtes WHERE dte = :dte AND id = :id AND rut = :rut";

	$sql_rdte = "INSERT INTO tbl_r_dtes (dte, id, rut, fecha, razon, exento, neto, iva, total, user_id)
			VALUES (:dte, :id, :rut, :fecha, :razon, :exento, :neto, :iva, :total, :user_id)";

	$sql_xml = "INSERT INTO tbl_r_dtes_xml (dte, folio_id, rut, xml) VALUES (:dte, :folio_id, :rut, :xml)";

	try{
		$db = connect_db();
		$db->beginTransaction();

		/*
		$q = $db->prepare($sql_proveedores);
		$q->bindParam(':rut', $dte->rutEmisor);
		$q->bindParam(':razon', $dte->id);
		$q->bindParam(':giro', $dte->giro);
		$q->bindParam(':direccion', $dte->direccion);
		$q->bindParam(':comuna', $dte->comuna);
		$q->bindParam(':ciudad', $dte->ciudad);
		$q->execute();
		*/

		$q0 = $db->prepare($sql_find);
		$q0->bindParam(':dte', $dte->dte);
		$q0->bindParam(':id', $dte->id);
		$q0->bindParam(':rut', $dte->rutEmisor);
		$q0->execute();
		$result = $q0->fetch(PDO::FETCH_OBJ);

		if(!$result){

			if(empty($dte->exento))
				$dte->exento=0;
			if(empty($dte->neto))
				$dte->neto=0;
			if(empty($dte->iva))
				$dte->iva=0;
			
			$q = $db->prepare($sql_rdte);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':id', $dte->id);
			$q->bindParam(':rut', $dte->rutEmisor);
			$q->bindParam(':fecha', $dte->fecha);
			$q->bindParam(':razon', $dte->razon);
			$q->bindParam(':exento', $dte->exento);
			$q->bindParam(':neto', $dte->neto);
			$q->bindParam(':iva', $dte->iva);
			$q->bindParam(':total', $dte->total);
			$q->bindParam(':user_id', $user_id);
			$q->execute();

			$q = $db->prepare($sql_xml);
			$q->bindParam(':dte', $dte->dte);
			$q->bindParam(':folio_id', $dte->id);
			$q->bindParam(':rut', $dte->rutEmisor);
			$q->bindParam(':xml', $dte->dtexml);
			$q->execute();
		}
		$db->commit();
	}
	catch(PDOException $e){
		if ($e->errorInfo[1] == 1062) {
			$app->response->setStatus(409);
			$app->response->setBody("Uno o mas de los DTEs estan repetidos.");
		} else {
			$app->response->setStatus(400);
			$app->response->setBody($e->getMessage());
		}
	}	
}


function maildte($xml, $rut){
	$url = 'http://45.33.22.218:3000/mail';
	$data = array('to' => 'ic319@nyu.edu', 'file' => $xml, 'rut' => $rut);
	$data_string = json_encode($data); 

	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',                                         
		'Content-Length: ' . strlen($data_string)
	));

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$output = curl_exec($ch);
	$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		// Then, after your curl_exec call:
	$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	$header = substr($output, 0, $header_size);
	$body = substr($output, $header_size);
	curl_close($ch);

	if($httpcode < 204){
		return $body;
	}
	else{
		return "";
	}
}