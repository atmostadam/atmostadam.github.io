import { Game } from "../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class OpponentHpText extends Drawing {
    constructor() {
        super();

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.y = cfg.BATTLE_CAT_HP_TEXT_XY;
    }

    load() {
        this.x = Game.getCache("battleOpponentHpTextX");
        return this;
    }

    update() {
        this.text = Game.getCache("opponent").currentHp + "/" + Game.getCache("opponent").maxHp;
    }

    draw() {
        super.drawTextLoaded();
    }
}