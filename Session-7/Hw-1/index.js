function beforebegin() {
    const container = document.getElementById('list');
    for (let i = 0; i < 3; i++) {
        container.insertAdjacentHTML('beforebegin', `<li>${i}</li>`);
    }
    container.insertAdjacentHTML('beforeEnd', '<li>Result Position: beforeBegin -> d</li>');
}
beforebegin();


function afterbegin() {
    const container = document.getElementById('list');

    for (let i = 0; i < 3; i++) {
        container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`);
    }
    container.insertAdjacentHTML('afterbegin', '<li>Result Position: afterbegin -> b</li>');
}
afterbegin();


function beforeend() {
    const container = document.getElementById('list');

    for (let i = 0; i < 3; i++) {
        container.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
    container.insertAdjacentHTML('beforeend', '<li>Result Position: beforeend -> c</li>');
}
beforeend();


function afterend() {
    const container = document.getElementById('list');

    for (let i = 0; i < 3; i++) {
        container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
    }
    container.insertAdjacentHTML('afterend', '<li>Result Position: afterend -> a</li>');
}
afterend();