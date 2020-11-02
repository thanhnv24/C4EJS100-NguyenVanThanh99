let person = {
    name: 'Thanh',
    age: 18,
}
console.log(person['age']);
person['age'] = 19;
console.log(person['age']);
console.log(person);

person.age++;
console.log(person['age']);