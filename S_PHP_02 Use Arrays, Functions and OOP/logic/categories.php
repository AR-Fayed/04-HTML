<?php
require_once('../dal/dal.php');
function getCategories()
{
    return get_rows("SELECT * FROM categories");    
};
