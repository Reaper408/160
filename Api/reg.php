<?php

    $name = isset($_GET['name']) ? $_POST['name'] : '';
    $psw = isset($_GET['psw']) ? $_POST['psw'] : '';

    include 'conn.php';

    $sql = "INSERT INTO reg (name,psw) VALUES ('$name','$psw')";

    $res = $conn->query($sql);
    
//	var_dump($res);
	if($res){
		echo 'yes';
	}else{
		echo 'no';
	}
?>
