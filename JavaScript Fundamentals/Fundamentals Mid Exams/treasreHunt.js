function treasureHunt(input) {
    let treasures = input.shift().split('|');
    let string = input.shift()

    while (string !== 'Yohoho!') {
        let line = string.split(' ');
        let command = line.shift();
        let idx = Number(line[0]);

        switch (command) {
            case 'Loot':
                for (let i = 0; i < line.length; i++) {
                    let isExist = treasures.includes(line[i]);
                    if (!isExist) {
                        treasures.unshift(line[i]);
                    }
                }
                break;

            case 'Drop':
                if (idx >= 0 && idx < treasures.length) {
                    let element = treasures.splice(idx, 1).join('');
                    treasures.push(element);
                }
                if (idx > treasures.length) {
                    treasures.length = 0;
                }
                break;

            case 'Steal':
                let steal = [];
                if (idx > 0 && idx < treasures.length) {
                    steal = treasures.slice(-idx);
                    console.log(steal.join(', '));
                    for (let i = 0; i < idx; i++) {
                        treasures.pop();
                    }
                }
                break;
        }
        string = input.shift();
    }

    if (treasures.length == 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sum = 0;
        for (element of treasures) {
            sum += element.length;
        }
        sum /= treasures.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
    }
}
// treasureHunt(['Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!']);
// console.log('--------------');
treasureHunt(['Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6', 'Yohoho!']);