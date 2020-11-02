let product = {
        name: 'Xiaomi rice cooker',
        price: 1700,
        brand: 'Xiaomi',
        color: 'While',
    }
    //1
for (let item in product) {
    console.log(item);
}
//1.2
console.log('item just receives property of product');
for (let item in product) {
    console.log(item + ": " + product[item]);
}