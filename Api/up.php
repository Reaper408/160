<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","1906");
# 读取JSON文件的内容
$json = file_get_contents("../Sever/data.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $wrap = $data[$i]["wrap"];

//   $smallsrc=json_encode($data[$i]["smallsrc"]);

//   $smallsrc=$data[$i]["smallsrc"];

  $price = $data[$i]["price"];
  $title = $data[$i]["title"];
  $img = $data[$i]["img"];

//   $label=json_encode($data[$i]["label"]);

//   $label = $data[$i]["label"];
  $sql = "INSERT INTO `data` (`id`, `title`, `price`, `img`, `wrap`) VALUES (NULL,'$title', '$price', '$img', '$wrap')";
  mysqli_query($con,$sql);
}

?>