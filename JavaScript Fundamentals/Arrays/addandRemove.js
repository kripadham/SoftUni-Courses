function addRemove(list) {
    let result = [];
    let count = 0;
    for (let i in list) {
        let command = list[i];
        count++
        if (command == 'add') {
            result.push(count);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));  
    }
}
addRemove(['add', 'add', 'add', 'add']);
addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);

