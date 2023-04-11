const player = require('../src/player');

describe('testing player function', () => {
    test('randomAttack should call receiveAttack with valid arguments', () => {
        const mockGameboard = {
            receiveAttack: jest.fn(),
        };
        const randomAttack = player().randomAttack;
        randomAttack(mockGameboard)
        expect(mockGameboard.receiveAttack).toHaveBeenCalled();
        const [row, col] = mockGameboard.receiveAttack.mock.calls[0];
        expect(row).toBeGreaterThanOrEqual(0);
        expect(row).toBeLessThanOrEqual(9);
        expect(col).toBeGreaterThanOrEqual(0);
        expect(col).toBeLessThanOrEqual(9);
    });
})

