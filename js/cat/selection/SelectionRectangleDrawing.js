import * as cfg from "../config/GameConfiguration.js";
import { Game } from "../Game.js";
import { Drawing } from "../api/Drawing.js";


export class SelectionRectangleDrawing extends Drawing {
    constructor(cat, w, h, x, y) {
        super();

        this.size = cfg.SELECTION_RECTANGLE_LINE_SIZE;
        this.color = cat.color;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    draw() {
        var ctx = Game.getCtx();

        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, Game.getCache("selectionRectangleWidth"),
            Game.getCache("selectionRectangleHeight"));

        super.drawRectangleLoaded();
    }
}
