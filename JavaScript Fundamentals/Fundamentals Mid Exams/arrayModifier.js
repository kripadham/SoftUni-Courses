function arrayModifay(input) {

    let values = input.shift().split(' ').map(Number);
    let idx = 0;
    let commandString = input[idx];
    idx++
    while (commandString !== 'end') {
        let [command, v1, v2] = commandString.split(' ');
        v1 = Number(v1);
        v2 = Number(v2);
        let n1 = values[v1];
        let n2 = values[v2];
        switch (command) {
            case `swap`:
                values.splice(v1, 1, n2);
                values.splice(v2, 1, n1);
                break;
            case 'multiply':
                let result = n1 * n2;
                values.splice(v1, 1, result);
                break;
            case `decrease`:
                let rest = values.map(x => x - 1);
                values = rest;
                break;
        }
        commandString = input[idx];
        idx++
    }
    console.log(values.join(', '));;
}//end Function
arrayModifay([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log("--------------");
arrayModifay([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);