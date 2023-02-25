function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  bodyColor: document.querySelector('body'),
};

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  let color = getRandomHexColor();
  refs.spanColor.textContent = color;
  refs.bodyColor.style.backgroundColor = color;
};