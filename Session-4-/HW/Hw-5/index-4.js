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
    console.log(`#${i+1}: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
    console.log('----------------------------------------------------')
}