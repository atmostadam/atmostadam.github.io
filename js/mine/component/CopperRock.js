import { BaseRock } from "../base/BaseRock.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "../configuration/MineConstants.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";

export class CopperRock extends BaseRock {
    constructor(x, y, w, h) {
        super();

        this.ix = 32;
        this.iy = 0;
        this.x = x + (w / 4);
        this.y = y + (h / 3);
        this.sw = 130;
        this.sh = 130;

        this.miningBacklog = 0;

        this.pay = "1";
        this.waitTicks = MineConstants.COPPER_ROCK_PAYBACK_TICKS;

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
        GameContext.get("CopperPickaxe").show();
    }

    safeUpdate(tick) {
        GameContext.get("CopperPickaxe").hide();
    }

    draw() {
        CanvasContextDecorator.drawText("COPPER", MineConstants.COPPER_FONT, MineConstants.COPPER_COLOR, this.x, this.y + 160);
        super.draw();
    }

    stillLocked() {
        if (InventoryDecorator.getTinWeapons() > this.unhideAtTinWeapons) {
            this.hidden = false;
        }
        return this.hidden;
    }
}