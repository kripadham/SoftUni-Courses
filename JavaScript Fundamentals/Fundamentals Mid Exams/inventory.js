function inventory(input) {
    let list = input.shift().split(', ');
    line = input.shift();
    while (line !== 'Craft!') {
        let command = line.split(' - ')[0];
        let item = line.split(' - ')[1];
        let isExist = list.includes(item);
        switch (command) {
            case 'Collect':
                if (!isExist) {
                    list.push(item);
                }
                break;
            case 'Drop':
                if (isExist) {
                    let idx = list.indexOf(item);
                    list.splice(idx, 1);
                }
                break;
            case 'Combine Items':
                let oldItem = item.split(':')[0];
                let newItem = item.split(':')[1];
                let idx = list.indexOf(oldItem);
                if (idx >= 0) {
                    list.splice(idx + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (isExist) {
                    let idx = list.indexOf(item);
                    let cutItem =list.splice(idx, 1);
                    list.push(cutItem);
                }
                break;
        }
        line = input.shift();
    }
    console.log(list.join(', '));
}
// inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
// console.log('-------------');
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)