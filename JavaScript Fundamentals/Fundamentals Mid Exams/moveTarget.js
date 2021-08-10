function moveTargets(input) {
    let targets = input.shift().split(' ').map(Number);
    let line = input.shift();

    while (line !== 'End') {
        let command = line.split(' ')[0];
        let index = Number(line.split(' ')[1]);
        let value = Number(line.split(' ')[2]);
        switch (command) {
            case `Shoot`: shoot(targets, index, value); break;
            case `Add`: add(targets, index, value); break;
            case `Strike`: strike(targets, index, value); break;
        }
        line = input.shift();
    }
    console.log(targets.join('|'));

    function shoot(list, index, power) {
        if (index >= 0 && index < list.length) {
            if ((list[index] - power) <= 0) {
                list.splice(index, 1);
            } else {
                return list[index] -= power;
            }
        }
    }

    function add(list, index, value) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 0, value);
        } else {
            return console.log(`Invalid placement!`)
        }
    }

    function strike(list, index, radius) {
        let endIndex = index + radius;
        let startIndex = index - radius;
        let size = radius * 2 + 1;

        if (startIndex >= 0 && endIndex < list.length) {
            list.splice(startIndex, size);
        } else {
            return console.log(`Strike missed!`);
        }
    }
}//end Function
moveTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
console.log('--------');
moveTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);