import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { BaseRock } from "../base/BaseRock.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "./../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class TinRock extends BaseRock {
    constructor(x, y, w, h) {
        super();

        this.ix = 128;
        this.iy = 0;
        this.x = x + (w / 4);
        this.y = y + (h / 10);
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.TIN_ROCK_PAYBACK_TICKS;

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
        GameContext.get("TinPickaxe").show();
    }

    safeUpdate(tick) {
        GameContext.get("TinPickaxe").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("TIN", MineConstants.TIN_FONT, MineConstants.TIN_COLOR, this.x + 40, this.y + 160);
        super.draw();
    }

    static canUnlock(tinOre) {
        if (this.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }
}