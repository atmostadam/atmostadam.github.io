import { Drawing } from "../api/Drawing.js";
import * as cfg from "../config/GameConfiguration.js";

export class GenericGrassTile extends Drawing {
    constructor(x, y) {
        super();

        this.id = 1;

        this.ix = 16;
        this.iy = 64;
        this.w = 16;
        this.h = 16;
        this.x = x;
        this.y = y;
        this.sw = cfg.MAP_TILE_SIZE;
        this.sh = cfg.MAP_TILE_SIZE;

        this.image = super.getImage("TilesetField");
    }

    draw() {
        super.drawImageLoaded();
    }
}