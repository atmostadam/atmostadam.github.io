import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { requireImage } from "../util/ValidationFunctions.js";
import { Game } from "../Game.js";

export class CatPortraitDrawing extends Drawing {
    constructor() {
        super();

        this.ix = 0;
        this.iy = 0;
        this.w = cfg.PORTRAIT_WH;
        this.h = cfg.PORTRAIT_WH;
        this.x = cfg.BATTLE_PORTRAIT_CAT_X;
        this.y = cfg.BATTLE_PORTRAIT_Y;
        this.sw = cfg.PORTRAIT_WH;
        this.sh = cfg.PORTRAIT_WH;
    }

    load() {
        this.image = Game.getCatDecorator().getPortraitImage();
        return this;
    }

    draw() {
        super.drawImageLoaded();
    }
}