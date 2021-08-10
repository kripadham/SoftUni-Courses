function login(input) {

    let userName = input[0];

    for (let i = 1; i < input.length; i++) {
        let str = input[i];
        sumWord = "";
        for (let w = str.length - 1; w >= 0; w--) {
            let word = str[w];
            sumWord += word;
        }
        
        if (i !== input.length - 1) {
            if (userName !== sumWord) {
                console.log(`Incorrect password. Try again.`);
            } else {
                console.log(`User ${userName} logged in.`);
                break;
            }
        } else {
            if (userName !== sumWord) {
                console.log(`User ${userName} blocked!`);
            } else {
                console.log(`User ${userName} logged in.`);
                break;
            }
        }
        // console.log(`${i}:${str}:${sumWord}`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);