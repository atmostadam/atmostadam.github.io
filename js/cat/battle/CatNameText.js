import { Game } from "../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class CatNameText extends Drawing {
    constructor() {
        super();

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.x = cfg.BATTLE_CAT_HP_TEXT_XY;
    }

    load() {
        this.text = Game.getCat().name;
        this.y = Game.getCache("battleCatNameTextY");
        return this;
    }

    draw() {
        super.drawTextLoaded();
    }
}