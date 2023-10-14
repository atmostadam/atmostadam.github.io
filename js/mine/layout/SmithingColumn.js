import { Anvil } from "../component/Anvil.js";
import { TinHammer } from "../tools/TinHammer.js";
import { CopperHammer } from "../tools/CopperHammer.js";
import { BronzeHammer } from "../tools/BronzeHammer.js";
import { IronHammer } from "../tools/IronHammer.js";
import { Drawing } from "./../../common/base/Drawing.js";
import { TinIngot } from "../component/TinIngot.js";
import { CopperIngot } from "../component/CopperIngot.js";
import { BronzeIngot } from "../component/BronzeIngot.js";
import { IronIngot } from "../component/IronIngot.js";
import { Log } from "./../../common/logger/Log.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class SmithingColumn extends Drawing {
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

        const anvilX = this.x + halfWidth - 100;
        const anvilTopY = this.y + 200;
        const anvilBottomY = this.y + 550;

        this.anvilTop = new Anvil(anvilX, anvilTopY);
        this.anvilBottom = new Anvil(anvilX, anvilBottomY);

        this.tin = new TinIngot(x + halfWidth + 10, y);
        this.copper = new CopperIngot(x + halfWidth - 10, y);
        this.bronze = new BronzeIngot(x + halfWidth + 10, y);
        this.iron = new IronIngot(x + halfWidth - 10, y);

        GameContext.addClickSubscriber(this.tin);
        GameContext.addClickSubscriber(this.copper);
        GameContext.addClickSubscriber(this.bronze);
        GameContext.addClickSubscriber(this.iron);

        this.tinHammer = new TinHammer(x + halfWidth, y, w, h);
        this.copperHammer = new CopperHammer(x + halfWidth, y, w, h);
        this.bronzeHammer = new BronzeHammer(x + halfWidth, y, w, h);
        this.ironHammer = new IronHammer(x + halfWidth, y, w, h);

        GameContext.set("TinHammer", this.tinHammer);
        GameContext.set("CopperHammer", this.copperHammer);
        GameContext.set("BronzeHammer", this.bronzeHammer);
        GameContext.set("IronHammer", this.ironHammer);

        Log.info("Draw: SmithingColumn Column", this);
    }

    update(tick) {
        if (this.hidden) {
            return;
        }

        this.anvilTop.update(tick);
        this.anvilBottom.update(tick);

        this.tin.update(tick);
        this.copper.update(tick);
        this.bronze.update(tick);
        this.iron.update(tick);

        this.tinHammer.update(tick);
        this.copperHammer.update(tick);
        this.bronzeHammer.update(tick);
        this.ironHammer.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }

        this.tin.draw();
        this.copper.draw();
        this.bronze.draw();
        this.iron.draw();

        this.tinHammer.draw();
        this.copperHammer.draw();
        this.bronzeHammer.draw();
        this.ironHammer.draw();
    }

    drawBackground() {
        if (this.hidden) {
            return;
        }

        CanvasContextDecorator.drawFilledRectangle("black", this.x, this.y, this.w, this.h);
        CanvasContextDecorator.drawImage(
            document.getElementById("AnvilHammerSpark"),
            0,
            0,
            408,
            612,
            this.x,
            this.y,
            this.w,
            this.h
        );

        CanvasContextDecorator.drawText("Smithing", MineConstants.COLUMN_FONT,
            MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
        this.anvilTop.draw();
        this.anvilBottom.draw();
    }
}