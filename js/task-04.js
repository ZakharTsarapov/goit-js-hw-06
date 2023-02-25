const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value'),
}

let value = 0;

function onIncrementBtnClick() {
    value += 1;
    refs.counter.textContent = value;
};

function onDecrementBtnClick() {
    value -= 1;
    refs.counter.textContent = value;
};


refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);