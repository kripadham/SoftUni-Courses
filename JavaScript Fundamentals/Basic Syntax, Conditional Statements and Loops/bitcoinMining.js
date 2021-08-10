function bitcoinMine(input) {

    const bitcoinRate = 11949.16;
    const goldRate = 67.51 //for 1g.  //every 3 day 30% off

    let sumLv = 0;
    let bitcoin = 0;
    let dayCount = 0;
    let firstDay = 0;
    let ischecked = true;

    for (let i = 0; i < input.length; i++) {
        let gold = input[i];
        dayCount++;
        if (dayCount % 3 == 0) {
            gold *= 0.70;
        }
        let goldPrice = goldRate * gold;
        sumLv += goldPrice;
        if (sumLv >= bitcoinRate) {
            let bitcoinNum = Math.floor(sumLv / bitcoinRate);
            bitcoin += bitcoinNum;
            sumLv -= bitcoinRate * bitcoinNum;
        }
        if (bitcoin > 0 && ischecked) {
            firstDay = dayCount;
            ischecked = false;
        }

    }

    console.log("Bought bitcoins: " + bitcoin);
    if (!ischecked) {
        console.log("Day of the first purchased bitcoin: " + firstDay);
    }
    console.log(`Left money: ${sumLv.toFixed(2)} lv.`)
}
bitcoinMine([3124.15, 504.212, 2511.124])