import { Game } from "../Game.js";
import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

/**
 * Reptiles -> 10xp
 * Birds -> 5xp
 * Bugs -> 1pt
 * Small Mammals & Rodents - 7pts
 * Big mammals - 25pts
 * Other Cats - their level
 */

export class OpponentDecorator extends Drawing {
    constructor(opponent) {
        super();

        this.opponent = opponent;

        this.x = 0;
        this.y = 0;
    }

    load(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    drawWorld() {
        super.drawImageLoaded();
        var catX = Game.getCache("CatDecorator").x;
        var catY = Game.getCache("CatDecorator").y;

        if (catX - cfg.MAP_TILE_SIZE < this.x && this.x < catX + cfg.MAP_TILE_SIZE &&
            catY - cfg.MAP_TILE_SIZE < this.y && this.y < catY + cfg.MAP_TILE_SIZE) {
            Game.setCache("opponent", this.opponent);
            Game.setCache("OpponentDecorator", this);
            Game.nextScreen("BattleScreen");
        }
    }

    getPixelImage() {
        return Game.getCache(this.opponent.name.toLowerCase() + "Pixel");
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

    getOpponent() {
        return this.opponent;
    }


    getPortraitImage() {
        return Game.getCache(this.opponent.name.toLowerCase() + "Portrait");
    }

    drawPortrait() {
        super.drawImage(
            this.getPortraitImage(),
            0,
            0,
            cfg.PORTRAIT_WH,
            cfg.PORTRAIT_WH,
            Game.getCache("battleOpponentPortraitDrawingX"),
            cfg.BATTLE_PORTRAIT_Y,
            cfg.PORTRAIT_WH,
            cfg.PORTRAIT_WH);
    }

    primaryAttack() {
        var damage = this.getRandom(this.opponent.minPrimaryAttackDamage, this.opponent.maxPrimaryAttackDamage);
        Game.getCatDecorator().removeHp(damage);
        return damage;
    }

    removeHp(damage) {
        this.opponent.currentHp -= damage;
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}