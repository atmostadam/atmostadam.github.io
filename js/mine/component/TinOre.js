import { BaseOre } from "../base/BaseOre.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class TinOre extends BaseOre {
    constructor(x, y, w, h) {
        super();

        this.ix = 64;
        this.iy = 288;
        this.x = x - 150;
        this.y = y + 350;
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.TIN_ORE_PAYBACK_TICKS;

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
        GameContext.get("TinShovel").show();
    }

    safeUpdate(tick) {
        GameContext.get("TinShovel").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("TIN", MineConstants.TIN_FONT, MineConstants.TIN_COLOR, this.x + 25, this.y + 135);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}