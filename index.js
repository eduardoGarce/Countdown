const count = document.querySelector('.number');
const title = document.querySelector('#title');
const btn = document.querySelector('#submit');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const backBtn = document.querySelector('#back');

const StartCountdown = (numCount) => {
    let time = 0;

    count.style.display = 'block';
    title.textContent = 'Iniciando';
    title.style.animation = 'titleAnimation 1s ease 2s infinite';
    form.style.display = 'none';

    for (let i = numCount; i >= 0; i--) {
        time = time + 1000;
        setTimeout(() => {
            if (i === 0) {
            count.textContent = '¡Despegue!';
            count.classList.add('alert');
            count.classList.remove('number');
            title.style.display = 'none';
            backBtn.style.display = 'block';
            } else {
                count.textContent = i;
            }
        }, time);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (input.value < 61 && input.value > 0) {
        StartCountdown(input.value);
        count.textContent = input.value;
        input.value = '';
    } else {
        input.value = '';
        input.parentElement.children[0].style.display = 'block';
    }
})

backBtn.addEventListener('click', () => {
    count.style.display = 'none';
    title.textContent = 'Ingrese el limite de segundos';
    title.style.animation = 'none';
    form.style.display = 'flex';
    count.classList.remove('alert');
    count.classList.add('number');
    title.style.display = 'block';
    backBtn.style.display = 'none';
})