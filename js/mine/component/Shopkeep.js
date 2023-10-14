import { Drawing } from "./../../common/base/Drawing.js";

export class Shopkeep extends Drawing {
    constructor(x, y) {
        super();

        this.image = document.getElementById("BlueFlameShopkeep");
        this.ix = 0;
        this.iy = 0;
        this.w = 64;
        this.h = 64;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 192;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}