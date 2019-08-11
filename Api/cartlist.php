<?php

include 'conn.php';

$sql = "SELECT * FROM cart";

$result = mysqli_query($conn,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

$rep = json_encode($data,true);

echo $rep;

?>