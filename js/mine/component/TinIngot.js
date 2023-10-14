import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class TinIngot extends BaseIngot {
    constructor(x, y, w, h) {
        super();

        this.ix = 32;
        this.iy = 348;
        this.x = x - 150;
        this.y = y + 100;
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.TIN_INGOT_PAYBACK_TICKS;

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
        GameContext.get("TinHammer").show();
    }

    safeUpdate(tick) {
        GameContext.get("TinHammer").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("TIN", MineConstants.TIN_FONT, MineConstants.TIN_COLOR, this.x + 35, this.y + 160);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}