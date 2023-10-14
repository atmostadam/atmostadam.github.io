import { BaseOre } from "../base/BaseOre.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { MineConstants } from "../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class CopperOre extends BaseOre {
    constructor(x, y, w, h) {
        super();

        this.ix = 96;
        this.iy = 288;
        this.x = x + 20;
        this.y = y + 350;
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.COPPER_ORE_PAYBACK_TICKS;

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
        GameContext.get("CopperShovel").show();
    }

    safeUpdate(tick) {
        GameContext.get("CopperShovel").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("COPPER", MineConstants.COPPER_FONT, MineConstants.COPPER_COLOR, this.x, this.y + 140);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}