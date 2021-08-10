function memoryGame(input) {
    let elements = input.shift().split(' ');
    let count = 0;
    let line = input.shift();
    while (line !== 'end') {
        let [idx1, idx2] = line.split(' ').map(Number);
        // console.log(idx1, idx2);
        count++;

        if (idx1 == idx2 || !(idx1 >= 0 && idx1 < elements.length) || !(idx2 >= 0 && idx2 < elements.length)) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let addidx = elements.length / 2;
            elements.splice(addidx, 0, `-${count}a`, `-${count}a`)
        
        } else {

            if (elements[idx1] === elements[idx2]) {
                console.log(`Congrats! You have found matching elements - ${elements[idx1]}!`);

                if (idx1 > idx2) {
                    elements.splice(idx2, 1);
                    elements.splice(idx1 - 1, 1);
                } else if (idx1 < idx2) {
                    elements.splice(idx1, 1);
                    elements.splice(idx2 - 1, 1);
                }
            } else {
                console.log(`Try again!`);
            }
        }

        if (elements.length == 0) {
            console.log(`You have won in ${count} turns!`);
            break;
        }
        line = input.shift();
    }
    if (elements.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(elements.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);
console.log('-----------');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)
console.log('-----------');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)