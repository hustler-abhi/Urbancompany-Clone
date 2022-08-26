let cityArr = ["Bangalore", "Hyderabad", "Pune", "Kolkata", "Chandigarh"];

let selected = document.getElementById("select");

function append() {
  let div = document.createElement("div");

  cityArr.forEach(function (el, i) {
    let citylist = document.createElement("div");
    citylist.innerText = el;

    div.append(citylist);
  });
  selected.append(div);
}
