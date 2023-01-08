<?php
require_once(BASE_PATH.'/dal/dal.php');
function getColours()
{
    return get_rows("SELECT * FROM colours");    
};
