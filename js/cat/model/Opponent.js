export class Opponent {
    constructor(name, color, currentHp, maxHp, minPrimaryAttackDamage, maxPrimaryAttackDamage) {
        this.name = name;
        this.color = color;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
        this.minPrimaryAttackDamage = minPrimaryAttackDamage;
        this.maxPrimaryAttackDamage = maxPrimaryAttackDamage;
    }
}