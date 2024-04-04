import { Character } from './Character';

describe('Character', () => {
    it('Construction', () => {
        const character = new Character();

        expect(character.health).toBe(1000);
        expect(character.isAlive).toBe(true);
    });

    describe('Attack', () => {
        it('On another character with default damage', () => {
            const attacker = new Character();
            const victim = new Character();

            attacker.attack(victim);

            expect(victim.health).toBe(925);
        });

        it('A Character cannot Deal Damage to itself', () => {
            const attacker = new Character();

            attacker.attack(attacker);

            expect(attacker.health).toBe(1000);
        });
    });

    describe('receiveDamage', () => {
        it('kills the victim when health reaches 0', () => {
            const victim = new Character();

            victim.receiveDamage(victim.health + 1);

            expect(victim.health).toBe(0);
            expect(victim.isAlive).toBe(false);
        });
    });

    describe('heal', () => {
        it('heal himself when alive', () => {
            const character = new Character(900);

            character.heal();

            expect(character.health).toBe(950);
        });

        it('heal cannot go above max health', () => {
            const character = new Character();

            character.heal();

            expect(character.health).toBe(1000);
        });

        it('heal exceed max health', () => {
            const character = new Character(980);

            character.heal();

            expect(character.health).toBe(1000);
        });

        it('heal exceed max health', () => {
            const character = new Character(1480, 6);

            character.heal();

            expect(character.health).toBe(1500);
        });        

        it('dead character cannot heal himself when is dead', () => {
            const character = new Character();

            kill(character);
            character.heal();

            expect(character.health).toBe(0);
        });
    });
});

function kill(character: Character) {
    character.receiveDamage(character.health + 1);
}
