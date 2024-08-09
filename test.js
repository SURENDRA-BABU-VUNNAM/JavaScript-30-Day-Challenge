  // product card div creation
  let product_card = document.createElement("div");
  product_card.setAttribute("id", `product_card_${products[0].id}`);
  product_card.setAttribute("class", "product_card");

  // product title display
  let product_name = document.createElement("h2");
  product_name.setAttribute("class", "product_name");
  product_name.innerText = `${products[0].name}`;
  product_card.appendChild(product_name);

  // product image display
  let product_image = document.createElement("img");
  product_image.setAttribute("class", "product_image");
  product_image.setAttribute("src", `${products[0].image_url}`);
    product_card.appendChild(product_image);
    
    // product description display
    let product_description = document.createElement("p")
    product_description.setAttribute("class", "product_description");
    product_description.innerText = products[0].description
    product_card.appendChild(product_description)

  // product price display
  let product_price = document.createElement("h3");
  product_price.setAttribute("class", "product_price");
  product_price.innerHTML = `<strong>$</strong>${products[0].price}`;
    product_card.appendChild(product_price);
    

  product_display_grid.appendChild(product_card);