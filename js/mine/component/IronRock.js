import { BaseRock } from "../base/BaseRock.js";
import { MineConstants } from "../configuration/MineConstants.js";
import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class IronRock extends BaseRock {
    constructor(x, y, w, h) {
        super();

        this.ix = 64;
        this.iy = 0;
        this.x = x + (w / 4);
        this.y = y + (h / 1.7);
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.IRON_ROCK_PAYBACK_TICKS;

        this.textY = this.y + 10;

        this.clickPower = 0;
        this.clickMultiplier = 0;

        this.copperOreToUnlock = 1;
    }

    updateWaiting(tick) {
        if (tick > this.waitUntilTick) {
            const finalPayout = Math.ceil(this.pay * this.clickMultiplier);
            InventoryDecorator.addTinOre(finalPayout);
            this.miningBacklog += finalPayout;
            this.waiting = false;
        }
        GameContext.get("IronPickaxe").show();
    }

    safeUpdate(tick) {
        GameContext.get("IronPickaxe").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("IRON", MineConstants.IRON_FONT, MineConstants.IRON_COLOR, this.x + 30, this.y + 160);
        super.draw();
    }

    stillLocked() {
        if (CurrencyDecorator.getGoldCoins() > this.unhideAtGold) {
            this.hidden = false;
        }
        return this.hidden;
    }
}