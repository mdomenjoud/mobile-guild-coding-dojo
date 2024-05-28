import MagicalObject from './MagicalObject';

describe('Magical objects', () => {
    it('knows its health', () => {
        const magicalObject = new MagicalObject(3);
        expect(magicalObject.health).toBe(3);
    });
    it('destroys himself when its health goes to 0', () => {
        const magicalObject = new MagicalObject(3);

        magicalObject.receivedDamage(3);

        expect(magicalObject.isDestroyed).toBe(true);
    });
});
