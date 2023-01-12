<?php
require_once(BASE_PATH . 'dal/dal.php');
function addProductToCart($product)
{
    if (session_status() === PHP_SESSION_NONE)
        session_start();

    $cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];
    $found = false;
    for ($i = 0; $i < count($cart); $i++) {
        if ($cart[$i]['product']['id'] === $product['id']) {
            $cart[$i]['quantity'] += 1;
            $found = true;
        }
    }
    if (!$found) {
        array_push($cart, ['product' => $product, 'quantity' => 1]);
    }
    $_SESSION['cart'] = $cart;
}

function getCart()
{
    if (session_status() === PHP_SESSION_NONE)
        session_start();

    $cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];
    return $cart;
}

function subtotal(){
    $cart = getCart();
    $sub = 0;
    for($i=0; $i<count($cart); $i++){
        $sub = ($cart[$i]['quantity']*($cart[$i]['product']['price']-($cart[$i]['product']['price']*$cart[$i]['product']['discount']))) + $sub;
    }
    return $sub;
}

function shipping(){
    $cart = getCart();
    $ship = 0;
    for ($i = 0; $i < count($cart); $i++){
        $ship = ($cart[$i]['quantity'] * 10) + $ship;
    }
    return $ship;
}

function total(){
    $total = shipping() + subtotal();
    return $total;
}

function incQuantity($cart,$i){
    $quantity = $cart[$i]['quantity'] + 1;
    $cart[$i]['quantity'] = $quantity;
    $_SESSION['cart'] = $cart;
}

function decQuantity($cart,$i){
    $quantity = $cart[$i]['quantity'] - 1;
    if($quantity < 1){
        unset($cart[$i]);
    } else{
        $cart[$i]['quantity'] = $quantity;}
    $_SESSION['cart'] = $cart;
}

function deleteRow($cart,$i){
    unset($cart[$i]);
    $_SESSION['cart'] = $cart;
}