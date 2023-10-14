import { Counter } from "../component/Counter.js";
import { Shopkeep } from "../component/Shopkeep.js";
import { Drawing } from "./../../common/base/Drawing.js";
import { Log } from "./../../common/logger/Log.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class MarketColumn extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.color = "#add8e6";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        const halfWidth = this.w / 2;

        this.titleX = this.x + halfWidth - 135;
        this.titleY = this.y + 55;

        const counterIY = 720;
        const counterY = this.y + 170;

        const counterIX = 1200;
        const counterRightX = this.w - 90;
        const counterMiddleRightX = this.w - 144;
        const counterMiddleX = this.w - 216;
        const counterMiddleLeftX = this.w - 288;
        const counterLeftX = this.w - 380;

        this.counterRight = new Counter(counterIX, counterIY, counterRightX, counterY);
        this.counterMiddleRight = new Counter(counterIX, counterIY, counterMiddleRightX, counterY);
        this.counterMiddle = new Counter(counterIX, counterIY, counterMiddleX, counterY);
        this.counterMiddleLeft = new Counter(counterIX, counterIY, counterMiddleLeftX, counterY);
        this.counterLeft = new Counter(counterIX + 48, counterIY, counterLeftX, counterY);

        this.shopkeepX = halfWidth - 45;
        this.shopkeepY = this.y + 60;

        this.shopkeep = new Shopkeep(this.shopkeepX, this.shopkeepY);

        Log.info("Draw: MarketColumn Column", this);
    }

    update(tick) {
        if (this.hidden) {
            return;
        }

        this.counterLeft.update(tick);
        this.counterMiddleLeft.update(tick);
        this.counterMiddle.update(tick);
        this.counterMiddleRight.update(tick);
        this.counterRight.update(tick);

        this.shopkeep.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }

        CanvasContextDecorator.drawText("Market", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX, this.titleY);

        this.counterLeft.draw();
        this.counterMiddleLeft.draw();
        this.counterMiddle.draw();
        this.counterMiddleRight.draw();
        this.counterRight.draw();

        this.shopkeep.draw();
    }

    drawBackground() {
        this.drawFilledRectangleLoaded();
        CanvasContextDecorator.drawImage(
            document.getElementById("Market"),
            0,
            0,
            242,
            421,
            this.x,
            this.y,
            this.w,
            this.h);
    }
}