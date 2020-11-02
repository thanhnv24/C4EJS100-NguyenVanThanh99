let script = [{
        name: 'HTML',
        Complete: 'false'
    },
    {
        name: 'CSS',
        Complete: 'false'
    },
    {
        name: 'Basic of JavaScript',
        Complete: 'false'
    },
    {
        name: 'Note Package Manager',
        Complete: 'false'
    },
    {
        name: 'git',
        Complete: 'false'
    },
];
//let command = ['New', 'Delete', 'Update', 'Complete'];
let word = prompt('Enter your command(New, Delete,Update,Complete)');


if (word == 'new' || word == 'New') {
    let key = prompt('Enter new task:');
    let newValue = {
        name: key,
        Complete: false,
    }
    script.push(newValue);
    for (let i = 0; i < script.length; i++) {
        console.log(`${i+1}: ${script[i].name}`);
        console.log(`Complete: ${script[i].Complete}`);
    }
} else if (word == 'update' || word == 'Update') {
    let index = prompt('Enter position');
    let title = prompt('Enter the title');
    if (index in script) {
        let newValue = {
            name: title,
            Complete: false,
        }
        script[index - 1] = newValue;
    }
    for (index = 0; index < script.length; index++) {
        console.log(`${index+1}: ${script[index].name}`);
        console.log(`Complete: ${script[index].Complete}`);
    }
} else if (word == 'complete' || word == 'Complete') {
    let index = prompt('Enter position');
    if (index in script) {
        script[index - 1].Complete = true;
    }
    for (index = 0; index < script.length; index++) {
        console.log(`${index+1}: ${script[index].name}`);
        console.log(`Complete: ${script[index].Complete}`);
    }
} else if (word == 'delete' || word == 'Delete') {
    let script1 = [{
            name: 'HTML',
            Complete: 'false'
        },
        {
            name: 'CSS',
            Complete: 'false'
        },
        {
            name: 'Basic of JavaScript',
            Complete: 'false'
        },
        {
            name: 'Package Manager',
            Complete: 'false'
        },
        {
            name: 'git',
            Complete: 'true'
        },
        {
            name: 'ReactJS',
            Complete: 'false'
        },
    ];
    let i = prompt('Enter position.');
    script1.splice(i - 1, 1);
    for (i = 0; i < script1.length; i++) {
        console.log(`${i+1}: ${script1[i].name}`);
        console.log(`Complete: ${script1[i].Complete}`);
    }
}