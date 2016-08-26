<?php 
function connect_db() {
	try {
		$conn = new PDO('mysql:host=localhost;dbname=greencard', 'root', 'password', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e) {
		echo 'ERROR: ' . $e->getMessage();
	}

	return $conn;
}

