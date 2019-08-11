<?php

include 'conn.php';

$sql = "DELETE FROM cart WHERE price=14";

$result = mysqli_query($conn,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

$rep = json_encode($data,true);

echo $rep;

?>