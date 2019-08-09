<?php

    $name = isset($POST['name']) ? $POST['name'] : '';
    $psw = isset($POST['psw']) ? $POST['psw'] : '';

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
