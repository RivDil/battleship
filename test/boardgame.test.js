const boardgame = require('./boardgame.test');

describe('boradgame function', () => {
    test('', () => {
      const testShip = ship(3, [0, 0])
      expect(testShip.length).toBe(3)
      expect(testShip.coordinates).toEqual([0, 0])
    })
})