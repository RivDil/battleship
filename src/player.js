const gameboard = require('../src/gameboard');

function player(){
    const playerGame = gameboard();
    const cpuGame = gameboard();
    
    function randomAttack(player){
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        player.receiveAttack(row,col)
    }
    while(!playerGame.ships.every(i=>i.isSunk()) && !cpuGame.ships.every(i=>i.isSunk())){
        randomAttack(playerGame);
        randomAttack(cpuGame);
    }
    if (playerGame.ships.every(i=>i.isSunk())) {
        console.log("CPU wins!");
      } else {
        console.log("Player wins!");
      }

    return {randomAttack}
}

module.exports = player;