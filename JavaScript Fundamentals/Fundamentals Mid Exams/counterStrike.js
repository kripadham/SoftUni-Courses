function counterStrike(input) {
    //записва всяка победа срещу връгът
    // 1. получаваме енергия
    //2 получаваме дистанция за достигане на връга до край на битката или до като свъши енергията.
    //енергията необходима zза достигане на връга е равна на растоянието което полуяваме energy=distance
    // wвсеки път когато достигнеш враг енергията се редуцира . 
    // if you have - win count;
    //if no enogth energy print. "Not enough energy! Game ends with {count} won battles and {energy} energy"
    //Every third won battle increases your energy with the value of your current count of won battles. 
    //end - print Won battles: {count}. Energy left: {energy}" 

    let energy = Number(input.shift());
    let battleCounter = 0;
    let isWin = true;
    for (let value of input) {
        if (value === 'End of battle') {
            break;
        }
        if (energy >= value) {
            energy -= value;
            battleCounter++;
            if (battleCounter % 3 == 0) {
                energy += battleCounter;
            }
        } else {
            isWin = false;
        }
    }
    if (isWin) {
        console.log(`Won battles: ${battleCounter}. Energy left: ${energy}`);
    } else {
        console.log(`Not enough energy! Game ends with ${battleCounter} won battles and ${energy} energy`);
    }
}

counterStrike([100, 10, 10, 10, 1, 2, 3, 73, 10]);
console.log('-----------');
counterStrike([200, 54, 14, 28, 13, 'End of battle']);