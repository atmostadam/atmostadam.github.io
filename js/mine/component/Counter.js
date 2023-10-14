import { Drawing } from "./../../common/base/Drawing.js";

export class Counter extends Drawing {
    constructor(ix, iy, x, y) {
        super();

        this.image = document.getElementById("InteriorTileset");
        this.ix = ix;
        this.iy = iy;
        this.w = 48;
        this.h = 48;
        this.x = x;
        this.y = y;
        this.sw = 96;
        this.sh = 96;

        this.hidden = false;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }

    show() {
        this.hidden = false;
    }
}