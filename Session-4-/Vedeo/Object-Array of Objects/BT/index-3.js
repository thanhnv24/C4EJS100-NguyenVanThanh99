let movie1 = {
    title: 'Attack on titans',
    year: 2013,
    rate: 8.8,
};
let movie2 = {
    title: 'My boss my hero',
    year: 2013,
    rate: 8.2,
};
let movie3 = {
    title: 'hunter',
    year: 2014,
    rate: 8.6
};
let movie4 = {
    title: 'Unabomber',
    year: 2014,
    rate: 8.1,
};
let arrFlim = [];
arrFlim.push(movie1);
arrFlim.push(movie2);
arrFlim.push(movie3);
arrFlim.push(movie4);
for (let i = 0; i < arrFlim.length; i++) {
    console.log('-------------------------------------------------------');
    console.log(arrFlim[i]);
}
let p = arrFlim[3].rate;
console.log(p);
p['rate'] = 8.8;
console.log(p);

// let arrMovie = {
//     movie1: {
//         title: 'Attack on titans',
//         year: 2013,
//         rate: 8.8,
//     },
//     movie2: {
//         title: 'My boss my hero',
//         year: 2013,
//         rate: 8.2,
//     },
//     movie3: {
//         title: 'hunter',
//         year: 2014,
//         rate: 8.6
//     },
//     movie4: {
//         title: 'Unabomber',
//         year: 2014,
//         rate: 8.1,
//     },
// }
// console.log(arrMovie);