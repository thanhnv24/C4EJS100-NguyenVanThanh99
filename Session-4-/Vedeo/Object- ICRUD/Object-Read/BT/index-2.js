let list = ['Sport', 'Lol', 'Bts'];
let newItem = prompt('Enter on thing you like.');
list.push(newItem);
console.log(list);

function updateMovie() {
    let list1 = ['Sport', 'Lol', 'Bts'];
    for (let i = 0; i < list1.length; i++) {
        list1[i] = list1[i].toLocaleUpperCase();
    }
    console.log(list1);
};
updateMovie();