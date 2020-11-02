let key = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let wordArr = [];

for (let i = 0; i < key.length; i++) {
    wordArr.push(key[i]);
}
console.log(wordArr);
//console.log(key);

for (let i = 0; i < wordArr.length; i++) {
    let count = 0;

    for (let x = 0; x < key.length; x++) {
        if (key[x] == wordArr[i]) {
            count++;
        }
    }
    console.log(wordArr[i] + ': ' + count);
}