let x = document.getElementsByClassName('singer');
console.log(x[1]);
console.log('-------------------------------------');

function print() {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].innerHTML);
    }
}
print();