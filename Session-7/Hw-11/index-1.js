//5-6-8
const btn = document.getElementById("upper");
const inp = document.getElementById("inputName");
let result = document.getElementById("text");
var name;
inp.addEventListener('keyup', (e) => {
    name = e.target.value;
    console.log('Upper it !!! Just clicked');
    console.log("User's name : " + name);
});

btn.addEventListener('click', (e) => {
    //console.log(e.target);
    name = name.toUpperCase();
    result.innerHTML = name;
    console.log("User's name : " + name);
});


// upper.addEventListener("click", () => {
//     let userInput =
//         console.log('Upper it !!! Just clicked');
//     console.log("User's name : " + userInput);
// });