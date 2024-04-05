const dicrease = document.querySelector('#decrease');

const increase = document.querySelector('#increase');

const count = document.querySelector('#value');
const changeBy = document.querySelector('.changeby');

const reset = document.querySelector('#reset');

increase.addEventListener('click', () => {
    const countValue  = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue + changeByValue;
});

dicrease.addEventListener('click', () => {
    const countValue  = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue - changeByValue;
});

reset.addEventListener('click', () => {
    count.innerText = 0;
});