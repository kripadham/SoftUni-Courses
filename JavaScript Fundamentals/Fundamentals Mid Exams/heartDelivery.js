function heartDeliver(input) {
    let houses = input.shift().split('@').map(Number);
    let line = input.shift();

    //if Cupid jumps more than houses.length start from index 0;

    let index = 0;
    while (line != 'Love!') {
        let jLength = Number(line.split(' ')[1])
        index += jLength;
        if (index >= houses.length) {
            index = 0;
        }
        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);//ako вече е =0;   
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
            console.log(`Place ${index} has Valentine's day.`);//ako stane =0;    
            }
        }
        line = input.shift();
    }
    let result = houses.filter(x => x > 0);
    console.log(`Cupid's last position was ${index}.`);
    if (result.length == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${result.length} places.`);
    }
    // console.log(houses.join(' '));
    // console.log(result.length);
}
heartDeliver(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
console.log('---------');
heartDeliver(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

