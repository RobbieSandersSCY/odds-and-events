// === STATE ===
let inputNum = 0;
let addToOdds = 0;

const bankArray = [];
const oddsArray = [];
const evenArray = [];

/**
 * Adds n to bankArray
 * @param {number} n - the number added to bankArray from user input
 * @returns 
 */

function addToBank(n) {
  bankArray.push(n);
  console.log(bankArray);
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
  <button>Add number</button>
  <button>Sort 1</button>
  <button>Sort All</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const data = new FormData($form);
    const inputNum = data.get("inputNum");
    addToBank(inputNum)
    
  });
  return $form;
}


function AddToBankRow(numbers) {
  const $bankRow = document.createElement("span");
  $bankRow.classList.add("BankBar");
  $bankRow.textContent = numbers;
  return $bankRow;  
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
    <h2>Even</h2>
  `;
  $app.querySelector("BankFormBar").replaceWith(AddToBankForm());
  $app.querySelector("BankBar").replaceWith(AddToBankRow(bankArray));


}


render();