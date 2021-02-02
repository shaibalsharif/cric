function updateBadge(counter, num) {
    let previousCount = Number(counter.innerHTML);
    counter.innerHTML = previousCount + num;
}
function hideAddCart(addToCart) {
    addToCart.style.display = "none";
}
function showAddCart(addToCart) {
    addToCart.style.display = "block";
}
function hideCustomBtnDiv(customBtnDiv) {
    customBtnDiv.style.display = "none";
}
function showCustomBtnDiv(customBtnDiv) {
    customBtnDiv.style.display = "block";
}
function addToCartEvent() {
    // let btnCart=  document.getElementsByClassName("btn-primary cart");
    let counter = document.getElementById("cartBadge");
    hideAddCart(addToCart);
    updateBadge(counter, 1);
    showCustomBtnDiv(customBtnDiv);
}
function plusBtnEvent(s) {
    console.log(s);
    console.log(countDisplay);
}

function showCart(itemContainer) {
    // document.getElementById("openCart").style.display="none";
    document.getElementById("openShop").style.display = "inline;"
    itemContainer.style.display = "flex";
}

function hideShop(cardContainer) {
    document.getElementById("openCart").style.display = "none";
    //document.getElementById("openShop").style.display="inline;"
    cardContainer.style.display = "none";
}
function hideCart(itemContainer) {

    document.getElementById("openShop").style.display = "none;"
    // document.getElementById("openCart").style.display="inline;"
    itemContainer.style.display = "none";
}
function showShop(cardContainer) {
    //document.getElementById("openShop").style.display="none;"
    document.getElementById("openCart").style.display = "block;"
    cardContainer.style.display = "flex";
}
function pushData(element) {
    //if(){}
    // console.log(dataset[0].indexOf(element));
    //console.log(element+"eita");
    if (dataset[0].length > 0) {

        for (index = 0; index < dataset[0].length; index++) {
            let item = dataset[0][index];

            if (item.i_id == element.p_id) {

                dataset[0][index].i_qty = dataset[0][index].i_qty + 1;
                updateLs();
                return false;
            }
        }
    }
    dataset[0].push(createNewItem(element));
    updateLs();

}
function setInitData() {
    if (localStorage.length > 0) {
        dataset[0] = JSON.parse(localStorage.getItem("cart"));
    }
    else {
        updateLs();
    }
}
function updateLs() {
    let serealizedData = JSON.stringify(dataset[0]);
    localStorage.setItem("cart", serealizedData);
}

function createNewItem(element) {
    var newItem = {};
    newItem.i_id = element.p_id;
    newItem.i_name = element.p_name;
    newItem.i_price = element.p_price;
    newItem.i_qty = 1;
    return newItem;
}
function popData(element) {
    

    for (index = 0; index < dataset[0].length; index++) {
        let item = dataset[0][index];

        if (item.i_id == element.p_id) {
            currQty = dataset[0][index].i_qty - 1;
            dataset[0][index].i_qty =  currQty;
            if(currQty==0){
                
                dataset[0].splice(index,1);
            }
            updateLs()
            
            return false;
        }
    }

    updateLs();
}
function clrEvent(){
    dataset[0]= [];
    updateLs();
    location.reload();
}