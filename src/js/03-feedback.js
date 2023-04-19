import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const formInput = document.querySelector(".feedback-form input");
const formMessage = document.querySelector(".feedback-form message");
const formData = {};


const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onBtnSubmit);

checkStorageContent();

function onInput(event) {
    formData[event.target.name] = event.target.value
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
};

function checkStorageContent() {
    const savedFeetbackForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const parseData = JSON.parse(savedFeetbackForm);

    if(parseData) {
        const { email ='', message ='' } = parseData;
        formInput.value = email;
        formMessage.value = message;
    }
} 

function onBtnSubmit(event) {
    event.preventDefault();

if (!form.email.value || !form.message.value || form.email.value.trim() === '' || form.message.value.trim() === '') {
    alert('Заповніть поля!')
    return;
}

console.log(formData);

event.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);
}