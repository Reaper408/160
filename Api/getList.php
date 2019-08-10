<?php
#连接数据库 
include 'conn.php';

$sql = "SELECT * FROM data";

$result = mysqli_query($conn,$sql);



$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
#进行json编码
$rep = json_encode($data,true);
echo $rep;
?>