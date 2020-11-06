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