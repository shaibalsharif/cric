function createCard(element) {
    card_cont = document.getElementById("card-container");
    
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let cardImage = document.createElement("img");
    cardImage.src = "resources" + element.p_image;
    let innerContainer = document.createElement("div");
    innerContainer.className = "container inner";
    let productName = document.createElement("h4");
    productName.innerHTML = element.p_name;
    productName.style.display = "inline";
    let productPrice = document.createElement("h5");
    productPrice.innerHTML = element.p_price + "tk";
    productPrice.style.float = "right";
    let productDescription = document.createElement("p");

    productDescription.innerHTML = element.p_desc;
    innerContainer.appendChild(productName);
    innerContainer.appendChild(productPrice);
    innerContainer.appendChild(productDescription);

    let addToCart = document.createElement("button");
    addToCart.className = "btn-primary cart";
    addToCart.innerHTML = "Add To Cart"


    let customBtnDiv = document.createElement("div");
    customBtnDiv.className = "btn-primary";
    customBtnDiv.id = "customBtnDiv";

    let minusBtn = document.createElement("button");
    minusBtn.id = "minusBtn";
    minusBtn.innerHTML = "-";
    customBtnDiv.appendChild(minusBtn);

    let countDisplay = document.createElement("button");
    countDisplay.id = "countDisplay";
    countDisplay.innerHTML = "0";
    customBtnDiv.appendChild(countDisplay);

    let plusBtn = document.createElement("button");
    plusBtn.id = "plusBtn";
    plusBtn.innerHTML = "+"
    customBtnDiv.appendChild(plusBtn);

    
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(innerContainer);
    cardDiv.appendChild(addToCart);
    cardDiv.appendChild(customBtnDiv);
    card_cont.appendChild(cardDiv);

    // let btnCart=  document.getElementsByClassName("btn-primary cart");
    addToCart.addEventListener("click", function btnClick() {
        // let btnCart=  document.getElementsByClassName("btn-primary cart");
        let counter = document.getElementById("cartBadge");
        hideAddCart(addToCart);
        updateBadge(counter, 1);
        showCustomBtnDiv(customBtnDiv);
        countDisplay.innerHTML = "1";
        pushData(element);
        //update ls

    });
    plusBtn.addEventListener("click", function plusBtnEvent() {
       if (Number(countDisplay.innerHTML)<10) {
        countDisplay.innerHTML = Number(countDisplay.innerHTML) + 1;
        let counter = document.getElementById("cartBadge");
        updateBadge(counter, 1);
        pushData(element);
        //update ls
       }
       else{
           alert("Max Item Taken!");
       }
    });
    minusBtn.addEventListener("click", function minusBtnEvent() {
        if (Number(countDisplay.innerHTML) == 1) {
            countDisplay.innerHTML = "0";
            let counter = document.getElementById("cartBadge");
            updateBadge(counter, -1);
            hideCustomBtnDiv(customBtnDiv);
            showAddCart(addToCart);
            
        }
        else{
            countDisplay.innerHTML = Number(countDisplay.innerHTML) - 1;
            let counter = document.getElementById("cartBadge");
            updateBadge(counter, -1);
        }
        popData(element);
        //update ls

    });

}

function printItem(itemContainer,element) {
    /*
    let itemContainer = document.createElement("div");
    itemContainer.className = "jumbotron";
    itemContainer.id = "itemContainer";
    document.body.appendChild(itemContainer);
    */
    let itemCard = document.createElement("div");
    itemCard.id = "itemCard";
    itemContainer.appendChild(itemCard);

    let productPic = document.createElement("img");
    productPic.src = "./resources/sampimg.png";
    productPic.id = "productPic";
    itemCard.appendChild(productPic);

    let productDetail = document.createElement("div");
    productDetail.id = "productDetail";


    let pName = document.createElement("h2");
    pName.innerHTML = element.i_name;
    productDetail.appendChild(pName);

    let pId = document.createElement("h3");
    pId.innerHTML = element.i_id;
    productDetail.appendChild(pId);
    
    let pQty = document.createElement("h3");
    pQty.innerHTML = element.i_qty+"pcs";
    productDetail.appendChild(pQty);
    itemCard.appendChild(productDetail);

    let pPrice = document.createElement("h4");
    pPrice.id = "priceTag";
    pPrice.innerHTML = element.i_price*element.i_qty+"tk";
    itemCard.appendChild(pPrice);
    
}
function createClrBtn(itemContainer){
    let clrBtn = document.createElement("button");
    clrBtn.innerHTML ="Clear Cart";
    clrBtn.className = "btn-danger";
    clrBtn.id="clrBtn";
    itemContainer.appendChild(clrBtn);
    clrBtn.addEventListener("click", clrEvent);
}