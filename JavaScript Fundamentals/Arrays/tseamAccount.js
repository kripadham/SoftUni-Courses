function tseamAcc(list) {
    let index = 0;

    let gameList = list[index].split(' ');
    index++;

    while (list[index] != "Play!") {

        let row = list[index].split(' ');
        let command = row[0];
        let game = row[1];
        let isInGameList = gameList.includes(game, 0);
        let indexOfGameList = gameList.indexOf(game);

        switch (command) {
            
            case "Expansion":
                let exGameArr = game.split('-');
                let exGameName = exGameArr[0];
                isInGameList = gameList.includes(exGameName, 0);

                if (isInGameList) {
                    indexOfGameList = gameList.indexOf(exGameName);
                    gameExt = exGameArr.join(':');
                    let exIndex = Number(indexOfGameList)+1;
                    gameList.splice(exIndex, 0, gameExt);
                }
                break;
            
            case "Install":
                if (!isInGameList) {
                    gameList.push(game);
                }
                break;

            case "Uninstall":
                if (isInGameList) {
                    gameList.splice(indexOfGameList, 1);
                }
                break;

            case "Update":
                if (isInGameList) {
                    gameList.splice(indexOfGameList, 1);
                    gameList.push(game);
                }
                break;
        }
        index++
    }//  while end

console.log(gameList.join(' '));
} //function end
tseamAcc(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)