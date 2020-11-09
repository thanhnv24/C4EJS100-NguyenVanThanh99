/* <button id="button1">+</button>
<span id="value"></span>
<button id="button2">-</button>
<script src="index.js"></script> */

const value = document.getElementById('value');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let count = 0;


value.innerHTML = count;

button1.addEventListener('click', (e) => {
    count++;
    value.innerHTML = count;
});

button2.addEventListener('click', (e) => {
    count--;
    value.innerHTML = count;
})