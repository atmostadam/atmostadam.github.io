import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";
import { Game } from "./../Game.js";

export class LoginNewCatRectangleDrawing extends Drawing {
    constructor() {
        super();

        this.size = 10;
        this.color = cfg.COLOR_ORANGE;
        this.w = Game.getWidth() - 200;
        this.h = 200;
        this.x = 100;
        this.y = 100;
    }

    draw() {
        super.drawFilledRectangle(cfg.COLOR_PURPLE, this.x, this.y, this.w, this.h);
        super.drawRectangleLoaded();
        super.drawText("New Game", cfg.BATTLE_SCREEN_FONT, cfg.COLOR_BLACK, Game.getWidth() * .4, this.y + 115);
    }
}