import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";

export class CatRectangleDrawing extends Drawing {
    constructor() {
        super();

        this.size = cfg.BATTLE_RECTANGLE_SIZE;
        this.color = cfg.BATTLE_RECTANGLE_CAT_COLOR;
        this.x = cfg.BATTLE_PORTRAIT_CAT_X;
        this.y = cfg.BATTLE_RECTANGLE_Y - 3.5;
        this.w = cfg.BATTLE_RECTANGLE_SWSH;
        this.h = cfg.BATTLE_RECTANGLE_SWSH;
    }
    
    draw() {
        super.drawRectangleLoaded();
    }
}