let log_status = localStorage.getItem("login");
let bookdiv = document.getElementById("mybook");
let logout = document.getElementById("logout");
let signoutt = document.getElementById("sout");
let log_container = document.getElementById("sign");

let flag = false;
localStorage.setItem("login", flag);

let book = document.createElement("div");
book.innerText = "My Booking";
book.addEventListener("click", function () {
  window.location.href = "Bookings.html";
});
book.style.display = "none";
console.log(log_status);

log_container.addEventListener("click", function () {
  flag = false;
  localStorage.setItem("login", flag);
  log_status = localStorage.getItem("login");
  console.log(log_status);
  book.style.display = "none";
  out.style.display = "none";

  log_container.innerText = "Login/Signup";
  log_container.style.color = "white";
  log_container.style.cursor = "pointer";

  signoutt.append(log_container);
});

function append() {
  if (log_status == true) {
    alert("Success");
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("sign").style.width = "0";
    document.getElementById("sign").innerText = null;

    book.style.display = "block";
    out.style.display = "block";
  } else {
    book.style.display = "none";
    out.style.display = "none";
    log_container.innerText = "Login/Signup";
    log_container.style.color = "white";
    log_container.style.cursor = "pointer";
  }
}

function myLocation() {
  let selected = document.getElementById("select").value;

  localStorage.setItem("location", selected);

  window.location.href = "homepage.html";
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
  let otp = "1234";

  let valid = document.getElementById("validotp").value;

  if (valid == otp && valid.length == 4) {
    alert("Login Successfull");
    flag = true;
    localStorage.setItem("login", flag);
    log_status = localStorage.getItem("login");
    console.log(log_status);
    document.getElementById("mySidenav2").style.width = "0";

    book.style.display = "block";
    log_container.innerText = "Logout-Verified Customer";

    bookdiv.append(book);
    append();
  } else {
    alert("Enter Valid OTP");
    append();
  }

  document.getElementById("validotp").value = "";
}

log_container.addEventListener("click", function () {
  openNav();
  flag = false;
  localStorage.setItem("login", flag);
});
