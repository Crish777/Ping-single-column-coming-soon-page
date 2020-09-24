// Objeto con las propiedades del formulario

let propForm = {
    emailInput: document.querySelector('#email'),
    label: document.querySelector('.container .form form label'),
    valor: null,
    regularExpression: null,
    validateInput: false
}

// Objeto con los métodos del formulario

let metForm = {
    startForm: () => {
        propForm.emailInput.addEventListener('blur', metForm.requiredInput);
    },
    requiredInput: (input) => {

        propForm.regularExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        propForm.valor = input.target.value;
        if (propForm.valor == '') {

            propForm.emailInput.style.border = '.01rem solid var(--secondary-d)';
            propForm.label.style.display = 'block';
            propForm.validateInput = false;
        } else {
            if (!propForm.regularExpression.test(propForm.valor)) {
                propForm.emailInput.style.border = '.01rem solid var(--secondary-d)';
                propForm.label.innerHTML = 'Please provide a valid email address';
                propForm.label.style.display = 'block';
                propForm.validateInput = false;
            } else {
                propForm.emailInput.style.border = '.01rem solid hsla(223, 87%, 63%, 0.404)';
                propForm.label.style.display = 'none';
                propForm.validateInput = true;
            }
        }
    },
    validateForm: () => {

        if (!propForm.validateInput) {
            propForm.emailInput.style.border = '.01rem solid var(--secondary-d)';
            propForm.label.innerHTML = 'Please provide a valid email address. <br> For example: (email@domain.com)';
            propForm.label.style.display = 'block';
            return false;
        } else {
            return true;
        }
    }
}

metForm.startForm();