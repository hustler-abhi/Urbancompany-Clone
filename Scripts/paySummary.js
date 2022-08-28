let cartData = JSON.parse(localStorage.getItem('cartItems'))||[];

if(cartData.length===0){
    let body = document.querySelector('body');
    body.innerHTML = "";
    let div = document.createElement('div');
    div.innerText = "Seems like you have not selected any services";
    let button = document.createElement('button');
    button.innerText = "Explore Services";
    button.addEventListener('click',() => {
        window.location.href = "index.html";
    });
    body.append(div,button);
}

let addressSlotBtn = document.querySelector('#bookSlot');
let checkoutBtn = document.querySelector('#checkout');
let addressContainer = document.querySelector('#addressContainer');
let slotContainer = document.querySelector('#slotContainer');
let saveAddress = document.querySelector('#saveAddress');
let bookSlotOverlay = document.querySelector('#bookSlotOverlay');
let addAddress = document.querySelector('#addAddress');
let addSlot = document.querySelector('#addSlot');
let saveSlot = document.querySelector('#saveSlot');
let closebtn = document.querySelector("#closebtn");
let services = document.querySelector('#services');

checkoutBtn.style.display = 'none';
addSlot.style.display = 'none';
addAddress.style.display = 'none';
bookSlotOverlay.style.display = 'none';
addressContainer.style.display = 'none';
slotContainer.style.display = 'none';
closebtn.style.display = 'none';

let updateServiceList = () => {
    // services.innerHTML = "";
    // let div = document.createElement('div');
    console.log("In");
    cartData.forEach((e,i)=>{

      // services.append(service);
    });
}

updateServiceList();

let costPrice = cartData.reduce((a, e) => a + e.rate * e.quantity, 0);
// console.log('costPrice:', costPrice)
let cost12Plan = 299;
let cost6Plan = 249;
let totalCost = costPrice + cost12Plan;
// console.log(totalCost);

addressSlotBtn.addEventListener('click',() => {
    addressContainer.style.display = 'block';
    bookSlotOverlay.style.display = 'block';
    closebtn.style.display = 'block';
});

saveAddress.addEventListener('click',() => {
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'block';
    addAddress.style.display = 'block';
});

saveSlot.addEventListener('click',() => {
    bookSlotOverlay.style.display = 'none';
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'none';
    addressSlotBtn.style.display = 'none';
    checkoutBtn.style.display = 'block';
    addSlot.style.display = 'block';
});

closebtn.addEventListener('click',() => {
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'none';
    bookSlotOverlay.style.display = 'none';
    closebtn.style.display = 'none';
});

checkoutBtn.addEventListener('click',() => {
    window.location.href = "Payment.html";
});

