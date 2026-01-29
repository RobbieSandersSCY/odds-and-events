// === STATE ===
let inputNum = 0;
let addToOdds = 0;

const bankArray = [];
const oddArray = [];
const evenArray = [];

/**
 * Adds n to bankArray
 * @param {number} n - the number added to bankArray from user input
 * @returns 
 */

function addToBank(n) {
  bankArray.push(n);
  render();
return;
}

function SortOne() {
  // grab first value of bank array
  const number = bankArray.shift();
  if (number % 2 === 0) {
    evenArray.push(number);
  } else {
    oddArray.push(number);
  }
  render()
return;
}

function SortAll() {
// loop thru bankArray until empty with sort
  while (bankArray.length) {
    SortOne();
  };
  render();
return;
}



// === COMPONENTS ===

/** Form that allows user to add numbers to `bankArray` */
function AddToBankForm() {
  const $form = document.createElement("form");
  $form.classList.add("BankFormBar");
  $form.innerHTML = `
  <label>
  Add a number to the bank
  <input name="inputNum" type="number" min="0" />
  </label>
  <button type="submit" data-action="add">Add Number</button>
  <button type="submit" data-action="sort1">Sort One</button>
  <button type="submit" data-action="sortAll">Sort All</button>
  `;

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    // parses which button was clicked. **LOOK INTO THIS TONIGHT**
    const action = event.submitter.dataset.action;
    if (action === "add") {
      const data = new FormData($form);
      const inputNum = data.get("inputNum");
      if (inputNum === 0 || inputNum === "") return;
      addToBank(+inputNum)
    } else if (action === "sort1") {
        SortOne();
    } else if (action === "sortAll") {
        SortAll();
    } 
  });
  return $form;
}

function AddToBankRow(numbers) {
  const $bankRow = document.createElement("span");
  $bankRow.classList.add("BankBar", "bar");
  $bankRow.textContent = numbers;
  return $bankRow;  
}

function AddToOddRow(numbers) {
  const $oddRow = document.createElement("span");
  $oddRow.classList.add("OddBar", "bar");
  $oddRow.textContent = numbers;
  return $oddRow;
}

function AddToEvenRow(numbers) {
  const $evenRow = document.createElement("span");
  $evenRow.classList.add("EvenBar", "bar");
  $evenRow.textContent = numbers;
  return $evenRow;
}

// === RENDER ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <BankFormBar></BankFormBar>
    <h2>Bank</h2>
    <BankBar></BankBar>
    <h2>Odds</h2>
    <OddBar></OddBar>
    <h2>Even</h2>
    <EvenBar></EvenBar>
  `;
  $app.querySelector("BankFormBar").replaceWith(AddToBankForm());
  $app.querySelector("BankBar").replaceWith(AddToBankRow(bankArray));
  $app.querySelector("OddBar").replaceWith(AddToOddRow(oddArray));
  $app.querySelector("EvenBar").replaceWith(AddToEvenRow(evenArray));


}


render();