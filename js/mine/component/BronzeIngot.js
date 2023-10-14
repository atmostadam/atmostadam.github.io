import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class BronzeIngot extends BaseIngot {
    constructor(x, y, w, h) {
        super();

        this.ix = 192;
        this.iy = 348;
        this.x = x - 150;
        this.y = y + 450;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.BRONZE_INGOT_PAYBACK_TICKS;

        this.textY = this.y + 10;

        this.clickPower = 0;
        this.clickMultiplier = 0;

        this.tinOreToUnlock = 1;
    }

    updateWaiting(tick) {
        if (tick > this.waitUntilTick) {
            const finalPayout = Math.ceil(this.pay * this.clickMultiplier);
            InventoryDecorator.addTinOre(finalPayout);
            this.miningBacklog += finalPayout;
            this.waiting = false;
        }
        GameContext.get("BronzeHammer").show();
    }

    safeUpdate(tick) {
        GameContext.get("BronzeHammer").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("BRONZE", MineConstants.BRONZE_FONT, MineConstants.BRONZE_COLOR, this.x, this.y + 160);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}