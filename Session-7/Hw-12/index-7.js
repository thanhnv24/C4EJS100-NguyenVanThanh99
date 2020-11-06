let arr = [];
let items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    arr.push(items[i].innerHTML);
}

console.log(arr);


let buttonAdd = document.getElementById('buttonAdd');
buttonAdd.addEventListener('click', (e) => {
    console.log('Add button clicked');
})