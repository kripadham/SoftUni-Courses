function shopList(input) {
    let list = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');
        switch (command) {
            case 'Urgent': urgent(list, item); break;
            case 'Unnecessary': unnecessery(list, item); break;
            case 'Correct': correct(list, item, newItem); break;
            case 'Rearrange': rearrange(list, item); break;
        }
        line = input.shift();
    }
    console.log(list.join(', '));

    function urgent(list, item) {
        let isExist = list.includes(item);
        if (!isExist) {
            list.unshift(item);
        }
    }

    function unnecessery(list, item) {
        let isExist = list.includes(item);
        if (isExist) {
            let idx = list.indexOf(item)
            list.splice(idx, 1);
        }
    }

    function correct(list, oldItem, newItem) {
        let isExist = list.includes(oldItem);
        if (isExist) {
            let idx = list.indexOf(oldItem);
            list.splice(idx, 1, newItem)
        }
    }

    function rearrange(list, item) {
        let isExist = list.includes(item);
        if (isExist) {
            let idx = list.indexOf(item);
            let cutedItem = list.splice(idx, 1);
            list.push(item);
        }
    }
}



shopList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
console.log('----------');
shopList(["Milk!Pepper!Salt!Water!Banana!",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper ss",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
