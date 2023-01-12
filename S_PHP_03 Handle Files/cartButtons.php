<?php
define('BASE_PATH', './');
require_once('./logic/cart.php');
$cart = getCart();

if(isset($_GET['id'])){
    if(isset($_GET['button'])){
        if($_GET['button']==='plus'){
            incQuantity($cart,$_GET['id']);
        }
        else if($_GET['button']==='minus'){
            decQuantity($cart,$_GET['id']);
        }
        else if($_GET['button']==='delete'){
            deleteRow($cart,$_GET['id']);
        }
    }
}

header('location:cart.php');