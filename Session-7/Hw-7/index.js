function button() {
    console.log('------------BT1---------------------------');
    const bt1 = document.getElementById('button1');
    const bt2 = document.getElementById('button2');

    bt1.addEventListener('click', (e) => {
        console.log(e.target);
    });


    bt2.addEventListener('click', (e) => {
        console.log(e.target);
    });
}
button();

function input() {
    console.log('------------BT2---------------------------');
    const keyWord = document.getElementById('input');

    keyWord.addEventListener('keydown', (e) => {
        console.log(e.key);
    })
}
input();