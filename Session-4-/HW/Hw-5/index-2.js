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
for (let i = 0; i < products.length; i++) {
    console.log(`#${i+1}.${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
}

console.log('-----------------------------------------------');
let p = Number(prompt('Enter product position.'));
if (p in products) {
    console.log(`Name: ${products[p].name}`);
    console.log(`Brand: ${products[p].brand}`);
    console.log(`Price: ${products[p].price}`);
    console.log(`Color: ${products[p].color}`);
    console.log(`Category: ${products[p].category}`);
}