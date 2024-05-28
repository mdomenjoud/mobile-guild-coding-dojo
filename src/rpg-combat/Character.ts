import MagicalObject from "./MagicalObject";

export type CharacterProps = {
    health: number;
    level: number;
    factions: string[];
};

export class Character {
    public static readonly initialLevel: number = 1;
    public static readonly baseHeal: number = 50;
    private baseDamage = 75;

    public level: number;
    public health: number;
    public factions: Set<string>;
    public magicalObject?: MagicalObject;

    constructor(props: Partial<CharacterProps> = {}) {
        this.level = props.level ?? Character.initialLevel;
        this.health = props.health ?? this.maxHealth;
        this.factions = new Set(props.factions);
    }

    attack(victim: Character) {
        if (victim === this) {
            return;
        }

        if (this.isAlliedWith(victim)) {
            return;
        }

        const victimDamage = Math.round(
            this.baseDamage * this.attackFactor(this.level, victim.level),
        );
        victim.receiveDamage(victimDamage);
    }

    private isAlliedWith(character: Character): boolean {
        return Array.from(this.factions).some((faction) => character.belongsTo(faction));
    }

    private attackFactor(attackedLevel: number, victimeLevel: number) {
        if (victimeLevel >= attackedLevel + 5) {
            return 0.5;
        } else if (victimeLevel <= attackedLevel - 5) {
            return 1.5;
        }
        return 1;
    }

    receiveDamage(damages: number) {
        this.health = Math.max(this.health - damages, 0);
    }

    heal(ally?: Character) {
        if (this.isDead) {
            return;
        }

        if(ally && !(ally instanceof Character)){
            return;
        }

        if((ally && (!this.isAlliedWith(ally) || ally.isDead))){
            return;
        }

        const healedCharacter = ally ?? this;

        const healingAmount = this.magicalObject ? this.magicalObject.health : Character.baseHeal;
        healedCharacter.recoverHealth(healingAmount);
    }

    private recoverHealth(amount: number) {
        this.health = Math.min(this.health + amount, this.maxHealth);
    }

    joins(faction: string) {
        this.factions.add(faction);
    }

    leaves(faction: string) {
        this.factions.delete(faction);
    }

    belongsTo(faction: string): boolean {
        return this.factions.has(faction);
    }

    equip(magicalObject: MagicalObject){
        this.magicalObject = magicalObject;
    }

    private get maxHealth() {
        return this.level < 6 ? 1000 : 1500;
    }

    get isAlive(): boolean {
        return this.health !== 0;
    }

    get isDead(): boolean {
        return !this.isAlive;
    }
}
