console.log('Log all of 3 the properties of the movie object to the console using 2 different way');
//C1
let movie = {
    title: 'The dark night rises',
    year: 2012,
    rate: 8.4,
};
console.log(movie);
//C2
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);

console.log('Log an non-existent property of the movie');
console.log(movie['Director']);