<?php
#连接数据库 
include 'conn.php';

$sql = "SELECT * FROM data";

$res = mysqli_query($conn,$sql);

if($res){
    echo 'yes';
}else{
    echo 'no';
}

$data = array("status" => "success","msg" => "请求成功","data" => mysqli_fetch_all($res,MYSQLI_ASSOC));

echo json_encode($data,true);
?>