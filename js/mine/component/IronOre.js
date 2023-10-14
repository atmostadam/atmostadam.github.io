import { BaseOre } from "../base/BaseOre.js";
import { MineConstants } from "../configuration/MineConstants.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class IronOre extends BaseOre {
    constructor(x, y, w, h) {
        super();

        this.ix = 128;
        this.iy = 288;
        this.x = x + 20;
        this.y = y + 730;
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.IRON_ORE_PAYBACK_TICKS;

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
        GameContext.get("IronShovel").show();
    }

    safeUpdate(tick) {
        GameContext.get("IronShovel").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("IRON", MineConstants.IRON_FONT, MineConstants.IRON_COLOR, this.x + 15, this.y - 5);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}