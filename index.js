// === STATE ===
const bankArray = [];








// === COMPONENTS ===
function addToBankForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
  <label>
    Add a number to the bank
    <input name="addField" type="number" min="1" />
  </label>
  <button>Add number</button>
  <button>Sort 1</button>
  <button>Sort All<button>
  `;
}






// === RENDER ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <h2>Bank</h2>
    <h2>Odds</h2>
    <h2>Even</h2>
  `;
}


render();