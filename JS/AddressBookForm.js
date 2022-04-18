
/* UC 4 */
window.addEventListener('DOMContentLoaded', (event) => {

    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#name').value.split(" ");
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).firstName = names[0];
            (new Contact()).lastName = names[1];
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const addressElement = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    addressElement.addEventListener('input', function () {
        let address = document.querySelector('#address').value;
        try {
            (new Contact()).address = address;
            addressError.textContent = ""
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function () {
        let phone = document.querySelector('#phone').value;
        try {
            (new Contact()).phone = phone;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }

    });
})

