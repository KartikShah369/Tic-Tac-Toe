let btns = document.querySelectorAll(".btn");

let turnX = true;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button was clicked!");
    if (turnX) {
      btn.innerHTML = "X";
      turnX = false;
    } else {
      btn.innerHTML = "O";
      turnX = true;
    }
    btn.disabled = true;
  });
});
