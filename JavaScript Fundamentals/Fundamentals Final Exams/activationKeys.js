function activationKey(input) {
    let key = input.shift();
    while (input[0] !== 'Generate') {
        let [command, a, b, c] = input.shift().split('>>>');
        switch (command) {
            case 'Slice':
                key = cutPartOf(key, a, b);
                console.log(key);
                break;
            case 'Flip':
                key = flip(key, a, b, c);
                console.log(key);
                break;
            case 'Contains':
                console.log(contains(key, a))
                break;
        }
    }
    console.log(`Your activation key is: ${key}`);


    function contains(string, substring) {
        if (string.includes(substring)) {
            return `${string} contains ${substring}`;
        } else {
            return "Substring not found!";
        }
    }

    function flip(string, command, start, end) {

        start = Number(start);
        end = Number(end);
        if (string[start] !== undefined && string[end] !== undefined) {
            if (command == 'Upper') {
                let cutPart = string.substring(start, end)
                let newPart = cutPart.toUpperCase();
                let newString = string.replace(cutPart, newPart);
                return newString;
            } else if (command == 'Lower') {
                let cutPart = string.substring(start, end)
                let newPart = cutPart.toLowerCase();
                let newString = string.replace(cutPart, newPart);
                return newString;
            }
        }
    }

    function cutPartOf(string, start, end) {
        start = Number(start);
        end = Number(end);
        if (string[start] !== undefined && string[end] !== undefined) {
            let cutPart = string.substring(start, end);
            let newString = string.replace(cutPart, '');
            return newString;
        }
    }
}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>tuv",
    "Contains>>>deF",
    "Generate"])
