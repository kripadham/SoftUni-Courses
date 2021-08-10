function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let isNoHealth = false;

    for (let line of input) {
        if (line == 'Retire') {
            break;
        }

        let [command, index, value1, value2] = line.split(' ');

        switch (command) {
            case 'Fire':
                fire(warShip, index, value1);
                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isNoHealth = true;
                    return;
                }
                break;
                case 'Defend':
                // console.log(pirateShip.join(' : '));
                defend(pirateShip, index, value1, value2);
                // console.log(`defend:${index},${value1},${value2} => ${pirateShip.join(' : ')} -> pirateShip`);
                if (pirateShip[index] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isNoHealth = true;
                    return;
                }
                break;
            case 'Repair':
                // console.log(pirateShip.join(' : '));
                repair(pirateShip, index, value1,maxHealth);
                // console.log(`Repair: ${index},${value1} => ${pirateShip.join(' : ')} -> pirateShip`);
                break;

            case 'Status':
                let status = pirateShip.filter(x => x < maxHealth * 0.20);
                console.log(`${status.length} sections need repair.`);
                // console.log(`${pirateShip.join(' : ')} -> pirateShip`);
                break;
        }
    }

    if (!isNoHealth) {
        let sumPirateShip = 0;
        let sumWarShip = 0;

        for (let n of pirateShip) {
            sumPirateShip += Number(n);
        }
        for (let n of warShip) {
            sumWarShip += Number(n);
        }
        console.log(`Pirate ship status: ${sumPirateShip}`);
        console.log(`Warship status: ${sumWarShip}`);
    }

    function fire(list, index, damage) {
        index = Number(index);
        damage = Number(damage);
        if (index >= 0 && index < list.length) {
            list[index] -= damage;
        }
    }

    function defend(list, startIndex, endIndex, damage) {
        if (startIndex <= endIndex && startIndex >= 0 && endIndex < list.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                list[i] -= Number(damage);
            }
        }
    }
    function repair(list, index, health, maxHealth) {
        if (index >= 0 && index < list.length) {
            list[index] += Number(health);
            if (list[index] > maxHealth) {
                list[index] = Number(maxHealth);
            }
        }
    }
}
// manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 150", "Status", "Retire"]);
console.log('--------');
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"])






    // function repair(list, index, health) {

    // }
    // function status(list, count) {

    // }