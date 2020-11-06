let x = document.getElementsByTagName("li");
console.log(x[0]);
console.log('------------');

function myFunction() {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].innerHTML);
    }
}
myFunction();