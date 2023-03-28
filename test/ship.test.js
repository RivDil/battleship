const ship = require('../src/ship')

describe('ship function', () => {
    test('returns an object with the specified length', () => {
      const testShip = ship(3)
      expect(testShip.length).toBe(3)
    })
  
    test('hit method increments hits property', () => {
      const testShip = ship(3)
      testShip.hit()
      expect(testShip.hits).toBe(1)
    })
  
    test('isSunk method returns true when hits equals length', () => {
      const testShip = ship(3)
      testShip.hit()
      testShip.hit()
      testShip.hit()
      expect(testShip.isSunk()).toBe(true)
    })
  
    test('isSunk method returns false when hits is less than length', () => {
      const testShip = ship(3)
      testShip.hit()
      testShip.hit()
      expect(testShip.isSunk()).toBe(false)
    })
  })