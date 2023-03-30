const boardgame = require('../src/gameboard');

describe('boradgame functions', () => {
    test('Does the borad game has 10 tiles', () => {
      const testShip = ship(3, [0, 0])
      expect(testShip.length).toBe(3)
      expect(testShip.coordinates).toEqual([0, 0])
    })
})