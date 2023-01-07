<?php
require_once('../layouts/header.php');
include('../logic/colours.php');
include('../logic/size.php');
$colours = getColours();
$sizes = getSizes();
?>

<div class="container-fluid"> 
    <div class="row bg-secondary py-1 px-xl-5">
        <form  method="POST" enctype="multipart/form-data">
            <div class="col-lg-6 d-none d-lg-block">
                <label style="margin-bottom: 2px;">Name:</label>
                <input  type="text" placeholder="shirt"/>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
                <label style="margin-bottom: 1px; margin-top: 3px;">Description:</label>
                <input type="text" placeholder="very useful product"/>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
                <label style="margin-bottom: 2px;">Price:</label>
                <input type="text" placeholder="$123"/>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
                <label style="margin-bottom: 2px;">discount:</label>
                <input type="text" placeholder="0.25"/>
            </div>
            <div class="col-md-6 form-group">
                <label  style="margin-bottom: 2px;">Colour:</label>
                <select class="custom-select" style="border: 1px solid grey">
                    <?php foreach($colours as $c){ ?>              
                <option selected><?= $c['name'] ?></option>
                    <?php } ?>                
                </select>                                                  
            </div>
            <div class="col-md-6 form-group">
                <label  style="margin-bottom: 2px;">Colour:</label>
                <select class="custom-select" style="border: 1px solid grey">
                    <?php foreach($sizes as $s){ ?>              
                <option selected><?= $s['name'] ?></option>
                    <?php } ?>                
                </select>                                                  
            </div>
            <div class="col-md-6 form-group">
                <label  style="margin-bottom: 2px;">Colour:</label>
                <select class="custom-select" style="border: 1px solid grey">
                    <?php foreach($categories as $cat){ ?>              
                <option selected><?= $cat['name'] ?></option>
                    <?php } ?>                
                </select>                                                  
            </div>
            <div class="col-md-6 form-group">
                <label  style="margin-bottom: 2px;">Upload Image:</label>
                <input type="file"/>                                                     
            </div>
        </form>
    </div>
</div> 

<?php
require_once('../layouts/footer.php');
?>