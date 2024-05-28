export type CharacterStatus = {
    health: number;
    isDead: boolean;
};

/**
 * No strong constraint on Game'API: the proposal in Game.test.ts relies on a version where
 * createCharacter would return a Character object and then we call methods directly on these objects,
 * but any other implementation which allows to use the CLI is accepted.
*/
export class Game {

    createCharacter(level: number = 1, factions: string[] = [], name?: string): void {
        throw new Error('not implemented');
    }

    attack(attackerName: string, victimName: string): void {
        throw new Error('not implemented');
    }

    heal(healerName: string, healedName: string): void {
        throw new Error('not implemented');
    }

    joinFaction(characterName: string, factionName: string): void {
        throw new Error('not implemented');
    }
    leaveFaction(characterName: string, factionName: string): void {
        throw new Error('not implemented');
    }

    characterStatus(characterName: string): CharacterStatus {
        throw new Error('not implemented');
    }
}
