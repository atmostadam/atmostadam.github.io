import { Hideable } from "../api/Hideable.js";
import { Game } from "../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class OpponentNameText extends Drawing {
    constructor() {
        super();

        this.color = cfg.COLOR_ORANGE;
        this.font = cfg.BATTLE_SCREEN_FONT;
    }

    load() {
        this.text = Game.getCache("opponent").name;
        this.x = Game.getCache("battleOpponentNameTextX");
        this.y = Game.getCache("battleCatNameTextY");
        return this;
    }

    draw() {
        super.drawTextLoaded();
    }
}