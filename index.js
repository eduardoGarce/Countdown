const Count = document.querySelector('.number');
const title = document.querySelector('#title');
console.log(Count);
console.log(title);

let numCount = 5;
let time = 0;

for (let i = numCount; i >= 0; i--) {
    time = time + 1000;
    setTimeout(() => {
        console.log(i);
        if (i === 0) {
        Count.textContent = '¡Despegue!';
        Count.classList.add('alert');
        Count.classList.remove('number');
        title.style.display = 'none';
        } else {
            Count.textContent = i;
        }
    }, time);
}