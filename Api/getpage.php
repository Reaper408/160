<?php
#连接数据库
include 'conn.php';
#查询总数量
$sql = "SELECT * FROM data";
$res = mysqli_query($conn,$sql);
if($res){
    echo 'yes';
}else{
    echo 'no';
}
$ListCount = mysqli_num_rows($res);
#计算页码值(一页20)
$count = 20;
$pageCount = ceil($ListCount / $count);
echo $pageCount;
#JSON数据返回
$data = array("status"=>"success","msg"=>"获取成功","data"=>array("count"=>$pageCount));
echo json_encode($data,true);
?>