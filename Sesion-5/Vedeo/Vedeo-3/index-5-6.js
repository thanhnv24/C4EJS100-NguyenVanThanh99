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
let detail = '';
let total = 0;
while (true) {
    let product = prompt('Which brand ?\n Dell\n Hp\n Asus');
    if (product == null || product == undefined) {
        alert('GoodBye');
        break;
    }
    if (product == 'dell' || product == 'Dell') {
        for (let i = 0; i < Dell.length; i++) {
            detail += Dell[i].name + '\n';
            total += Dell[i].quantity * Dell[i].price;
        }
        alert(`There are ${Dell.length} generration of ${product} inventory:\n${detail}\nWith total value: ${total}k`);
        break;
    } else if (product == 'hp' || product == 'HP') {
        for (let i = 0; i < Hp.length; i++) {
            detail += Hp[i].name + '\n';
            total += Hp[i].quantity * Hp[i].price;
        }
        alert(`There are ${Hp.length} generration of ${product} inventory:\n${detail}\nWith total value: ${total}k`);
        break;
    } else if (product == 'asus' || product == 'Asus') {
        for (let i = 0; i < Asus.length; i++) {
            detail += Asus[i].name + '\n';
            total += Asus[i].quantity * Asus[i].price;
        }
        alert(`There are ${Asus.length} generration of ${product} inventory:\n${detail}\nWith total value: ${total}k`);
        break;
    } else {
        alert('Sorry!\n We have not product.');
        break;
    }
}