function emoji(input) {
    let text = input.shift();
    let pattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let numPattern = /\d/g;

    //calculate treshold
    let nums = text.match(numPattern);
    let threshold = nums.map(Number)
        .reduce((a, b) => a * b);

    //calculate emoji 
    let count = 0;
    let emojies = [];
    let match = pattern.exec(text);
    while (match != null) {
        count++;
        let emoj = match[2];
        let sum = emoj.split('')
            .map((a) => a.charCodeAt(0))
            .reduce((a, b) => a + b);
        if (sum > threshold) {
            emojies.push(match[0]);
        }
        match = pattern.exec(text);
    }

    //print result
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    for (let emoj of emojies) {
        console.log(emoj);
    }
}
// emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
