import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";
import { Game } from "./../Game.js";

export class LoginLoadRectangleDrawing extends Drawing {
    constructor() {
        super();

        this.size = 10;
        this.color = cfg.COLOR_PURPLE;
        this.w = Game.getWidth() - 200;
        this.h = 200;
        this.x = 100;
        this.y = 400;
    }

    draw() {
        super.drawFilledRectangle(cfg.COLOR_ORANGE, this.x, this.y, this.w, this.h);
        super.drawRectangleLoaded();
        super.drawText("Load Game", cfg.BATTLE_SCREEN_FONT, cfg.COLOR_BLACK, Game.getWidth() * .4, this.y + 120);
    }
}