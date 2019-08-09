<?php
    #链接数据库
    include 'conn.php';
    #读取JSON数据
    $json = file_get_contents("../Sever/data.json");
    #把JSON转换为数组
    $data = json_decode($json,true);
    // print_r($data);
    #把数组注入到数据库
    for($i = 0;$i < count($data);$i++){
        $title = $data[$i]["title"];
        $price = $data[$i]["price"];
        $img   = $data[$i]["img"];
        $wrap  = $data[$i]["wrap"];
        
        $sql   = "INSERT INTO `data` (`id`, `title`, `price`, `img`, `wrap`) VALUES (NULL,'$title','$price','$img','$wrap')";
        echo $sql.'<br />';
        // echo "\r\n";
        $res = mysqli_query($conn,$sql);
        
        // if($res){
        //     echo 'yes';
        // }else{
        //     echo 'no';
        // }
    }
?>