const products = JSON.parse(localStorage.getItem("products") || "[]");

const renderHTML = () => {
  document.getElementById("products").innerHTML = "";
  products.forEach((p) => {
    document.getElementById("products").innerHTML += getProductHtmlRow(p);
  });
  document.getElementById("sub-total").innerHTML = `$${getSubTotal()}`;
  document.getElementById("shipping").innerHTML = `$${getShipping()}`;
  document.getElementById("total").innerHTML = `$${getTotal()}`;
};

const getProductHtmlRow = (p) => {
  return `
    <div class="d-flex justify-content-between">
        <p>${p.product_name}</p>
        <p>$${p.price * p.quantity}</p>
    </div>`;
};

const getSubTotal = () => {
  return products
    .map((p) => p.price * p.quantity)
    .reduce((acc, v) => (acc += v), 0);
};

const getShipping = () => {
  return products.length * 10;
};

const getTotal = () => {
  return getSubTotal() + getShipping();
};

renderHTML();

const placeOrder = () => {
  fetch("https://coral-app-9qyk6.ondigitalocean.app/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("x-access-token"),
    },
    body: JSON.stringify({
      shipping_info: {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip_code: document.getElementById("zip_code").value,
      },

      _id: localStorage.getItem("id"),
      sub_total_price: document.getElementById("sub-total").value,
      shipping: document.getElementById("shipping").value,
      total_price: document.getElementById("total").value,
    }),
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
};

placeOrder();
