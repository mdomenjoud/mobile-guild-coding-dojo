import { Character } from './Character';

describe('Character', () => {
    const initialHelthLevel1 = 1000;
    const initialHelthLevel6 = 1500;

    it('Construction', () => {
        const character = new Character();

        expect(character.health).toBe(1000);
        expect(character.isAlive).toBe(true);
        expect(character.factions.size).toBe(0);
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

        it('reduces damages by 50% when attacker is 5 levels below the victim', () => {
            const attacker = new Character({ level: 1 });
            const victim = new Character({ level: 6 });

            attacker.attack(victim);

            expect(victim.health).toBe(initialHelthLevel6 - 38);
        });

        it('increases damages by 50% when attacker is 5 levels above the victim', () => {
            const attacker = new Character({ level: 6 });
            const victim = new Character({ level: 1 });

            attacker.attack(victim);

            expect(victim.health).toBe(initialHelthLevel1 - (75 + 38));
        });

        it('can not attack an ally', () => {
            const attacker = new Character();
            const ally = new Character({ health: 100 });

            attacker.joins('elf');
            ally.joins('elf');

            attacker.attack(ally);

            expect(ally.health).toBe(100);
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
            const character = new Character({ health: 900 });

            character.heal();

            expect(character.health).toBe(950);
        });

        it('heal cannot go above max health', () => {
            const character = new Character();

            character.heal();

            expect(character.health).toBe(1000);
        });

        it('heal exceed max health', () => {
            const character = new Character({ health: 980 });

            character.heal();

            expect(character.health).toBe(1000);
        });

        it('heal exceed max health at lvl 6', () => {
            const character = new Character({ health: 1480, level: 6 });

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

    describe('Join a faction', () => {
        it('belong to none, join one', () => {
            const character = new Character();

            character.joins('elf');

            expect(character.belongsTo('elf')).toBe(true);
        });

        it('belong to one, join an other one', () => {
            const character = new Character();

            character.joins('elf');
            character.joins('dwarf');

            expect(character.belongsTo('elf')).toBe(true);
            expect(character.belongsTo('dwarf')).toBe(true);
        });
    });

    describe('Leave a faction', () => {
        it('belong to one and leave', () => {
            const character = new Character();
            character.joins('elves');

            character.leaves('elves');

            expect(character.belongsTo('elves')).toBe(false);
        });
    });
});

function kill(character: Character) {
    character.receiveDamage(character.health + 1);
}
