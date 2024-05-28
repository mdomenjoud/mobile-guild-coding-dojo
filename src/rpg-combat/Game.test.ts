import { Game } from './Game';

describe('Game', () => {
    const game = new Game();

    // Rules reminder: default attack = 75, default heal= 50
    it.skip('simple scenario', () => {
         
        const goodPeople = 'Good people';
        const fellowship = 'Fellowship of the ring';
        const sauronArmy = 'Sauron Army';

        game.createCharacter(1, [goodPeople, fellowship], 'Frodo');
        game.createCharacter(6, [goodPeople, fellowship], 'Aragorn');
        game.createCharacter(10, [goodPeople, fellowship], 'Gandalf');
        game.createCharacter(7, [goodPeople, sauronArmy], 'Sarouman');
        game.createCharacter(1, [], 'Goblin');
        game.createCharacter(10, [sauronArmy], 'Nazgul');


        ['Frodo', 'Aragorn', 'Gandalf', 'Sarouman'].map((c) => game.joinFaction(c, goodPeople));
        ['Frodo', 'Aragorn', 'Gandalf'].map((c) => game.joinFaction(c, fellowship));
        ['Goblin', 'Nazgul'].map((c) => game.joinFaction(c, sauronArmy));

        performAttacks('Goblin', 'Frodo', 2);
        expect(game.characterStatus('Frodo').health).toBe(850);
        game.attack('Frodo','Goblin');
        expect(game.characterStatus('Goblin').health).toBe(925);

        game.attack('Frodo','Aragorn');// oups, but fortunately friendly fire isn't allowed
        expect(game.characterStatus('Aragorn').health).toBe(1500);
        
        game.heal('Frodo', 'Frodo');
        expect(game.characterStatus('Frodo').health).toBe(900); // Help I'm not good at self healing!
        game.heal('Gandalf','Frodo');
        game.heal('Gandalf','Frodo');
        expect(game.characterStatus('Frodo').health).toBe(1000); 
        
        performAttacks('Aragorn', 'Goblin', 10);
        expect(game.characterStatus('Goblin').isDead).toBe(true);

        game.attack('Sarouman','Gandalf'); // nope, must betray first
        expect(game.characterStatus('Gandalf').health).toBe(1500);
        
        game.leaveFaction('Sarouman', goodPeople);
        game.joinFaction('Sarouman', sauronArmy);
        game.attack('Sarouman','Gandalf');
        game.attack('Sarouman','Gandalf');
        game.attack('Sarouman','Gandalf');
        expect(game.characterStatus('Gandalf').health).toBe(1500 - 3*75);
        game.heal('Gandalf','Gandalf');
        game.heal('Gandalf','Gandalf');
        expect(game.characterStatus('Gandalf').health).toBe(1375);
        
        // Now let's kill you traitor!
        performAttacks('Gandalf', 'Sarouman', 20);
        expect(game.characterStatus('Sarouman').isDead).toBe(true);

    })

    function performAttacks(attacker: string, defender: string, times: number) {
        for (let i = 0; i < times; i++) {
            game.attack(attacker,defender);
        }
    }
});