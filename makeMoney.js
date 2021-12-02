const moneyForm = document.getElementById("moneyForm");
const countInput = document.getElementById("count");
const coinSelect = document.getElementById("coin");
const coinContainer = document.querySelector(".coin-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let count = countInput.value;
  let coin = coinSelect.value;
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", coin);

    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    moneyForm.append(newCoin);
  }
});
