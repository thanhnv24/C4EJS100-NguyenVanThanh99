function readArr() {
    let arr = [];
    let items = document.getElementsByTagName('td')
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i].innerHTML);
    }

    console.log(arr);

}
readArr();

function list() {
    let listItems = document.getElementById('listitem')
    console.log(listItems);
}
list();

function removeList() {
    let arr = [];
    let items = document.getElementsByTagName('td')
    let list = document.getElementById('listitem');
    for (let i = 0; i < items.length; i++) {
        arr.push(items[i].innerHTML);
    }

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        list.insertAdjacentHTML('afterbegin', `<li>${arr[i]}</li>`);
    }
    console.log(list);
}
removeList();