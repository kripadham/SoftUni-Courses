function computerStore(input) {
    const tax = 0.2;
    let total = 0;
    
    let value = input.shift();
    while (!isNaN(value)) {
        value = Number(value);
        if (value < 0) {
            console.log('Invalid price!');
        } else {
            total += value;
        }
        // console.log(value);
        value = input.shift();
    }
    
    let result = 0;
    if (value === 'special') {
        let discount = 0.90;//10%
        result = (total + total * tax) *discount;
    } else {
        result = (total + total * tax);
    }
    
    if (total <= 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${total.toFixed(2)}$`);
        console.log(`Taxes: ${(total * tax).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(result.toFixed(2))}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
console.log('-----------------------------------');
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]);
console.log('-------------------');
computerStore(['regular']);