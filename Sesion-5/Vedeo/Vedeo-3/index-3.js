const inventory = [

    {

        name: 'HP Envy 13aq',

        price: 21000,

        brand: 'HP',

        quantity: 5,

    },

    {

        name: 'Dell XPS 9370',

        price: 30000,

        brand: 'Dell',

        quantity: 1,

    },

    {

        name: 'Dell Inspiron 3567',

        price: 9300,

        brand: 'Dell',

        quantity: 12,

    },

    {

        name: 'Dell Latitude E5450',

        price: 8600,

        brand: 'Dell',

        quantity: 2,

    },

    {

        name: 'Asus Zenbook',

        brand: 'Asus',

        price: 20000,

        quantity: 4,

    },

    {

        name: 'HP Pavilion',

        brand: 'HP',

        price: 14000,

        quantity: 7,

    },
]
let inventoryByBrand = {};
let Asus = [];
let Dell = [];
let Hp = [];

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].brand == 'Asus') {
        Asus.push(inventory[i]);


    } else if (inventory[i].brand == 'Dell') {
        Dell.push(inventory[i]);

    } else if (inventory[i].brand == 'HP') {
        Hp.push(inventory[i]);

    }
}
// console.log(Asus);
// console.log(Dell);
// console.log(Hp);

inventoryByBrand.Asus = Asus;
inventoryByBrand.Dell = Dell;
inventoryByBrand.Hp = Hp;
console.log(inventoryByBrand);