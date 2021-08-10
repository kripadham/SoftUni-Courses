function theLift(list) {
    //1 vagon max 4 people    //if it is full go to next;
    let people = list.shift();
    let wagons = list.shift().split(' ').map(Number);

    for (n in wagons) {
        let count = 0;
        for (i = 0; i < 4; i++) {
            if (people == 0) { break; }
            people--;
            count++;
        }
        if (wagons[n] > 0) {
            people += wagons[n];
            wagons[n] = Number(count);
        } else {
            wagons[n] = Number(count);
        }
        if (people == 0) { break; }
    }
    let chekPlace = wagons.filter(element => element < 4);
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (chekPlace !== undefined) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    } else {
        console.log(wagons.join(' '));
    };
}

// theLift(["15", "0 0 0 0 0"]);
console.log("----------");
theLift(["20", "0 2 0"]);