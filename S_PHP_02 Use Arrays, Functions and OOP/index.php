<?php

// $con = mysqli_connect('localhost', 'root', '', 'session 23');

// if($con){
//     mysqli_query($con, "INSERT INTO colours (name) values ('green')");
//     mysqli_close($con);
// }
// else {
//     die('Connection failed' . mysqli_connect_error());
// };

////////OOP method

$con2 = new mysqli('localhost', 'root', '', 'session 23');
if($con2->connect_error){
    die('Connection failed' . $con2->connect_error);
};

// $q = $con2->query("INSERT INTO colours (name) values ('brown')");
// if($q){
//     echo 'success';
// }

// $q = $con2->query("SELECT * FROM colours");
// var_export($q->fetch_all());
// $con2->close();

// $q = $con2->query("SELECT * FROM colours");
// var_export($q->fetch_assoc());
// $con2->close();

//$d = $con2->query("DELETE FROM colours WHERE id>7");    

$q = $con2->query("SELECT * FROM colours");
while($row=$q->fetch_assoc()){
var_export($row);    
}
$con2->close();



