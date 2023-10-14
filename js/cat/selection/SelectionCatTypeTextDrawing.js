import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class SelectionCatTypeTextDrawing extends Drawing {
    constructor(cat, x, y) {
        super();

        this.text = cat.type;
        this.color - cat.typeColor;
        this.font = cfg.SELECTION_SCREEN_FONT_22;
        this.x = x;
        this.y = y;
    }

    draw() {
        super.drawTextLoaded();
    }
}