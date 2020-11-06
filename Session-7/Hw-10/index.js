let name = prompt('Enter your name.');
let dream = prompt('Enter your dream.');

function wish(name, dream) {
    if (dream == undefined || name == undefined) {

    } else {
        alert(`Hello! ${name}`);
        alert(`${dream}`);
    }
}
wish(name, dream);