const handleAddProduct = () =>{

    const productEle = document.getElementById('product');
    const quantityEle = document.getElementById('quantity');

    const product = productEle.value;
    const quantity = parseInt(quantityEle.value);

    console.log('Product added:', product, quantity);

    displayProducts(product, quantity);

    productEle.value = '';
    quantityEle.value = '';
}

const displayProducts = (product, quantity) =>{
    const productsList = document.getElementById('products-list');

    const listItems = document.createElement('li');
    listItems.innerText = `Product: ${product} | Quantity: ${quantity}`;

    addProductToLS(product, quantity);
    productsList.append(listItems);
}

const getCart = () =>{

    
    localStorage.getItem(JSON.parse(cart));
}

const addProductToLS =(product, quantity) =>{
    const Cart = getCart();

    if(Cart[product]){
        cart[product] = cart[product] + quantity;
    }
    else{
    cart[product] = quantity;
    }

    console.log(cart);

    const cartJSON = JSON.stringify(cart);
    // console.log(cartJSON);

    localStorage.setItem('cart', cartJSON);
}

