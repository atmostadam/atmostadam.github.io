import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";
import { Game } from "./../Game.js";

export class LoginDeleteRectangleDrawing extends Drawing {
    constructor() {
        super();

        this.size = 10;
        this.color = cfg.COLOR_ORANGE;
        this.w = Game.getWidth() - 200;
        this.h = 200;
        this.x = 100;
        this.y = 700;
    }

    draw() {
        super.drawFilledRectangle(cfg.COLOR_RED, this.x, this.y, this.w, this.h);
        super.drawRectangleLoaded();
        super.drawText("ERASE ALL SAVE DATA", cfg.BATTLE_SCREEN_FONT, cfg.COLOR_WHITE, Game.getWidth() * .2, this.y + 130);
    }
}