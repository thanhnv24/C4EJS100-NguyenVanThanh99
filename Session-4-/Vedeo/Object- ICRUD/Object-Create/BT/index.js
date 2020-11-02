let movie = {
    title: 'Attack on titans',
    year: 2012,
    rate: 8.4
};
let check;

let key = prompt('What you want to know?: ');

if (key == null || key == undefined) {
    alert('GoodBye!');
} else {
    for (let item in movie) {
        if (item == key) {
            alert(movie[item]);
            break;
        } else {
            check = false;
        }
    }
    if (check == false) {
        alert(`${key} does not exist in our data`);
        let newItem = prompt('Enter the new data');
        movie[key] = newItem;
        console.log(movie);
    }
}