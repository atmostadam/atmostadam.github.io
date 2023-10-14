export class Cat {
    constructor(
        name,
        level,
        xp, // 10x level for enough XP to go to next level
        color,
        type,
        typeColor,
        currentHp,
        maxHp,
        minClawDamage,
        maxClawDamage,
        minBiteDamage,
        maxBiteDamage,
        minPounceDamage,
        maxPounceDamage) {
        this.name = name;
        this.level = level;
        this.xp = xp;
        this.color = color;
        this.type = type;
        this.typeColor = typeColor;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
        this.minClawDamage = minClawDamage;
        this.maxClawDamage = maxClawDamage;
        this.minBiteDamage = minBiteDamage;
        this.maxBiteDamage = maxBiteDamage;
        this.minPounceDamage = minPounceDamage;
        this.maxPounceDamage = maxPounceDamage;
    }

    /**
     * Lose a level on death.
     * 
     * Leveling Table
     * 1 - 0pts
     * 2 - 20pts
     * 3 - 30pts
     * 4 - 40pts
     */
}