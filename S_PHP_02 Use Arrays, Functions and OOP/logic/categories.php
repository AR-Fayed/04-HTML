<?php
require_once(BASE_PATH.'/dal/dal.php');
function getCategories()
{
    return get_rows("SELECT * FROM categories");    
};
