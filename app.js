var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var img = document.querySelector("img");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Freinds";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Freind";

    check = 1;
  } else {
    istatus.innerHTML = "unfreind";
    istatus.style.color = "red";
    btn.innerHTML = "Add Freind";

    check = 0;
  }
});
