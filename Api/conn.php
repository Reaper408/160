<?php

	$senvername = 'localhost';
	$username = 'root';
	$dbpsw = '';
	$dbname = '1906';
	
	$conn = new mysqli($senvername,$username,$dbpsw,$dbname);
	$conn->query("SET NAMES utf8");
	if($conn){
        // echo '成功';
    }
	if($conn->connect_error){
		die("连接失败:" . $conn->connect_error);
	}

?>