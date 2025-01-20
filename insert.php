
<?php
if (isset($_GET['param'])) {
    $param = $_GET['param'];
    echo $param;
    InserInDataBase ($param);
} else {
    echo 'Parameter is missing';
}

function InserInDataBase($param) {
    $servername="localhost";
    $username="u675628320_mspl";
    $password="Mspl@2024@@";
    $database="u675628320_Mishtel_DB";
    $conn=mysqli_connect($servername,$username,$password,$database); 
    
        if(!$conn){
            die(mysqli_connect_error());
        }
        else{
            $sql="INSERT INTO `C2C_Customer` ( `mobile_no`) VALUES ('$param')";  
            $result=mysqli_query($conn,$sql);
            if($result){
                
            }
        }
}
?> 