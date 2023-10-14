import { Drawing } from "./../../common/base/Drawing.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { Log } from "./../../common/logger/Log.js";


export class Footer extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.color = "white";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        Log.info("Draw: Footer Banner", this);
    }

    update(tick) {

    }

    draw() {

    }

    drawBackground() {
        this.drawFilledRectangleLoaded();
    }
}