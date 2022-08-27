let savings_amt = document.getElementById("amt_saved");
// let cartData = JSON.parse(localStorage.getItem("cart_data")) || [];
let payAmount = document.getElementById("payAmount");
let ogPayAmount = document.getElementById("strThrAmount");
let plusDiscount = document.getElementById("plusDiscount");
let noPlan = document.getElementById("noPlan");
let proceed_btn = document.getElementById("proceed_btn");
let cartData = [
  { price: "1120", quantity: "2" },
  { price: "1200", quantity: "3" },
  { price: "210", quantity: "1" }
];
localStorage.setItem("cart_data", JSON.stringify(cartData));
console.log('JSON.stringify(cartData):', JSON.stringify(cartData))
let costPrice = cartData.reduce((a, e) => a + e.price * e.quantity, 0);
// console.log('costPrice:', costPrice)
let cost12Plan = 299;
let cost6Plan = 249;
let totalCost = costPrice + cost12Plan;
console.log(totalCost);
let updateTotal = (amount) => {
  payAmount.innerText = `₹${amount}`;
  ogPayAmount.innerText = `₹${(amount * 1.6).toFixed(0)}`;
};

updateTotal(totalCost);

let plan12 = true;
let plan6 = false;

localStorage.setItem("plan12Status", plan12);
localStorage.setItem("plan6Status", plan6);

let plan12_btn = document.getElementById("plan12_btn");
let plan6_btn = document.getElementById("plan6_btn");
let remove12 = () => {
  totalCost -= cost12Plan;
  updateTotal(totalCost);
  plan12_btn.classList.remove("btn_white_active");
  plan12_btn.classList.add("btn_white");
  plan12_btn.innerText = "Add";
};
let remove6 = () => {
  totalCost -= cost6Plan;
  updateTotal(totalCost);
  plan6_btn.classList.remove("btn_white_active");
  plan6_btn.classList.add("btn_white");
  plan6_btn.innerText = "Add";
};

let add12 = () => {
  totalCost += cost12Plan;
  updateTotal(totalCost);
  plan12_btn.classList.add("btn_white_active");
  plan12_btn.classList.remove("btn_white");
  plan12_btn.innerText = "Remove";
};

let add6 = () => {
  totalCost += cost6Plan;
  updateTotal(totalCost);
  plan6_btn.classList.add("btn_white_active");
  plan6_btn.classList.remove("btn_white");
  plan6_btn.innerText = "Remove";
};

let discountCheck = () => {
  if (plan12 === false && plan6 === false) {
    plusDiscount.style.display = "none";
  } else {
    plusDiscount.style.display = "flex";
  }
};
plan12_btn.onclick = () => {
  if (plan12 && plan6 === false) {
    remove12();
    plan12 = false;
    localStorage.setItem("plan12Status", plan12);
    discountCheck();
  } else if (plan12 === false && plan6 === false) {
    add12();
    plan12 = true;
    localStorage.setItem("plan12Status", plan12);
    discountCheck();
  }
};

plan6_btn.onclick = () => {
  if (plan6 && plan12 === false) {
    remove6();
    plan6 = false;
    localStorage.setItem("plan6Status", plan6);
    discountCheck();
  } else if (plan6 === false && plan12 === false) {
    add6();
    plan6 = true;
    localStorage.setItem("plan6Status", plan6);
    discountCheck();
  }
};

let number_btn = document.getElementsByClassName("number_btn");

let saved_amt = number_btn[4].innerText * 144;
// console.log('savings_amt:', saved_amt);
savings_amt.innerText = `₹${saved_amt}`;
number_btn[4].style.backgroundColor = "var(--light_grey)";
number_btn[4].style.borderColor = "var(--secondary_grey)";
number_btn[4].style.color = "var(--primary_grey)";
number_btn[4].style.fontWeight = "600";
// console.log(number_btn);
for (let key in number_btn) {
  number_btn[key].onclick = function () {
    saved_amt = number_btn[key].innerText * 144;
    // console.log('savings_amt:', saved_amt);
    savings_amt.innerText = `₹${saved_amt}`;
    number_btn[key].style.backgroundColor = "var(--light_grey)";
    number_btn[key].style.borderColor = "var(--secondary_grey)";
    number_btn[key].style.color = "var(--primary_grey)";
    number_btn[key].style.fontWeight = "600";

    // console.log(number_btn[key]);
  };
}

let noPlanChoice = () => {
  plan12 = false;
  plan6 = false;
  localStorage.setItem("plan6Status", "plan6");
  localStorage.setItem("plan12Status", "plan12");
  window.location.href = "paySummary.html";
};

noPlan.addEventListener("click", function () {
  noPlanChoice();
});

proceed_btn.addEventListener("click", function () {
  window.location.href = "paySummary.html";
});
