<?php
require_once('../layouts/header.php');
require_once('../logic/products.php');
$products = getProducts();
?>


 <!-- Breadcrumb Start -->
<div class="container-fluid">
      <div class="row px-xl-5">
        <div class="col-12">
          <nav class="breadcrumb bg-light mb-30">
            <a class="breadcrumb-item text-dark" href="#">Admin</a>
            <span class="breadcrumb-item active">Product List</span>
          </nav>
        </div>
      </div>
    </div>
<!-- Breadcrumb End --> 

<!-- table start -->
<div class="container-fluid">
      <div class="row px-xl-5">
        <div class="col-lg-8 table-responsive mb-5">
          <table
            class="table table-light table-borderless table-hover text-center mb-0"
          >
            <thead class="thead-dark">
              <tr>
                <th>Categories</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Colour</th>
                <th>Size</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody class="align-middle" id="products">
              <?php foreach ($products as $p) { ?>
            <tr>
                <td class="align-middle"><?= $p['category_name'] ?></td>    
                <td class="align-middle">
                  <img src="<?= $p['image_url'] ?>" alt="" style="width: 50px" />
                  <?= $p['name'] ?>
                </td>
                <td class="align-middle">$<?= $p['price'] ?></td>
                <td class="align-middle">
                  <div
                    class="input-group quantity mx-auto"
                    style="width: 100px"
                  >
                    <div class="input-group-btn">
                      <button
                        type="button"
                        class="decBtn btn btn-sm btn-primary btn-minus"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="quantityVal form-control form-control-sm bg-secondary border-0 text-center"
                      value="100"
                    />
                    <div class="input-group-btn">
                      <button
                        type="button"
                        class="incBtn btn btn-sm btn-primary btn-plus"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="align-middle"><?= $p['colour_id'] ?></td>
                <td class="align-middle"><?= $p['size_name'] ?></td>
                <td class="align-middle">
                  <button class="btn btn-sm btn-danger" type="button">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
<!-- table End -->

<?php
require_once('../layouts/footer.php');
?>