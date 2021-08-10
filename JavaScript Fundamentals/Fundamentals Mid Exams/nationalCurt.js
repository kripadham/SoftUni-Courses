function nationalCurt(input) {
    //
    let efectivity = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let peopleCount = Number(input[3]);
    let time = 0;
    while (peopleCount > 0) {
        time++;
        if (time % 4 !== 0) {
            peopleCount-=efectivity;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
nationalCurt(["5",
    "6",
    "4",
    "20"])
console.log('---------');
nationalCurt(["1",
    "2",
    "3",
    "45"])
console.log('-------');
nationalCurt(["3",
    "2",
    "5",
    "40"])
