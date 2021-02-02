let openCart = document.getElementById("openCart");


let cardContainer = document.getElementById("card-container");
let itemContainer = document.getElementById("itemContainer");
let openShop= document.getElementById("openShop");

openCart.addEventListener('click', openPrintCart); 
openShop.addEventListener('click',openShopBtnEvent);

function openPrintCart() {
  
    hideShop(cardContainer);
    showCart(itemContainer);
    dataset[0].forEach(Element =>{
        
        printItem(itemContainer,Element);
    })
     createClrBtn(itemContainer);
  
    
};
function openShopBtnEvent(){
    hideCart(itemContainer);
    showShop(cardContainer);
}

