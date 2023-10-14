import { Game } from "../Game.js";
import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class CatDecorator extends Drawing {
    constructor(cat) {
        super();

        this.cat = cat;

        this.pixelIX = 32;
        this.pixelIY = 32;
        this.pixelW = 128;
        this.pixelH = 128;
        this.x = 0;
        this.y = 0;
        this.pixelSW = 128;
        this.pixelSH = 128;

        this.spriteChanges = 0;
        this.previousDirection = "N";

        this.createAndPopulateLevelingTable();
    }

    update(dirx, diry) {
        this.image = this.getPixelImage();

        this.w = 128;
        this.h = 128;
        this.sw = 128;
        this.sh = 128;
        this.ix = 32;

        if (this.spriteChanges > 3) {
            this.spriteChanges = 0;
        }

        if (dirx > 0) {
            this.iy = 192;
            if (this.previousDirection == "E") {
                this.ix = 32 + (160 * this.spriteChanges);
                this.spriteChanges++;
            } else {
                this.spriteChanges = 0;
                this.previousDirection = "E";
            }
        }
        if (dirx < 0) {
            this.iy = 512;
            if (this.previousDirection == "W") {
                this.ix = 32 + (160 * this.spriteChanges);
                this.spriteChanges++;
            } else {
                this.spriteChanges = 0;
                this.previousDirection = "W";
            }
        }
        if (diry > 0) {
            this.iy = 32;
            if (this.previousDirection == "N") {
                this.ix = 32 + (160 * this.spriteChanges);
                this.spriteChanges++;
            } else {
                this.spriteChanges = 0;
                this.previousDirection = "N";
            }
        }
        if (diry < 0) {
            this.iy = 352;
            if (this.previousDirection == "S") {
                this.ix = 32 + (160 * this.spriteChanges);
                this.spriteChanges++;
            } else {
                this.spriteChanges = 0;
                this.previousDirection = "S";
            }
        }

        this.x = this.x + (dirx * 6);
        this.y = this.y + (diry * 6);
    }

    drawWorld() {
        this.drawImageLoaded();
    }

    getCat() {
        return this.cat;
    }

    getPixelImage() {
        return Game.getCache(this.cat.name.toLowerCase() + "Pixel");
    }

    drawPixel() {
        super.drawImage(
            this.getPixelImage(),
            this.pixelIX,
            this.pixelIY,
            this.pixelW,
            this.pixelH,
            this.x,
            this.y,
            this.pixelSW,
            this.pixelSH);
    }

    getPortraitImage() {
        return Game.getCache(this.cat.name.toLowerCase() + "Portrait");
    }

    drawPortrait() {

    }

    removeHp(damage) {
        this.cat.currentHp -= damage;
    }

    clawAttack() {
        var damage = this.getRandom(this.cat.minClawDamage, this.cat.maxClawDamage);
        Game.getOpponentDecorator().removeHp(damage);
        return damage;
    }

    biteAttack() {
        var damage = this.getRandom(this.cat.minBiteDamage, this.cat.maxBiteDamage);
        Game.getOpponentDecorator().removeHp(damage);
        return damage;
    }

    pounceAttack() {
        var damage = this.getRandom(this.cat.minPounceDamage, this.cat.maxPounceDamage);
        Game.getOpponentDecorator().removeHp(damage);
        return damage;
    }

    getXp() {
        return this.cat.xp;
    }

    getXpToNextLevel() {
        return (this.cat.level + 1) * 10
    }

    levelUp() {
        switch (this.cat.level) {
            case 1:
                this.cat.maxHp += 5;
                break;
            case 2:
                this.cat.minClawDamage++;
                this.cat.minBiteDamage++;
                this.cat.minPounceDamage++;
                break;
            case 3:
                this.cat.maxHp += 5;
                break;
            case 4:
                this.cat.maxClawDamage++;
                this.cat.maxBiteDamage++;
                this.cat.maxPounceDamage++;
            case 5:
                this.cat.maxHp += 5;
                break;
            case 6:
                this.cat.minClawDamage++;
                this.cat.minBiteDamage++;
                this.cat.minPounceDamage++;
                break;
            case 7:
                this.cat.maxHp += 5;
                break;
            case 8:
                this.cat.maxClawDamage++;
                this.cat.maxBiteDamage++;
                this.cat.maxPounceDamage++;
            case 9:
                this.cat.maxHp += 5;
                break;
            case 10:
                this.cat.minClawDamage++;
                this.cat.minBiteDamage++;
                this.cat.minPounceDamage++;
                break;
            case 11:
                this.cat.maxHp += 5;
                break;
            case 12:
                this.cat.maxClawDamage++;
                this.cat.maxBiteDamage++;
                this.cat.maxPounceDamage++;
            case 13:
                this.cat.maxHp += 5;
                break;
            case 14:
                this.cat.minClawDamage++;
                this.cat.minBiteDamage++;
                this.cat.minPounceDamage++;
                break;
            case 15:
                this.cat.maxHp += 5;
                break;
            case 16:
                this.cat.maxClawDamage++;
                this.cat.maxBiteDamage++;
                this.cat.maxPounceDamage++;
            case 17:
                this.cat.maxHp += 5;
                break;
            case 18:
                this.cat.minClawDamage++;
                this.cat.minBiteDamage++;
                this.cat.minPounceDamage++;
                break;
            case 19:
                this.cat.maxHp += 5;
                break;
            case 20:
                this.cat.maxClawDamage++;
                this.cat.maxBiteDamage++;
                this.cat.maxPounceDamage++;
            default:
                this.cat.maxHp += 5;
        }
        this.cat.currentHp = this.cat.maxHp;
        this.cat.level++;
    }

    createAndPopulateLevelingTable() {
        this.levelingTable = new Map();
        this.levelingTable.set(1, []);
    }

}

