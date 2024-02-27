const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "gray") {
      body.style.background = e.target.id;
      body.style.color = "white";
    } else if (e.target.id === "white") {
      body.style.background = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "blue") {
      body.style.background = e.target.id;
      body.style.color = "white";
    } else {
      body.style.background = e.target.id;
      body.style.color = "tomato";
    }
  });
});
