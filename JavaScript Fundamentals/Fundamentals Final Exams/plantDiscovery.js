function planDiscovery(input) {
    let n = Number(input.shift());

    let catalog = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');
        if (catalog.hasOwnProperty(plant) == false) {
            catalog[plant] = {
                rarity: Number(rarity),
                ratings: [],
                avRate: 0
            };
        } else {
            catalog[plant] = rarity;
        }
    }

    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }

    while (input[0] != 'Exhibition') {
        let [command, params] = input.shift().split(': ')
        action = actions[command];
        action(params);
    }

    let sorted = Object.entries(catalog).sort((a, b) => (b[1].rarity - a[1].rarity) || (b[1].avRate - a[1].avRate));
    console.log(`Plants for the exhibition:`);
    for (let line of sorted) {
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${line[1].avRate.toFixed(2)}`);
    }


    function rate(line) {
        let [name, rate] = line.split(' - ');
        rate = Number(rate);
        if (catalog.hasOwnProperty(name)) {
            let plant = catalog[name];
            plant.ratings.push(rate);
            let total = 0;
            for (num of plant.ratings) {
                total += num;
            }
            plant.avRate = total / plant.ratings.length;
        } else {
            console.log('error');
        }
    }

    function update(line) {
        let [name, rarity] = line.split(' - ');
        if (catalog.hasOwnProperty(name)) {
            catalog[name].rarity = Number(rarity);
        } else {
            console.log('error');
        }
    }

    function reset(line) {
        if (catalog.hasOwnProperty(line)) {
            catalog[line].ratings.length = 0;
            catalog[line].avRate = 0;
        } else {
            console.log('error');
        }
    }
}
planDiscovery([3, 'Arnoldii<->4', 'Woodii<->7', 'Welwitschia<->2', 'Rate: Woodii - 10', 'Rate: Welwitschia - 7', 'Rate: Arnoldii - 3', 'Rate: Woodii - 5', 'Update: Woodii - 5', 'Reset: Arndoldii', 'Exhibition'])
console.log('-----');
planDiscovery([2, 'Candelabra<->10', 'Oahu<->10', 'Rate: Oahu - 7', 'Rate: Candelabra - 6', 'Exhibition'])