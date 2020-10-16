const people = [
  // {
  //   name: "Smári",
  //   birthYear: 2002,
  // },
  // {
  //   name: "Pedro",
  //   birthYear: 2003,
  // },
];

function renderList() {
  const peopleEl = document.querySelector(".people");

  // Clear list
  peopleEl.innerHTML = "";

  for (const person of people) {
    // <li>Pedro / 2003</li>

    const li = document.createElement("li");
    li.innerHTML = person.name + " / " + person.birthYear;

    peopleEl.appendChild(li);
  }
}

// Add a person
let person = {
  name: "Hulda",
  birthYear: 1865,
};
people.push(person);
renderList();

let person = {
  name: "Frank",
  birthYear: 1900,
};
people.push(person);
renderList();
