//document.getElementById("products").innerHTML='<tr><td>T-shirt</td><td>200</td><td>3</td><td>$</td><td>X</td></tr>';

// const calc = () => {
//   let product_name = document.getElementById("product-name").value;
//   let price = document.getElementById("price").value;
//   let quantity = document.getElementById("quantity").value;
//   document.getElementById("products").innerHTML += getProductHtmlRow(product_name, price, quantity);

// }

//  const getProductHtmlRow = (product_name, price, quantity) => {
//  return `<tr>
//  <td>${product_name}</td>
//  <td>${price}</td>
//  <td><button style="color:red">-</button><input type"number" value="${quantity}"/><button>+</button></td>
//  <td>${price*quantity}</td>
//  <td>X</td>
//  </tr>`;
//  };

const getProductHtmlRow = (p, i) => {
  return `
  <tr>
    <td>${p.product_name}</td>
    <td>${p.price}</td>
    <td>
      <span>
        <button type="button" style="border:1px; background-color:#ffd333; width:25px" onclick="decQuantity(${i})">-</button>
      </span>
      <input type="text" style="border:1px; color:#6C757D; background-color:white; text-align:center; width:10%;;" value="${p.quantity}"/>
      <span>
        <button type="button" style="border: 1px; background-color: #ffd333; width:25px;" onclick="incQuantity(${i})">+</button>
      </span>
    </td>
    <td>${p.price * p.quantity}</td>
    <td><button style="border:1px; color:#6C757D;" type="button" onclick="remove(${i})">X</button></td>
  </tr>`;

};



const calc = () => {
  let product_name = document.getElementById("product-name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  products.push({
    product_name: product_name,
    price: price,
    quantity: quantity,
  });
  renderHTML();
  getSubTotal();
  getShipping();
  getTotal();
};

const renderHTML = () => {
  document.getElementById("products").innerHTML = "";
  products.forEach((p,i) => {
    document.getElementById("products").innerHTML += getProductHtmlRow(p,i);
  });
  document.getElementById("sub-total").innerHTML = `$${getSubTotal()}`;
  document.getElementById("shipping").innerHTML = `$${getShipping()}`;
  document.getElementById("total").innerHTML = `$${getTotal()}`
  localStorage.setItem("products",JSON.stringify(products));
};

const getSubTotal = () => {
  return products
    .map((p) => p.price * p.quantity)
    .reduce((acc, e) => (acc += e));
};

const getShipping = () => products.length * 10;

const getTotal = () => getShipping() + getSubTotal();

const decQuantity = (i) => {
  if (products[i].quantity > 1) products[i].quantity--;
  renderHTML();
};
const incQuantity = (i) => {
  products[i].quantity++;
  renderHTML();
};
const remove = (i) => {
  products.splice(i, 1);
  renderHTML();
};

const products = JSON.parse(localStorage.getItem("products") || '[]');
renderHTML()