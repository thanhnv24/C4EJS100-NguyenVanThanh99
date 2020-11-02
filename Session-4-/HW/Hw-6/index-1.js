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
console.log('Hi there,  this is your learning task to font-end deverloper career.');
for (let i = 0; i < script.length; i++) {
    console.log(`${i+1}: ${script[i].name}`);
    console.log(`Complete: ${script[i].Complete}`);
}