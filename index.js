// === STATE ===
const bankArray = [];
const oddsArray = [];
const evenArray = [];







// === COMPONENTS ===
function AddToBankBar() {
  const $form = document.createElement("form");
  $form.classList.add("BankBar");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="addField" type="number" min="1" />
    </label>
    <button>Add number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;
  return $form;
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
  $app.querySelector("BankBar").replaceWith(AddToBankBar());


}


render();