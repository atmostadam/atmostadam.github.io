import { Game } from "../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class CatHpText extends Drawing {
    constructor() {
        super();

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.x = cfg.BATTLE_CAT_HP_TEXT_XY;
        this.y = cfg.BATTLE_CAT_HP_TEXT_XY;
    }

    update() {
        this.text = Game.getCat().currentHp + "/" + Game.getCat().maxHp;
    }

    draw() {
        super.drawTextLoaded();
    }
}