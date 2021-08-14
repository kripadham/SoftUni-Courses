function storeProvision(current, product) {

    for (let i = 0; i < product.length; i += 2) {
        let name = product[i];
        let quantity = Number(product[i + 1]);
        let currentIdx = current.indexOf(name);
        if (currentIdx !== -1) {
            let sum = Number(current[currentIdx + 1]) + quantity;
            current.splice((currentIdx + 1), 1, sum);
        } else {
            current.push(name);
            current.push(quantity);
        }
    }
    for (let i = 0; i < current.length; i += 2) {
        let name = current[i];
        let quantity = Number(current[i + 1]);
        let list = {
            name,
            quantity,
        };
        console.log(list.name,'->',list.quantity);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);