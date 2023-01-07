<?php
require_once('../dal/dal.php');
function getColours()
{
    return get_rows("SELECT * FROM colours");    
};
