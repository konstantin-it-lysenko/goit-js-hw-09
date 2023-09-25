import flatpickr from "flatpickr";

const inputEl = document.getElementById('datetime-picker');
const countdownBtn = document.querySelector('button[data-start]');
const $hours = document.querySelector('span[data-hours]');
const $minutes = document.querySelector('span[data-minutes]');
const $seconds = document.querySelector('span[data-seconds]');
let timerId = null;

countdownBtn.addEventListener('click', countdownBtnHandler);

flatpickr('#datetime-picker');

function countdownBtnHandler() {
    const inpValue = inputEl.value;
    const currentDate = new Date();
    const targetDate = new Date(inpValue)
    const diffDate = targetDate - currentDate

    if (diffDate <= 0) {
        clearInterval(timerId);
    }
    const hours = diffDate > 0 ? Math.floor(diffDate / 1000 / 60 / 60) % 24 : 0;
    const minutes = diffDate > 0 ? Math.floor(diffDate / 1000 / 60) % 60 : 0;
    const seconds = diffDate > 0 ? Math.floor(diffDate / 1000) % 60 : 0;

    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

    timerId = setInterval(countdownBtnHandler, 1000);
}



