let signout = document.getElementById("sign");
let mybookings = document.getElementById("mybook");
let customer = document.getElementById("logout");

mybookings.innerText = "My Bookings";
mybookings.style.display = "none";
customer.innerText = "Logout-Verified Customer";
customer.style.display = "none";

append();
// let flag = false;

function myLocation() {
  let selected = document.getElementById("select").value;

  localStorage.setItem("location", selected);

  window.location.href = "UNIt-3 project/homepage.html";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function closeNav2() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("mySidenav2").style.width = "0";
}

function edit() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("mySidenav2").style.width = "0";
}

function login() {
  let mobnum = document.getElementById("mobile").value;
  if (mobnum == "" || mobnum.length > 10 || mobnum.length < 10) {
    alert("Enter Valid Number");
    return;
  }
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav2").style.width = "350px";
}

function login2() {
  let otp = 1234;
  let valid = document.getElementById("validotp").value;

  if (valid == otp && valid.length == 4) {
    flag = true;
    localStorage.setItem("login", flag);
    alert("Login Successfull");
    document.getElementById("mySidenav2").style.width = "0";
    append();
  }
}

function append() {
  let login_status = localStorage.getItem("login");
  if (login_status == "true") {
    signout.style.display = "none";
    mybookings.style.display = "block";
    customer.style.display = "block";
  } else {
    signout.style.display = "block";
    mybookings.style.display = "none";
    customer.style.display = "none";
  }
}

customer.addEventListener("click", function () {
  flag = false;
  localStorage.setItem("login", flag);
  append();
});

mybookings.addEventListener("click", function () {
  window.location.href = "Bookings.html";
});
