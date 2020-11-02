//BT-1
// let movie = {
//     title: 'Attack on titans',
//     year: 2012,
//     rate: 8.7
// };
// console.log(movie);
// movie['rate'] = 0.5;
// console.log(movie['rate']);
//BT-2

let key = prompt('What you want to update?');
let newItem = prompt('What is the update?');

let movie = {
    title: 'Attack on titans',
    year: 2012,
    rate: 8.4
};

for (let item in movie) {
    if (key == item) {
        movie[item] = newItem;
        break;
    }
}
console.log(movie);