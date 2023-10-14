import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { Game } from "../Game.js";
import { requireImage } from "../util/ValidationFunctions.js";

export class TitleScreen extends Drawing {
    constructor() {
        super();
        this.image = this.getImage("title");
    }

    load() {
        this.ix = 0;
        this.iy = 0;
        this.w = cfg.MAX_CANVAS_WIDTH;
        this.h = cfg.MAX_CANVAS_HEIGHT;
        this.x = 0;
        this.y = 0;
        this.sw = Game.getWidth();
        this.sh = Game.getHeight();
        return this;
    }

    update() {
        if(this.delay) {
            return;
        }
        setTimeout(() => { if ("TitleScreen" == this.getCurrentScreenName()) { Game.nextScreen("RachelScreen"); } }, Game.getCache("introScreenDelay"));
        this.delay = true;
    }

    draw() {
        super.drawImageLoaded();
    }

    notify() {
        Game.nextScreen("RachelScreen");
    }
}