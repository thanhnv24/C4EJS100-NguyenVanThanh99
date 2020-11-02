let person = {
    name: 'Nam',
    age: 18,
    favs: ['Netfix', 'Cafe', 'Code'],
};

// console.log(person.favs[1]);
let fav = person.favs;
console.log(fav);
for (let i = 0; i < fav.length; i++) {
    console.log(fav[i]);
}
fav.push('Macbook');
console.log(fav);
console.log(person);