let arr = [];
var name;
let items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    arr.push(items[i].innerHTML);
}

console.log(arr);


let inputItem = document.getElementById('inputItem');
inputItem.addEventListener('keyup', (e) => {
    name = e.target.value;
    console.log(name);
    arr.push(name);
});



inputItem.addEventListener('click', (e) => {
    console.log(name);
});
console.log(arr);