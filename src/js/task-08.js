const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formRefs = event.currentTarget.elements;
    const email = formRefs.email.value;
    const password = formRefs.password.value;


    if (email === "" || password === "") {
        return alert("Внимание, Внимание !!! Все поля должны быть заполнены чертов Мазафака!!!")
    }

    const formData = {
        email,
        password,
    };

    console.log(formData)
    event.currentTarget.reset()
};
