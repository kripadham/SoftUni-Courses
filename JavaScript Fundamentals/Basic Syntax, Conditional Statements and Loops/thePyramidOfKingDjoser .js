function piramidCalc(size, stepHeight) {
    let count = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    for (let levelSize = size; levelSize > 0; levelSize -= 2) {

        count++;
        let base = 0;

        base = levelSize * levelSize;
        baseMinus = (levelSize * 4) - 4;
        inSide = base - baseMinus;
        outSide = base - inSide;
        inSide *= stepHeight;
        outSide *= stepHeight;

        if (levelSize == 1 || levelSize == 2 || levelSize == 0) {
            gold += inSide+outSide;
        } else {
            if (count % 5 == 0) {
                stone += inSide;
                lapis += outSide;
            } else {
                stone += inSide;
                marble += outSide;
            }
        }

        // console.log(`${levelSize}X${levelSize}: ${stone}:${marble}:${lapis}:${gold}`);
    }
    count *= stepHeight;
    console.log(`Stone required: ` + Math.ceil(stone));
    console.log(`Marble required: ` + Math.ceil(marble));
    console.log(`Lapis Lazuli required: ` + Math.ceil(lapis));
    console.log(`Gold required: ` + Math.ceil(gold));
    console.log(`Final pyramid height: ` + Math.floor(count));
}

console.log(`------------1-------------`);
piramidCalc(11, 1);
console.log(`------------2--------------`);
piramidCalc(11, 0.75);
console.log(`------------3-------------`);
piramidCalc(12, 1);
console.log(`------------4-------------`);
piramidCalc(23, 0.5);