<?php

$data = json_decode(file_get_contents('php://input'), true);
$param = $data['param1'];
$param2 = $data['param2'];
$param3 = $data['param3'];
$param4 = $data['param4'];
InserInDataBase ($param,$param2,$param3,$param4);

function InserInDataBase($param,$param2,$param3,$param4) {
    $servername="localhost";
    $username="u675628320_mspl";
    $password="Mspl@2024@@";
    $database="u675628320_Mishtel_DB";
    $conn=mysqli_connect($servername,$username,$password,$database); 
    
        if(!$conn){
            die(mysqli_connect_error());
        }
        else{
            $sql="INSERT INTO `mishte_query` ( `name`, `email`, `mobile`, `message`) VALUES ( '$param', '$param2', '$param3', '$param4');";  
            $result=mysqli_query($conn,$sql);
            if($result){
                
            }
        }
}
?> 

