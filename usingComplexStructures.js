function getLocals() {
  const theLocalsStr = localStorage.getItem("theLocals");
  const theLocals = JSON.parse(theLocalsStr);
  return theLocals;
}

function addLocal(newLocal) {
  const theLocals = getLocals();
  theLocals.push(newLocal);
  // Update localStorage
  const theLocalsStr = JSON.stringify(theLocals);
  localStorage.setItem("theLocals", theLocalsStr);
}

function removeLocal(localIndex) {
  const theLocals = getLocals();
  theLocals.splice(localIndex, 1);
  // Update localStorage
  const theLocalsStr = JSON.stringify(theLocals);
  localStorage.setItem("theLocals", theLocalsStr);
}

// Shows all people present in the people array
// in the .people-list ul element
function renderList() {
  const peopleList = document.querySelector(".people-list");
  const theLocals = getLocals();

  // Clear list
  peopleList.innerHTML = "";

  if (theLocals.length === 0) {
    peopleList.innerHTML = "No people found";
    return;
  }

  for (let i = 0; i < theLocals.length; i++) {
    const local = theLocals[i];
    // <li>Pedro / 2003</li>

    // <li>
    //   <span>Pedro / 2003</span> <button>Remove</button>
    // </li>

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerHTML = local.name + " / " + local.birthYear;
    li.appendChild(span);

    button.innerHTML = "Remove";
    li.appendChild(button);

    button.addEventListener("click", function () {
      removeLocal(i);
      renderList();
    });

    peopleList.appendChild(li);
  }
}

// Add a submit event listener for the form
const form = document.querySelector(".add-person-form");
const handleSubmit = function (e) {
  e.preventDefault();

  const formEl = e.target;

  // Create a new local
  const newLocal = {
    name: formEl.name.value,
    birthYear: formEl.birthYear.value,
  };

  // Push new person to people array
  addLocal(newLocal);

  // Make appear in the DOM
  renderList();

  // Clean up fields
  formEl.name.value = "";
  formEl.birthYear.value = "";
};
form.addEventListener("submit", handleSubmit);

// Start
renderList();
