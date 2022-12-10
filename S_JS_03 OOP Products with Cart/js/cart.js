

class ShoppingCart {
  cartRows;

  user;
  paymentMethod;

  constructor() {
    this.cartRows = [];
  }

  get total() {
    return this.subTotal + this.shipping;
  }

  get subTotal() {
    return this.cartRows.map((x) => x.total).reduce((a, v) => (a += v), 0);
  }
  get shipping() {
    return (
      this.cartRows.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 10
    );
  }

  addProductById(_id) {
    let cartRow = this.cartRows.find((x) => x.product._id === _id);
    if (cartRow) {
      cartRow.incQuantity(1);
    }
    return cartRow;
  }

  addProduct(product){
    let cartRow = this.addProductById(product._id);
    if (!cartRow) {
      const ids = this.cartRows.map((x) => x._id);
      const maxId = Math.max(...(ids.length > 0 ? ids : [0]));
      cartRow = new CartRows(product);
      cartRow._id = maxId + 1;
      this.cartRows.push(cartRow);
    }
  }

  deleteProduct(_id) {
    let cart = this.cartRows.find((x) => x.product._id == _id);
    if (cart) {
      if (cart.quantity == 1) {
        this.removeDetail(cart._id);
      } else cart.decQuantity(1);
    }
  }
  removeDetail(_id) {
    const index = this.cartRows.findIndex((x) => x._id == _id);
    this.cartRows.splice(index, 1);
  }

  getPaymentCost() {
    switch (this.paymentMethod?.toLowerCase()) {
      case "paypal":
        return 0;
      case "check":
        return 0.01;
      case "bank-transfer":
        return 0.02;
      default:
        return 0;
    }
  }

  render() {
    this.rendertotal();
    this.renderTable();
  }

  rendertotal = () => {
    document.getElementById("total").innerHTML = this.total;
    document.getElementById("sub-total").innerHTML = this.subTotal;
    document.getElementById("shipping").innerHTML = this.shipping;
  };

  renderTable = () => {
    document.getElementById("products").innerHTML = "";
    this.cartRows.forEach((x) => {
      document.getElementById("products").innerHTML += x.gethtmlRow();
    });
  };

  saveChanges(){
    const products = [];
    this.cartRows.forEach((d) => {
      for (let i = 0; i < d.quantity; i++) {
        products.push(d.product);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
  }
}

class CartRows {
  _id;
  product;
  price;
  quantity;
  #total;

  constructor(product) {
    this.product = product;
    this.price = product.price;
    this.quantity = 1;
    this._id = product._id;
  }

  get total() {
    return this.price * this.quantity;
  }

  decQuantity(p) {
    if (this.quantity > p) this.quantity -= p;
  }
  incQuantity(p) {
    this.quantity += p;
  }
  gethtmlRow() {
    return `
    <tr>
      <td class="align-middle"><img src="${
        this.product.image
      }" alt="" style="width: 50px;"> ${this.product.name}</td>
      <td class="align-middle">$${this.price}</td>
      <td class="align-middle">
          <div class="input-group quantity mx-auto" style="width: 100px;">
              <div class="input-group-btn">
                  <button type="button" class="btn btn-sm btn-primary btn-minus" onclick="shoppingCart.deleteProduct(${this.product._id});shoppingCart.saveChanges();shoppingCart.render();">
                  <i class="fa fa-minus"></i>
                  </button>
              </div>
              <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${
                this.quantity
              }">
              <div class="input-group-btn">
                  <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="shoppingCart.addProductById(${this.product._id});shoppingCart.saveChanges();shoppingCart.render();">
                      <i class="fa fa-plus"></i>
                  </button>
              </div>
          </div>
      </td>
      <td class="align-middle">$${this.total}</td>
      <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="shoppingCart.removeDetail(${this._id});shoppingCart.saveChanges();shoppingCart.render();"><i class="fa fa-times"></i></button></td>
  </tr>`;
  }
}

class Product {
  _id;
  name;
  image;
  price;

  constructor(product) {
    this._id = product._id;
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
  }
}

class User {
  firstName;
  lastName;
  address;

  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
  }
}


let shoppingCart = new ShoppingCart();

const products = JSON.parse(localStorage.getItem("products") ?? "[]");

products.forEach((x) => {
  shoppingCart.addProduct(new Product(x));
})

shoppingCart.render();
