const quote = document.getElementById('quote');
const author = document.getElementById('author');
const ranDom = document.getElementById('random');

function show() {
    random = data[Math.floor(Math.random() * data.length)];
    quote.innerHTML = random.quoteText;
    author.innerHTML = random.quoteAuthor;
};

show();
ranDom.addEventListener('click', show);