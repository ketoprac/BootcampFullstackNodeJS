export default class Product{
  static totalProduct = 0;

  constructor(prodId, prodName, category, price=0, totalBuy=1){
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.totalBuy = totalBuy;
    Product.totalProduct++;
  }

  setPrice(price){
    return price.toString();
  }

  setTotalBuy(total){
    return total.toString();
  }

  toString(){
    return `
    Product ID: ${this.prodId}
    Product Name: ${this.prodName}
    Category: ${this.category}
    Price: ${this.price}
    Total: ${this.totalBuy}
          `
  }

  subTotal() {
    return this.price * this.totalBuy;
  }

}