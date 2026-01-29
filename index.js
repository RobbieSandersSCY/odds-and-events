// === STATE ===
let addToBank = 0;
let addToOdds = 0;

const bankArray = [];
const oddsArray = [];
const evenArray = [];







// === COMPONENTS ===

/** Form that allows user to add numbers to `bankArray` */
function AddToBankForm() {
  const $form = document.createElement("form");
  $form.classList.add("BankBar");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="addToBank" type="number" min="1" />
    </label>
    <button>Add number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;
  return $form;
}


function AddToOdds() {
  const


  
}



// === RENDER ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <BankBar></BankBar>
    <h2>Bank</h2>
    <h2>Odds</h2>
    <h2>Even</h2>
  `;
  $app.querySelector("BankBar").replaceWith(AddToBankForm());


}


render();