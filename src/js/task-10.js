function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  onCreateBtn: document.querySelector("[data-create]"),
  onDestroyBtn: document.querySelector("[data-destroy]"),
  
};
