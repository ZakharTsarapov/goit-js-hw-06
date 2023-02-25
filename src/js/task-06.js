const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onValidFocusInput);

function onValidFocusInput(event) {
    event.currentTarget.classList.remove("valid", "invalid")
    if (event.currentTarget.value.length === parseInt(refs.input.dataset.length)) {
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.add("invalid");
    }
};