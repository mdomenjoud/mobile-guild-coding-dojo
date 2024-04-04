export class Character {
    public static readonly initialLevel: number = 1;
    public static readonly baseHeal: number = 50;
    private baseDamage = 75;
    public health: number;

    constructor(health?: number, public level:number = Character.initialLevel) {
        this.health = health ?? this.maxHealth;
    }

    attack(victim: Character) {
        if (victim === this) {
            return;
        }
        victim.receiveDamage(this.baseDamage);
    }

    receiveDamage(damages: number) {
        this.health = Math.max(this.health - damages, 0);
    }

    heal() {
        if (this.isDead) {
            return;
        }
        this.health = Math.min(this.health + Character.baseHeal, this.maxHealth);
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
