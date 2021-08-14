function makeDictionary(list) {
    let result = [];
    for (let p in list) {
        let token = JSON.parse(list[p]);
        let term = Object.keys(token).join('');
        let definition = token[term];
        
        let dictionary = {
            term,
            definition,
        }

        let isExist = false;
        for (let l of result) {
            if (l.term == term) {
                isExist = true;
                l.definition=definition
                break;
            } else {
                isExist = false;
            }
        }
        if (!isExist) {
            result.push(dictionary)
        }
    }
    let sortresult = result.sort((a, b) => a.term.localeCompare(b.term))
    for (let dict of sortresult) {
        console.log(`Term: ${dict.term} => Definition: ${dict.definition}`);
    }
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Boiler":"need water"}',
]
)