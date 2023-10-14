import { Game } from "./../Game.js";
import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class WorldCatPixelDrawing extends Drawing {
    constructor() {
        super();

        this.ix = 32;
        this.iy = 32;
        this.w = cfg.SELECTION_PIXEL_XY;
        this.h = cfg.SELECTION_PIXEL_XY;
        this.x = cfg.CANVAS_PIXEL_MIDDLE_X;
        this.y = cfg.CANVAS_PIXEL_MIDDLE_Y;
        this.sw = cfg.SELECTION_PIXEL_XY;
        this.sh = cfg.SELECTION_PIXEL_XY;
    }

    load() {
        this.image = super.getImage(Game.getCat().name.toLowerCase() + "Pixel");
        return this;
    }

    update(xSpeed, ySpeed, catX, catY) {
        if (this.x > catX && this.x < catX + 64 &&
            this.y > catY && this.y < catY + 64) {

        }

        this.x = this.x + (xSpeed * 3);
        this.y = this.y + (ySpeed * 3);
    }

    draw() {
        super.drawImageLoaded();
    }
}