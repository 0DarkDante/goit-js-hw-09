let form = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: ''
}

let savedData = localStorage.getItem("feedback-form-state");

if(savedData) {
    let parsedData = JSON.parse(savedData);

    formData = parsedData;

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', handleInput);

function handleInput (event) {
    formData[event.target.name] = event.target.value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields")
        return;
    }

    console.log(formData)
    localStorage.removeItem("feedback-form-state");

    formData = {
        email: '',
        message: ''
    };

    form.reset();
}