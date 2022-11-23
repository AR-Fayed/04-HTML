//document.getElementById("products").innerHTML='<tr><td>T-shirt</td><td>200</td><td>3</td><td>$</td><td>X</td></tr>';

const calc = () => {
  let product_name = document.getElementById("product-name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let total = price * quantity;
  document.getElementById("products").innerHTML += `<tr><td>${product_name}</td><td>${price}</td><td>${quantity}</td><td>${total}</td><td>X</td></tr>`;
}
