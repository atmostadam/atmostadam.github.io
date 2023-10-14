import { Drawing } from "../api/Drawing.js";
import { Game } from "../Game.js";
import * as cfg from "../config/GameConfiguration.js";

export class OpponentPortraitDrawing extends Drawing {
    constructor() {
        super();
        this.ix = 0;
        this.iy = 0;
        this.w = cfg.PORTRAIT_WH;
        this.h = cfg.PORTRAIT_WH;
        this.y = cfg.BATTLE_PORTRAIT_Y;
        this.sw = cfg.PORTRAIT_WH;
        this.sh = cfg.PORTRAIT_WH;
    }

    load() {
        this.image = Game.getOpponentDecorator().getPortraitImage();
        this.x = Game.getCache("battleOpponentPortraitDrawingX");
        return this;
    }

    draw() {
        super.drawImageLoaded();
    }
}