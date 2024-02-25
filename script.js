//.............................
class Product {
  constructor(img, name, price, description) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

//..............................

class ProductManager {
  constructor() {
    this.products = [];
    this.container = document.getElementById("Product_Container");
  }
  //.....................
  addProduct(img, name, price, description) {
    const product = new Product(img, name, price, description);
    this.products.push(product);
    //..............................
    const productElement = document.createElement("div");
    productElement.classList.add("Product");
    //..............................
    const Prodcut_Img_Box = document.createElement("div");
    Prodcut_Img_Box.classList.add("Product_Img");
    const Product_Img = document.createElement("img");
    Product_Img.src = img;
    Prodcut_Img_Box.append(Product_Img);
    //...............................
    const Product_Info_Box = document.createElement("div");
    Product_Info_Box.classList.add("Product_Info");
    //..........................
    const Producgt_Name_Box = document.createElement("div");
    const Product_Name = document.createElement("h3");
    Product_Name.innerText = name;
    Producgt_Name_Box.append(Product_Name);
    //...................................
    const Product_Price_Box = document.createElement("div");
    const Product_Price = document.createElement("span");
    Product_Price.innerText = `$${price}`;
    Product_Price_Box.append(Product_Price);
    //.............................
    Product_Info_Box.append(Producgt_Name_Box, Product_Price_Box);
    productElement.append(Prodcut_Img_Box, Product_Info_Box);

    productElement.addEventListener("click", () =>
      this.showProductInfo(product)
    );
    this.container.appendChild(productElement);
  }

  showProductInfo(product) {
    document.getElementById("Watch_Info_Container").style.display = "flex";
    document.getElementById("Watch_Info_Container").innerHTML = `
        <button id ='close_btn'><i class="fa-solid fa-xmark"></i></button>
        <div class ='Product_Info_Img'>
        <img src = ${product.img} />
        </div>
        <div class ='Product_Info_Box'>
        <div>
        <h3>${product.name}</h3>
        </div>
        <div>
        <span>$${product.price}</span>
        </div>
        <div>
        <p>${product.description}</p>
        </div>
        `;
    document.getElementById("close_btn").onclick = () => {
      document.getElementById("Watch_Info_Container").style.display = "none";
    };
  }
}

//....................................
const productManager = new ProductManager();

//.......................
productManager.addProduct(
  "https://basket-02.wbbasket.ru/vol264/part26472/26472626/images/big/1.webp",
  "Футболка оверсайз",
  70,
  "Мужская футболка оверсайз – стильная и модная база множества образов. Однотонная хлопковая футболка с длинным рукавом и круглым вырезом входит в гардероб и взрослого мужчины, и подростка"
);
//........................
productManager.addProduct(
  "https://basket-12.wbbasket.ru/vol1657/part165757/165757809/images/big/1.webp",
  "Футболка оверсайз",
  85,
  "Мужская футболка оверсайз – стильная и модная база множества образов. Однотонная хлопковая футболка с длинным рукавом и круглым вырезом входит в гардероб и взрослого мужчины, и подростка"
);
//.....................
productManager.addProduct(
  "https://basket-12.wbbasket.ru/vol1800/part180019/180019373/images/big/1.webp",
  "Футболка оверсайз",
  55,
  "Мужская футболка оверсайз – стильная и модная база множества образов. Однотонная хлопковая футболка с длинным рукавом и круглым вырезом входит в гардероб и взрослого мужчины, и подростка"
);
