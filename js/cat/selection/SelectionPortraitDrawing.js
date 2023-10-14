import * as cfg from "../config/GameConfiguration.js";
import { Game } from "../Game.js";
import { Drawing } from "../api/Drawing.js";

export class SelectionPortraitDrawing extends Drawing {
    constructor(cat, x, y) {
        super();

        this.image = Game.getCache(cat.name.toLowerCase() + "Portrait");
        this.ix = 0;
        this.iy = 0;
        this.w = cfg.SELECTION_PORTRAIT_IMAGE_PX;
        this.h = cfg.SELECTION_PORTRAIT_IMAGE_PX;
        this.x = x;
        this.y = y;
        this.sw = cfg.SELECTION_PORTRAIT_IMAGE_SCALE_PX;
        this.sh = cfg.SELECTION_PORTRAIT_IMAGE_SCALE_PX;
    }

    draw() {
        super.drawImageLoaded();
    }
}