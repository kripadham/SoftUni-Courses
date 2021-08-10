function secretChat(input) {
    //1. first line = hidden message,
    //2. strings with instrctions for operation 
    //instruction split by ":|:"
    //end reveal;
    let actions = {
        ChangeAll: changeAll,
        Reverse: reverse,
        InsertSpace: insertSpace
    }

    let message = input.shift();
    newMessage = '';
    while (input[0] !== 'Reveal') {
        let [command, v1, v2] = input.shift().split(':|:');
        action = actions[command];
        newMessage = action(message, v1, v2);
        message = newMessage;

    }
    console.log(`You have a new text message: ${message}`);

    function insertSpace(mesage, index) {
        index = Number(index);
        let left = mesage.substring(0, index);
        let right = mesage.substring(index);
        let newStr = left + ' ' + right;
        console.log(newStr);
        return newStr;
    }

    function reverse(mesage, sub) {
        let newStr;
        if (mesage.includes(sub)) {
            let idx = mesage.indexOf(sub);
            let newMsg = mesage.split('');
            newMsg.splice(idx, sub.length)
            newMsg = newMsg.join('');
            let subMessage = sub.split('').reverse().join('')
            newStr = newMsg + subMessage;
            console.log(newStr);
        } else {
            newStr = mesage;
            console.log('error');
        }
        return newStr
    }

    function changeAll(mesage, sub, replace) {
        let newStr = mesage.split(sub).join(replace);
        console.log(newStr);
        return newStr;
    }
}
secretChat(['heVVodar!gniV'
    , 'ChangeAll:|:V:|:l'
    , 'Reverse:|:!gnil'
    , 'InsertSpace:|:5'
    , 'Reveal'
]);
console.log('---------');
secretChat(['Hiware?uiy'
    , 'ChangeAll:|:i:|:o'
    , 'Reverse:|:?uoy'
    , 'Reverse:|:jd'
    , 'InsertSpace:|:3'
    , 'InsertSpace:|:7'
    , 'Reveal'
]);