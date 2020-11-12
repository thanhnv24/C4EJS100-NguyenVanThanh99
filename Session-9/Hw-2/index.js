// const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// fetchPromise.then(connect => {
//     console.log('connected');
//     console.log(connect);
//     const data = connect.json();
//     console.log(data);
// });
async function fetchPromise() {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = await promise.json();
};
let a = fetchPromise();
console.log(a);