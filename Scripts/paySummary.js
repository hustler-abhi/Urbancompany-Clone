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
let itemTotalTag = document.querySelector('#itemTotal');
let membershipDisCostTag = document.querySelector('#membershipDisCost');
let conFeeTag = document.querySelector(`#conFee`);
let couponAmountTag = document.querySelector('#couponAmount');
let tipAmountTag = document.querySelector('#tipAmount');
let membershipAmountTag = document.querySelector('#membershipAmount');
let strThrMemberCostTag = document.querySelector("#strThrMemberCost");
let payAmountTag = document.querySelector('#payAmount');

let costPlan; 
// console.log(cost6Plan,cost12Plan);
let plan12 = true;
let plan6 = false;
let fee = 49;
let memberDiscount = 150;
let tip = 50;
let itemTotal = cartData.reduce((a, e) => a + e.rate * e.quantity, 0);
let couponDiscount = 0;
// let couponDiscount = (itemTotal * 0.3).toFixed(0);

itemTotalTag.innerText = `₹${itemTotal}`;
membershipDisCostTag.innerText = `-₹${memberDiscount}`;
conFeeTag.innerText = `₹${fee}`;
couponAmountTag.innerText = `-₹${couponDiscount}`
tipAmountTag.innerText = `₹${tip}`;
if(plan12){
  strThrMemberCostTag.innerText = `₹999`;
  costPlan = 299;
  membershipAmountTag.innerText = `₹${costPlan}`;
}else{
  strThrMemberCostTag.innerText = `₹699`;
  costPlan = 249;
  membershipAmountTag.innerText = `₹${costPlan}`;
}
// console.log('costPrice:', costPrice)
let totalCost = itemTotal + costPlan + fee - memberDiscount - couponDiscount + tip;

payAmountTag.innerText = `₹${totalCost}`;

localStorage.setItem("plan12Status", plan12);
localStorage.setItem("plan6Status", plan6);

let updateTotal = (amount) => {
  payAmount.innerText = `₹${amount}`;
  ogPayAmount.innerText = `₹${(amount * 1.6).toFixed(0)}`;
};

let plan12_btn = document.getElementById("plan12_btn");
let plan6_btn = document.getElementById("plan6_btn");
let remove12 = () => {
  totalCost -= costPlan;
  updateTotal(totalCost);
  plan12_btn.classList.remove("btn_white_active");
  plan12_btn.classList.add("btn_white");
  plan12_btn.innerText = "Add";
};
let remove6 = () => {
  totalCost -= costPlan;
  updateTotal(totalCost);
  plan6_btn.classList.remove("btn_white_active");
  plan6_btn.classList.add("btn_white");
  plan6_btn.innerText = "Add";
};

let add12 = () => {
  totalCost += costPlan;
  updateTotal(totalCost);
  plan12_btn.classList.add("btn_white_active");
  plan12_btn.classList.remove("btn_white");
  plan12_btn.innerText = "Remove";
};

let add6 = () => {
  totalCost += costPlan;
  updateTotal(totalCost);
  plan6_btn.classList.add("btn_white_active");
  plan6_btn.classList.remove("btn_white");
  plan6_btn.innerText = "Remove";
};



checkoutBtn.style.display = 'none';
addSlot.style.display = 'none';
addAddress.style.display = 'none';
bookSlotOverlay.style.display = 'none';
addressContainer.style.display = 'none';
slotContainer.style.display = 'none';
closebtn.style.display = 'none';

let updateServiceList = (data) => {
    services.innerHTML = "";
    // let div = document.createElement('div');
    console.log("In");
    data.forEach((e,i)=>{
      let service = document.createElement('div');
      service.setAttribute("class", "service");
      let serviceDetails = document.createElement('div');
      serviceDetails.setAttribute("class", "serviceDetails");
      let serviceName= document.createElement('p');
      serviceName.setAttribute("class", "serviceName");
      serviceName.innerText = e.name;
      let count_price = document.createElement('div');
      count_price.setAttribute("class", "count_price");
      let counter = document.createElement('div');
      counter.setAttribute("class", "counter");
      // let svgMinus = document.createElement('svg');
      // let svgPlus = document.createElement('svg');
      // let objsvg = {
      //   width:"15%",
      //   height:"100%",
      //   viewBox:"0 0 24 24",
      //   fill: "#6E42E5",
      //   xmlns:"http://www.w3.org/2000/svg"
      // }
      // let pathMinus = {
      //   "fill-rule": "evenodd",
      //   "clip-rule": "evenodd",
      //   "d": "M20.25 13H3.75v-2h16.5v2z",
      //   "fill": "#6E42E5"
      // };
      // let pathPlus = {
      //   "d":"M11 13v7.25h2V13h7.25v-2H13V3.75h-2V11H3.75v2H11z",
      //   "fill": "#6E42E5"
      // };
      // Object.keys(objsvg).forEach((e) =>{
      //   svgMinus.setAttribute(`${e}`,objsvg[`${e}`]);
      // })
      // let pathPlusTag = document.createElement('path');
      // let pathMinusTag = document.createElement('path');
      // Object.keys(pathMinus).forEach((e) =>{
      //   pathMinusTag.setAttribute(`${e}`,pathMinus[`${e}`]);
      // });
      // Object.keys(pathPlus).forEach((e) =>{
      //   pathPlusTag.setAttribute(`${e}`,pathPlus[`${e}`]);
      // });
      // svgMinus.append(pathMinus);
      // svgPlus.append(pathPlus);
      // console.log(svgMinus);

      let noOfTimes = document.createElement('span');
      noOfTimes.setAttribute("class", "noOfTimes");
      noOfTimes.innerText = e.quantity;


    //   Object.keys(objsvg).forEach((e) =>{
    //     svgPlus.setAttribute(`${e}`,objsvg[`${e}`]);
    //   })
    // //   svgPlus.innerHTML = `<path
    // //   d="M11 13v7.25h2V13h7.25v-2H13V3.75h-2V11H3.75v2H11z"
    // //   fill="#6E42E5"
    // // ></path>`
      
    //   console.log(svgPlus);

      svgMinus.addEventListener('click',()=>{
        if(e.quantity<=1){
          deleteItem(i);
        }else{
          e.quantity--;
          noOfTimes.innerText = e.quantity;
          localStorage.setItem('cartItems',JSON.stringify(cartData));
          updateCost();
        }
      });

      svgPlus.addEventListener('click',()=>{
        if(e.quantity<10){
          e.quantity++;
          noOfTimes.innerText = e.quantity;
          localStorage.setItem('cartItems',JSON.stringify(cartData));
          updateCost();
        }
      });
      counter.append(svgMinus,noOfTimes,svgPlus);
      let servicePrice = document.createElement('p');
      servicePrice.innerText = `₹${e.rate}`;
      count_price.append(counter, servicePrice);
      serviceDetails.append(serviceName, count_price);
      services.append(serviceDetails);


      services.append(service);
    });
}

// updateServiceList(cartData);

function deleteItem(i){
  cartData=cartData.splice(i,1);
  localStorage.setItem('cartItems',JSON.stringify(cartData));
  updateServiceList(cartData);
}

function updateCost(){
  itemTotal = cartData.reduce((a, e) => a + e.rate * e.quantity, 0);
}
// console.log(totalCost);

addressSlotBtn.addEventListener('click',() => {
    addressContainer.style.display = 'flex';
    bookSlotOverlay.style.display = 'flex';
    closebtn.style.display = 'flex';
});

saveAddress.addEventListener('click',() => {
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'flex';
    addAddress.style.display = 'flex';
});

saveSlot.addEventListener('click',() => {
    bookSlotOverlay.style.display = 'none';
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'none';
    addressSlotBtn.style.display = 'none';
    checkoutBtn.style.display = 'flex';
    addSlot.style.display = 'flex';
    checkoutBtn.innerHTML = `Pay ₹${totalCost}`;
});

closebtn.addEventListener('click',() => {
    addressContainer.style.display = 'none';
    slotContainer.style.display = 'none';
    bookSlotOverlay.style.display = 'none';
    closebtn.style.display = 'none';
});

checkoutBtn.addEventListener('click',() => {
    window.location.href = "Payment1.html";
});

