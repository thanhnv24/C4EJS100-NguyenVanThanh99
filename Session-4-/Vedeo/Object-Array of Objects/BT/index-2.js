let movie1 = {
    title: 'Attack on titans',
    year: 2012,
    rate: 8.4
};
let movie2 = {
    title: 'Super Man',
    year: 2013,
    rate: 8.5
};
let movie3 = {
    title: 'Batman',
    year: 2014,
    rate: 8.6
};
let movieArr = [];
movieArr.push(movie1);
movieArr.push(movie2);
movieArr.push(movie3);
console.log(movieArr);


console.log(movieArr[0]);
console.log(movieArr[2]);
console.log('---------------------------------');

for (let i = 0; i < movieArr.length; i++) {
    console.log(movieArr[i]);
}