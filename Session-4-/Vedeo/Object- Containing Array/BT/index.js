let movie = {
    title: 'Attack on titans',
    cast: ['A', 'B', 'C'],
    year: 2013,
    rate: 8.8,
};
console.log(movie);
let member = movie.cast;
console.log(member);
member.push('D');
console.log(member);
console.log(movie);