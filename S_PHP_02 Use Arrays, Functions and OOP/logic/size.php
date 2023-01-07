<?php
require_once('../dal/dal.php');
function getSizes()
{
    return get_rows("SELECT * FROM sizes");    
};
