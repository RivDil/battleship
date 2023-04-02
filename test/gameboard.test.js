const gameboard = require('../src/gameboard');

let newGame;

beforeEach(() => {
    newGame = gameboard(); // Initialize newGame before each test
  });

describe('boardgame functions', () => {
    test('Does the board game has 10 tiles', () => {
        let numElements = 0;
    for(let i=0; i<newGame.board.length;i++){
        for (let j=0; j<newGame.board[i].length;j++){
            numElements++
        }
    };
    const numArrays = newGame.board.length;
    expect(numArrays*numElements).toBe(1000) //10 rows * 10 elements in each row
    })

    test('Does the gameboard has 5 ships with different lengths from 5 to 1',()=>{
        const ships = newGame.ships;
        let totalShips = [];
        ships.forEach((i) => {
            Object.keys(i).forEach((j) => {
              if (j === "length") {
                totalShips.push(i[j]);
              }
            });
          });
        expect(totalShips).toStrictEqual([1,2,3,4,5])      
    })

    test('Does the validCoordinates function verify if there is enough space for the ship if it is horizontal',()=>{
      const newShip = {length: 10} // 10 elements inside the array
      expect(newGame.validCoordinates(newShip,0,1,true)).toBe(false); // col (1) + ship.length (10) should be false
    })
    test('Does the validCoordinates function verify if there is another ship on the col before putting the ship',()=>{
      newGame.board[7,3] = 'N';
      const newShip = {length:5}
      expect(newGame.validCoordinates(newShip,7,4,true)).toBe(false);
    })
})