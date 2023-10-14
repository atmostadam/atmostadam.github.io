import { Game } from "./../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

export class MomScreen extends Drawing {
    constructor() {
        super();
        this.image = this.getImage("mom");
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
        setTimeout(() => { if ("MomScreen" == this.getCurrentScreenName()) { Game.nextScreen("LoginScreen"); } }, Game.getCache("introScreenDelay"));
        this.delay = true;
    }

    draw() {
        super.drawImageLoaded();
    }

    notify() {
        Game.nextScreen("LoginScreen");
    }
}