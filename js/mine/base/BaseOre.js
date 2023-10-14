import { Drawing } from "./../../common/base/Drawing.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { randomElementValue, randomInt } from "./../../common/util/MathUtils.js";

export class BaseOre extends Drawing {
    constructor() {
        super();

        this.image = CanvasContextDecorator.getImage("OreSpritesheet");
        this.w = 32;
        this.h = 32;
        this.sw = 128;
        this.sh = 128;
        this.xPadding = 4;
        this.yPadding = 6;
        this.rSize = 100;

        this.sparkleImageList = [
            document.getElementById("PinkSparkle"),
            document.getElementById("BlueSparkle"),
            document.getElementById("GreenSparkle"),
            document.getElementById("YellowSparkle"),
            document.getElementById("WhiteSparkle")
        ];
    }

    update(tick) {
        super.update(tick);

        if (this.miningBacklog > 0) {
            CanvasContextDecorator.drawText("+1 Tin Ore", "14pt Arial", "green", this.x + 50, this.textY);
            this.miningBacklog--;
        }

        if (this.clickPower > 0 && tick % 8 === 0) {
            this.clickPower--;
        }
    }

    safeDraw() {
        this.drawWhiteRectangle();
        this.drawImageLoaded();
        CanvasContextDecorator.drawRectangle(5, "green", this.x + this.xPadding, this.y + this.yPadding, this.rSize, this.rSize);

        if (this.sparkleImage1 && this.s1Count < this.s1MaxCount) {
            this.s1Count++;
        } else {
            this.sparkleImage1 = randomElementValue(this.sparkleImageList);
            this.s1X = randomInt(this.x, this.x + 35);
            this.s1Y = randomInt(this.y + 45, this.y + 75);
            this.s1Count = 0;
            this.s1MaxCount = randomInt(50, 100);
        }
        CanvasContextDecorator.drawImage(this.sparkleImage1, 0, 0, 500, 500, this.s1X, this.s1Y, 64, 64);

        if (this.sparkleImage2 && this.s2Count < this.s2MaxCount) {
            this.s2Count++;
        } else {
            this.sparkleImage2 = randomElementValue(this.sparkleImageList);
            this.s2X = randomInt(this.x + 15, this.x + 75);
            this.s2Y = randomInt(this.y, this.y + 70);
            this.s2Count = 0;
            this.s2MaxCount = randomInt(50, 120);
        }
        CanvasContextDecorator.drawImage(this.sparkleImage2, 0, 0, 500, 500, this.s2X, this.s2Y, 32, 32);
    }

    drawWaiting() {
        this.drawWhiteRectangle();
        this.drawImageLoaded();
        CanvasContextDecorator.drawRectangle(5, "black", this.x + this.xPadding, this.y + this.yPadding, this.rSize, this.rSize);
    }

    drawWhiteRectangle() {
        CanvasContextDecorator.drawFilledRectangle("white", this.x + this.xPadding, this.y + this.yPadding, this.rSize, this.rSize);
    }

    click() {
        if (!this.waiting) {
            this.waiting = true;
            this.waitUntilTick = this.tick + this.waitTicks;
        }

        if (this.clickPower < 50) {
            this.clickPower++;
            this.clickMultiplier = 1 + (this.clickPower * .1);
        }
    }
}