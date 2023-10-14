import { Drawing } from "./../../common/base/Drawing.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { BronzeIngot } from "./BronzeIngot.js";

export class Anvil extends Drawing {
    constructor(x, y) {
        super();

        this.unhideAtTinIngots = 100;

        this.image = document.getElementById("Anvil");
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
        //super.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}