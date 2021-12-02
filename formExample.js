const theForm = document.getElementById("theForm");
const titleInput = document.getElementById("title");
const colorSelect = document.getElementById("color");
const bigCheckbox = document.getElementById("big");
const theList = document.getElementById("theList");

// 1. Listen for the submit event on the form
// 2. Inside the submit handler, get the values & checked of the inputs
// 3. Inside the submit handler, use the values as desired

theForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //need the value of the text input
  let title = titleInput.value;
  //need the value of the color select
  let color = colorSelect.value;
  //checked status of the big checkbox
  let big = bigCheckbox.checked;

  console.log(title, color, big);
  // Add a <li> to the list
  // The title will be innerText
  // Color will be the text color
  // Big will add a CSS class "big-item" if true

  // createElement
  // set properties
  //append to the parent (<ol> "theList")
  const listItem = document.createElement("li");
  listItem.innerText = title;
  listItem.style.color = color;
  if (big) {
    listItem.classList.add("big-item");
  }
  theList.append(listItem);
});
