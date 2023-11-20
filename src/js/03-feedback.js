/*
HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення
полів у локальне сховище, коли користувач щось друкує.

Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
message та їхніми поточними значеннями.
4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/

import throttle from 'lodash.throttle';

const LS_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(onInputData, 500));
form.addEventListener("submit", onFormSubmit);


let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};
const { email, message } = form.elements;
descFeedbackForm();

function onInputData() {
   dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
  console.log(dataForm);
}

function descFeedbackForm() {
  if (dataForm) {
    email.value = dataForm.email || "";
    message.value = dataForm.message || "";
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(LS_KEY);
  event.currentTarget.reset();
  dataForm = {};
}