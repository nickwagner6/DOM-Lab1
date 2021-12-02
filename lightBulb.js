const lightBulb = document.querySelector(".lightBulb");
const onButton = document.querySelector(".on-button");
const offButton = document.querySelector(".off-button");
const toggleButton = document.querySelector(".toggle-button");
const endButton = document.querySelector(".end-button");
const button = document.querySelectorAll(".button");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});
endButton.addEventListener("click", () => {
  lightBulb.remove();
  onButton.disabled = true;
  toggleButton.disabled = true;
  offButton.disabled = true;
});
