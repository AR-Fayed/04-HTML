<?php
require_once('../dal/dal.php');
function getProducts()
    {
    $query = "SELECT p.*,c.name category_name,s.name size_name,cl.name color_name FROM
products p JOIN categories c ON p.category_id=c.id
JOIN sizes s ON s.id = p.size_id
JOIN colours cl on cl.id=p.colour_id";
    return get_rows($query);
    };
    

