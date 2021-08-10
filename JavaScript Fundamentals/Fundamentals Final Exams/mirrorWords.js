function mirrorWords(input) {
    //extract hidden words
    let text = input[0];
    // let pattern = /([@#])(?<name>[A-Za-z0-9]{2,})\1/g;
    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    match = pattern.exec(text);
    let count = 0;
    let result = [];
    while (match != null) {
        count++;
        let first = match[2];
        let second = match[3]
        let secondRev = match[3].split('').reverse().join('');
        if (first === secondRev) {
            result.push(`${first} <=> ${second}`);
        }
        match = pattern.exec(text);
    }
    if (count != 0) {
        console.log(`${count} word pairs found!`);
        if (result.length > 0) {
            console.log(`The mirror words are:`);
            console.log(result.join(', '));
        } else {
            console.log(`No mirror words!`);
        }
    } else {
        console.log("No word pairs found!");
        console.log(`No mirror words!`);
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('----');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('----');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);