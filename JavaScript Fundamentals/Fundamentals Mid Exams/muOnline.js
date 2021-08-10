function muOnline(string) {
    const startHealth = 100;
    let bitcoins = 0;
    let health = startHealth;
    let isKilled = false;
    let bestRoom = 0;
    // dungeons rooms
    let rooms = string.split('|')
    for (const room of rooms) {
        bestRoom++;
        let [command, num] = room.split(' ');
        num = Number(num);
        if (command === 'potion') {
            let amount = 0;
            if (health + num >= startHealth) {
                amount = startHealth - health;
                health = startHealth;
            } else {
                amount = num;
                health += num;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            if ((health - num) <= 0) {
                console.log(`You died! Killed by ${command}.`);
                isKilled = true;
                break;
            } else {
                health -= num
                console.log(`You slayed ${command}.`);
            }
        }
    }
    if (isKilled) {
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log("You've made it!\n", `Bitcoins: ${bitcoins}\n`, `Health: ${health}`);
    }
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
console.log('----------');
// muOnline(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`)
// muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
