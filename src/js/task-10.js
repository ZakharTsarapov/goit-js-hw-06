function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  onCreateBtn: document.querySelector("[data-create]"),
  onDestroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector('[type="number"]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let size = 30;
  let boxArray = [];


  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    boxArray.push(`<div id="boxes-element" style="width:${size}px; height:${size}px; background-color:${color};"></div>`,
    );
    size += 10;
  } return boxArray.join('');
};

refs.onCreateBtn.addEventListener("click", onCreateBoxesBtn);
refs.onDestroyBtn.addEventListener("click", onDestroyBoxesBtn);

function onCreateBoxesBtn() {
  refs.boxes.insertAdjacentHTML("afterbegin", createBoxes(refs.input.value));
  refs.boxes.style.cssText = "display:flex; gap:20px; flex-wrap:wrap;";
}

function onDestroyBoxesBtn() {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
}