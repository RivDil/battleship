const ship = require("./ship")

function gameboard(){
    const board = Array(10).fill(0).map(() => Array(10).fill(0));
    const ships = [];
    const miss = [];
    for (let i=1;i<=5;i++){
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        let newShip = ship(i,[row,col])
        let isHorizontal = Math.random() < 0.5;
        while (!validCoordinates(newShip, row, col, isHorizontal)) {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            newShip = ship(i, [row, col]);
          }
        ships.push(newShip);
    }
    function validCoordinates(ship, row, col, isHorizontal) {
        if (isHorizontal) {
            if (col + ship.length > 10) {
                return false;
            }
            for (let i = 0; i < ship.length; i++) {
                if (board[row][col + i] !== 0) {
                    return false;
                }
                else{
                    board[row][col + i] = ship;
                }
            }
        }else{
            if (row + ship.length > 10) {
                return false;
            }
            for (let i = 0; i < ship.length; i++) {
                if (board[row + i][col] !== 0) {
                    return false;
                }
                else{
                    board[row + i][col] = ship;
                }
            }
        }
        return true
    }
    function receiveAttack(row,col){
        let ship = board[row][col];
        if (ship !== 0) {
            ship.hit();
            if(ships.every(ship.isSunk())){
                return 'You win'
            }else{return 'hit';}
        } else {
            miss.push([row,col])
            return 'miss';
        }
    }
    return {receiveAttack, board, ships}
}
const myGameBoard = gameboard();
 

module.exports = gameboard;