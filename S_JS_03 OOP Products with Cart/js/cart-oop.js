class user {
  first_name;
  last_name;
  address;
  //email;
  //password;

  constructor(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.address = user.address;
  }
}

class product {
  id;
  name;
  image;
  price;
  //category_id;
  //discount;
  //rating;
  //rating_count;
  //is_featured;
  //is_recent;
  //description;
  //color;
  //size;
  //v;
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.image = product.image;
    this.price = product.price;
  }
}

class orderDetails {
  id;
  product;
  quantity;
  price;

  get total() {
    return this.price * this.quantity;
  }
  constructor(product) {
    this.product = product;
    this.quantity = 1;
    this.price = product.price;
  }
  incQuantity = (q) => {
    this.quantity+=q;
  };
  decQuantity = (q) => {
    if (this.quantity > q) this.quantity-=q;
  };

  addHTMLRow (){
    return `
    <tr>
      <td class="align-middle"><img src="${
        this.product.image
      }" alt="" style="width: 50px;"> ${this.product.name}</td>
      <td class="align-middle">$${this.price}</td>
      <td class="align-middle">
          <div class="input-group quantity mx-auto" style="width: 100px;">
              <div class="input-group-btn">
                  <button type="button" class="btn btn-sm btn-primary btn-minus" onclick=""order.deleteProduct(${this.product.id});order.saveChanges();order.render();">
                  <i class="fa fa-minus"></i>
                  </button>
              </div>
              <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${
                this.quantity
              }">
              <div class="input-group-btn">
                  <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="order.addProductById(${this.product.id});order.saveChanges();order.render();">
                      <i class="fa fa-plus"></i>
                  </button>
              </div>
          </div>
      </td>
      <td class="align-middle">$${this.total}</td>
      <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="order.removeDetail(${this.id});order.saveChanges();order.render();"><i class="fa fa-times"></i></button></td>
  </tr>`;
  }
  
}

class Order {
  orderDetails;
  shipping_info;
  id;
  paymentMethod;
  //SubTotal;
  //shipping;
  //total;
  //user_id;
  //order_date;
  //v;

  constructor() {
    this.orderDetails = [];
  }
   
    
      get subTotal() {
        return this.orderDetails.map((x) => x.total).reduce((a, v) => (a += v), 0);
      }
    
      get shipping() {
        return (
          this.orderDetails.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
        );
      }
      get total() {
        return (this.subTotal + this.shipping) * (1 + this.getPaymentCost());
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
    


  addProductById(id) {
    let orderDetail = this.orderDetails.find((x) => x.product.id === id);
    if (orderDetail) {
      orderDetail.incQuantity(1);
    }
    return orderDetail;
  }

  addProduct(product){
    let orderDetail = this.addProductById(product.id);
    if (!orderDetail) {
      const ids = this.orderDetails.map((x) => x.id);
      const maxId = Math.max(...(ids.length > 0 ? ids : [0]));
      orderDetail = new orderDetails(product);
      orderDetail.id = maxId + 1;
      this.orderDetails.push(orderDetail);
    }
  }
   
  removeDetail = (id) => {
    const index = this.orderDetails.findIndex((x) => x.id === id);
    this.orderDetails.splice(index, 1);
  };

  deleteProduct(id) {
    let orderDetail = this.orderDetails.find((x) => x.product.id == id);
    if (orderDetail) {
      if (orderDetail.quantity == 1) this.removeDetail(orderDetail.id);
      else {
        orderDetail.decQuantity(1);
      }
    }
  }
  renderTotalCard(){
  
    document.getElementById("sub-total").innerHTML = this.subTotal;
    document.getElementById("shipping").innerHTML = this.shipping;
    document.getElementById("total").innerHTML = this.total;
  }
  renderOrderDetails(){
    document.getElementById("products").innerHTML = "";
    this.orderDetails.forEach((x) => {
      document.getElementById("products").innerHTML += x.addHTMLRow();
    });
  }

  render(){
    this.renderTotalCard();
    this.renderOrderDetails();
  }
 

  saveChanges(){
    const products = [];
    this.orderDetails.forEach((d) => {
      for (let i = 0; i < d.quantity; i++) {
        products.push(d.product);
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
  }
}


let order = new Order();
const products = JSON.parse(localStorage.getItem("products") ?? "[]");
products.forEach((x) => {
  order.addProduct(new product(x));
});
debugger
order.render();

