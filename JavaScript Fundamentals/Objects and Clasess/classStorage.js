class Storage{
    constructor(capacity) {
        this.capacity = capacity;
        this.storage =[];
    }
    get totalCost() {
        return this.storage.reduce()
        
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }

    getProducts() {
        for (let result of this.storage) {
            console.log(JSON.stringify(result));
            // return JSON.stringify(result);
        }
    }

}
let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
// console.log(storage.Bread.name);
// console.log(storage.totalCost);
