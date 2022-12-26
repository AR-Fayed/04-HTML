const addSingleProductToCart = (product) => {
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  const oldProductIndex = products.findIndex((x) => x.id === product.id);
  if (oldProductIndex >= 0) {
    products[oldProductIndex].quantity += 1;
  } else {
    products.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("products", JSON.stringify(products));
};

const getFeaturedData = () => {
  fetch(`https://coral-app-9qyk6.ondigitalocean.app/api/products/getRecent`)
    .then((info) => info.json())
    .then((x) =>
      x.data.forEach((product) => {
        document.getElementById("featured_products").innerHTML +=
          featuredProduct(product);
      })
    );
};

getFeaturedData()

const featuredProduct = (product) => {
    return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1" >
    <div class="product-item bg-light mb-4">
        <div class="product-img position-relative overflow-hidden">
            <img class="img-fluid w-100" src="${product.image}" alt="">
            <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href="#" onclick="addSingleProductToCart({id:${product._id}, product_name:'${product.name}', price:${product.price+(product.price*product.discount)},image:'${product.image}'})"><i class="fa fa-shopping-cart"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
                <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
            </div>
        </div>
        <div class="text-center py-4">
            <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a>
            <div class="d-flex align-items-center justify-content-center mt-2">
                <h5>${product.price-(product.price*product.discount)}</h5><h6 class="text-muted ml-2"><del>${product.price}</del></h6>
            </div>
            <div class="d-flex align-items-center justify-content-center mb-1">
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small>${product.image}</small>
            </div>
        </div>
    </div>
</div>`
}
