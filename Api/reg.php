<?php

    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $psw = isset($_POST['psw']) ? $_POST['psw'] : '';

    include 'conn.php';

    $sql = "INSERT INTO `ad` (`name`,`psw`) VALUES ('$name','$psw')";

    $res = $conn->query($sql);
	
//	var_dump($res);
	if($res){
		echo 'yes';
	}else{
		echo 'no';
	}
?>
