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
let arrMovie = [];
arrMovie.push(movie1);
arrMovie.push(movie2);
arrMovie.push(movie3);
arrMovie.push(movie4);
console.log(arrMovie);
for (let i = 0; i < arrMovie.length; i++) {
    console.log(arrMovie[i]);
    console.log('----------------------------------------');
}