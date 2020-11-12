function randomNumber(a, b) {
    let number = Math.floor(Math.random() * b + 1) + a - 10;
    return number;
}
const x = randomNumber(4, 16);

if (x < 4) {
    console.log(`${x} Failed: the number is smaller than 4`);
} else if (x > 16) {
    console.log(`${x}Failed: the number is bigger than 16`);
} else {
    console.log(`${x} Passed, bravo`);
}