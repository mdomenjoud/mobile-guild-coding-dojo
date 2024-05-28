export default class MagicalObject {
    health: number;

    constructor(health: number) {
        this.health = health;
    }

    receivedDamage(damage: number) {
        this.health -= damage;
    }

    get isDestroyed() {
        return (this.health <= 0);
    }
}
