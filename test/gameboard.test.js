const gameboard = require('../src/gameboard');
const ship = require('../src/ship');
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
      const testShip = {length: 10} // 10 elements inside the array
      expect(newGame.validCoordinates(testShip,0,1,true)).toBe(false); // col (1) + ship.length (10) should be false
    })
    test('Does the validCoordinates function verify if there is another ship on the col before putting the ship',()=>{
      newGame.board[7][3] = 'N';
      const testShip = {length:5}
      expect(newGame.validCoordinates(testShip,7,2,true)).toStrictEqual(false);
    })
    test('Does the validCoordinates function verify if there is enough space for the ship if it is vertical',()=>{
      const testShip = {length: 10} // 10 elements inside the array
      expect(newGame.validCoordinates(testShip,1,0,false)).toBe(false); // row (1) + ship.length (10) should be false
    })
    test('Does the validCoordinates function verify if there is another ship on the row before putting the ship',()=>{
      newGame.board[7][3] = 'N';
      const testShip = {length:5}
      expect(newGame.validCoordinates(testShip,6,3,false)).toBe(false);
    })
    test('receiveAttack returns "hit" if a ship is hit and updates hits count', () => {
      const testShip = ship(1, [0, 0]);
      newGame.board[0][0] = testShip;
      expect(newGame.receiveAttack(0, 0)).toBe('hit');
      expect(testShip.hits).toBe(1);
    });
  
    test('receiveAttack returns "miss" if no ship is hit', () => {
      newGame.board[0][0] = 0;
      expect(newGame.receiveAttack(0, 0)).toBe('miss');
    });
  
    test('receiveAttack updates missed attacks array', () => {
      newGame.receiveAttack(0, 0);
      expect(newGame.miss).toEqual([[0, 0]]);
    });
  
    test('receiveAttack returns "You win" if all ships are sunk', () => {
      newGame.ships.forEach((testShip, index) => {
        newGame.board[index][0] = testShip;
        testShip.length = 1;
        testShip.hits = 0;
      });
  
      newGame.ships.forEach((_, index) => {
        if (index < newGame.ships.length - 1) {
          expect(newGame.receiveAttack(index, 0)).toBe('hit');
        } else {
          expect(newGame.receiveAttack(index, 0)).toBe('You win');
        }
      });
    });
})
