// Grab saved item div
const savedItemContainer = document.querySelector(".saved-item");

// Add some text to it
// const savedText = localStorage.getItem("savedName");
// savedItemContainer.innerHTML = savedText;

// Add event listener to the button
// so that it shows the text when clicked
const myButton = document.querySelector("button");

// Way 1
// const clickHandler = function () {
//   console.log("Cleaner click");
// };
// myButton.addEventListener("click", clickHandler);

// Way 2
myButton.addEventListener("click", function () {
  const savedText = localStorage.getItem("savedName");
  savedItemContainer.innerHTML = savedText;
});

// Add event listener to input
// So that it updates the savedName
// when I type a new character
const myInput = document.querySelector(".new-text");
myInput.addEventListener("keyup", function (event) {
  const input = event.target.value;
  localStorage.setItem("savedName", input);
});
