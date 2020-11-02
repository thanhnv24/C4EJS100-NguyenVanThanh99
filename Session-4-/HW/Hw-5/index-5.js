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
products[0].Providers = ['Phu kien zero', 'Dien tuccc'];
products[1].Providers = ['Tgdd', 'Ddghn', 'VhStore'];
products[2].Providers = ['Tgdd'];
products[3].Providers = ['Tgdd'];
let provider = prompt('Enter provider');
//for 1 lay tat ca cac san pham cua mang product
// fo2 o vi tri i cua product lay tat ca thong tin Providers o vi tri j
for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].Providers.length; j++) {
        if (provider == products[i].Providers[j]) {
            console.log(`Name: ${products[i].name}`);
            console.log(`Brand: ${products[i].brand}`);
            console.log(`Price: ${products[i].price}`);
            console.log(`Color: ${products[i].color}`);
            console.log(`Category: ${products[i].category}`);
            console.log(`Providers: ${products[i].Providers}`);
            console.log('------------------------------------------------');
        }
    }
}