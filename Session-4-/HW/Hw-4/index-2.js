let dectionary = {
    debug: 'The process of figuring out why your progrm has as certain error and how to fix it',
    done: 'When your task is complete the only thing you have to do is to wait for user to use it (no additional codes or action needed)',
    defect: 'The formal word for "error"',
    pm: 'the short version of Project Manager,the person in charge of the final result of a project',
    uiux: 'UI mean User Interface ,UX maen User Exoerince, are the procedd to define how your product looks and feels',
}
alert('Hi there, this is dev dictionary.');
while (true) {
    let key = prompt("Enter a key word");
    if (key == null || key == undefined) {
        alert('GoodBye');
        break;
    }
    if (key in dectionary) {
        alert(`${key}\n ${dectionary[key]}`);
        break;
    } else {
        let newValue = prompt(`we cound not find the word : ${key} : leave your explaination`);
        if (newValue == null || newValue == undefined || newValue == '') {
            alert('GoodBye');
            break;
        }
        dectionary[key] = newValue;
        key = prompt("Enter a key word");
        alert("Done");
        alert(`${key}\n ${dectionary[key]}`);
        if (newValue == null || newValue == undefined) {
            alert('GoodBye');
        }
        break;
    }
}