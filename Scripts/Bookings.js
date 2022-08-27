let logout = document.getElementById("log");

function colorone() {
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  one.style.backgroundColor = "black";
  one.style.color = "white";
  two.style.backgroundColor = "white";
  two.style.color = "black";
}
function colortwo() {
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  one.style.backgroundColor = "white";
  one.style.color = "black";
  two.style.backgroundColor = "black";
  two.style.color = "white";
}

function logouttohome() {
  window.location.href = "index.html";
  flag = false;
  localStorage.setItem("login", flag);
}

function home() {
  window.location.href = "homepage.html";
}

function logo() {
  window.location.href = "index.html";
}
