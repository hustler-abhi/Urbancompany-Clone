function myLocation() {
  let selected = document.getElementById("select").value;

  localStorage.setItem("location", selected);

  window.location.href = "homepage.html";
}
