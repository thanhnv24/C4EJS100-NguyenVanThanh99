let x = document.getElementsByClassName('singer');
for (let i = 0; i < x.length; i++) {
    console.log(x[i].innerHTML);
}
console.log('------------------------------------')
document.getElementsByClassName('singer')[3].remove();
for (let i = 0; i < x.length; i++) {
    console.log(x[i].innerHTML);
}