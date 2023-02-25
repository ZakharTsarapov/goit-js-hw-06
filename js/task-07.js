const refs = {
inputSizeControl: document.querySelector("#font-size-control"),
textSize: document.querySelector('#text'),
}



refs.inputSizeControl.addEventListener('input', onChangeSizeControl);

function onChangeSizeControl(event) {
    refs.textSize.style.fontSize = `${event.target.value}px`;
};

    


