let products = [{
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'while',
        category: 'charger',
    },
    {
        name: 'VSmart active 1',
        brand: 'Vsmart',
        price: 5438,
        color: 'black',
        category: 'phone',
    },
    {
        name: 'Iphone X',
        brand: 'Apple',
        price: 21490,
        color: 'gray',
        category: 'phone',
    },
    {
        name: 'SamSung Galaxy A9',
        brand: 'SamSung',
        price: 8490,
        color: 'Blue',
        category: 'phone',
    },
];
let key = prompt('Enter your category.');
let cuont = 0;
for (let i = 0; i < products.length; i++) {
    if (key == products[i].category) {
        console.log(`Name: ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
        console.log('------------------------------------------');
    }
}