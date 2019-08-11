<?php

    include 'conn.php';

    // $title = $_REQUEST['title'];
    // $img   = $_REQUEST['img'];
    // $price = $_REQUEST['price'];


    // $sql = "INSERT INTO cart (title,img,price) VALUES ('$title','$img','$price')";
    $sql = "INSERT INTO cart (title,img,price) VALUES ('泾渭 固肠止泻丸 30g','https://www.160dyf.com/Public/upload/goods/thumb/124077/goods_thumb_124077_200_200.jpeg','14')";
    
    $res = mysqli_query($conn,$sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>