// ARRAY OF PRODUCT OBJECTS assuming that this is response converted to json we reqeusted from fetch API

const products = [
  {
    id: 0,
    name: "Bittu Smart Watch",
    price: 299.99,
    description:
      "Stay connected and on top of your fitness goals with the latest Bittu smart Watch.",
    image_url:
      "https://cdn.pixabay.com/photo/2015/08/15/15/21/smart-watch-889639_1280.jpg",
  },
  {
    id: 1,
    name: "Bittu TV",
    price: 999.99,
    description:
      "Experience stunning 4K resolution and sleek design with the latest Bittu TV.",
    image_url:
      "https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?s=612x612&w=0&k=20&c=ps14JZJh0ebkINcbQyHFsR1J5EC7ozkj_WO7Fh_9IOI=",
  },
  {
    id: 2,
    name: "bittu Running Shoes",
    price: 79.99,
    description:
      "Take your running to the next level with the latest bittu running shoes.",
    image_url:
      "https://cdn.pixabay.com/photo/2013/05/31/20/33/running-shoes-115149_1280.jpg",
  },
  {
    id: 3,
    name: "Bittu Headphones",
    price: 149.99,
    description:
      "Immerse yourself in crystal-clear sound with the latest Bittu headphones.",
    image_url:
      "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ=",
  },
  {
    id: 4,
    name: "Bittu Camera",
    price: 499.99,
    description:
      "Capture life's precious moments with the latest Bittu camera.",
    image_url:
      "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
  },
];

// THE REAL CODE

let product_display_grid = document.querySelector(".product_display_grid");

function product_card(products) {
  products.forEach((product) => {
    // product card div creation
    let product_card = document.createElement("div");
    product_card.setAttribute("id", `product_card_${product.id}`);
    product_card.setAttribute("class", "product_card");

    // product title display
    let product_name = document.createElement("h2");
    product_name.setAttribute("class", "product_name");
    product_name.innerText = `${product.name}`;
    product_card.appendChild(product_name);

    // product image display
    let product_image = document.createElement("img");
    product_image.setAttribute("class", "product_image");
    product_image.setAttribute("src", `${product.image_url}`);
    product_card.appendChild(product_image);

    // product description display
    let product_description = document.createElement("p");
    product_description.setAttribute("class", "product_description");
    product_description.innerText = product.description;
    product_card.appendChild(product_description);

    // product price display
    let product_price = document.createElement("h3");
    product_price.setAttribute("class", "product_price");
    product_price.innerHTML = `<strong>$</strong>${product.price}`;
    product_card.appendChild(product_price);

    // product add to cart
    let product_add_cart = document.createElement("button");
    product_add_cart.setAttribute("class", "add_cart");
    product_add_cart.innerText = "Add to Cart";
    product_add_cart.addEventListener("click", function (e) {
      e.preventDefault;
      update_cart(product);
    });
    product_card.appendChild(product_add_cart);

    product_display_grid.appendChild(product_card);
  });
}

product_card(products);

let cart_container = document.querySelector(".cart_container");
let cart_heading = document.querySelector(".cart_heading");

let cart_counts = {}
function update_cart(product) {
    if (!cart_counts[product.id]) {
        cart_counts[product.id]=1
    }

    let count = cart_counts[product.id]
    let count_div = document.createElement("span")
    count_div.innerText = count
    //  cart card div creation
    cart_heading.innerText = "Your Cart";
    let cart_card = document.createElement("div");
    cart_card.setAttribute("id", `cart_card_${product.id}`);
    cart_card.setAttribute("class", "cart_card");

    // cart product image div
    let cart_product_image_div = document.createElement("div");
    cart_product_image_div.setAttribute("class", "cart_product_image_div");
    cart_card.appendChild(cart_product_image_div);

    // cart product image
    let cart_product_image = document.createElement("img");
    cart_product_image.setAttribute("src", `${product.image_url}`);
    cart_product_image_div.appendChild(cart_product_image);

    // cart product name quantity div

    let cart_card_product_details = document.createElement("div");
    cart_card_product_details.setAttribute("class", "cart_card_prd_details");
    cart_card.appendChild(cart_card_product_details);

    // cart product name
    let cart_product_name = document.createElement("h2");
    cart_product_name.setAttribute("class", "cart_product_name");
    cart_product_name.innerText = product.name;
    cart_card_product_details.appendChild(cart_product_name);

    // cart product quantity
    let cart_product_quantity = document.createElement("div");
    cart_product_quantity.setAttribute("class", "cart_product_quantity");
    cart_card_product_details.appendChild(cart_product_quantity);

    // cart product quantity increase button

    let cart_product_quantitiy_increase = document.createElement("button");
    cart_product_quantitiy_increase.setAttribute("class", "quantity");
    cart_product_quantitiy_increase.innerText = `+`;
    cart_product_quantitiy_increase.addEventListener("click", function (e) {
        e.preventDefault();
        cart_counts[product.id]++
        count_div.innerText = cart_counts[product.id]
    });

    // cart product quantity increase button
    let cart_product_quantitiy_decrease = document.createElement("button");
    cart_product_quantitiy_decrease.setAttribute("class", "quantity");
    cart_product_quantitiy_decrease.innerText = `-`;
    cart_product_quantitiy_decrease.addEventListener("click", function (e) {
        e.preventDefault();
        cart_counts[product.id]--
        count_div.innerText= cart_counts[product.id]
    });

    let quantity = document.createElement("strong")
    quantity.innerText = "Quantity: "

    cart_product_quantity.appendChild(quantity)
    cart_product_quantity.appendChild(cart_product_quantitiy_decrease)
    cart_product_quantity.appendChild(count_div)
    cart_product_quantity.appendChild(cart_product_quantitiy_increase)
  cart_container.appendChild(cart_card);
}
