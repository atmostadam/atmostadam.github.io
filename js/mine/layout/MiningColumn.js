import { IronRock } from "../component/IronRock.js";
import { TinRock } from "../component/TinRock.js";
import { CopperRock } from "../component/CopperRock.js";
import { IronPickaxe } from "../tools/IronPickaxe.js";
import { TinPickaxe } from "../tools/TinPickaxe.js";
import { CopperPickaxe } from "../tools/CopperPickaxe.js";
import { Drawing } from "./../../common/base/Drawing.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { Log } from "./../../common/logger/Log.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { MineConstants } from "./../configuration/MineConstants.js";


export class MiningColumn extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.color = "#add8e6";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        const halfWidth = this.w / 2;
        const rockX = this.x + halfWidth + 6;

        this.titleX = this.x + halfWidth - 100;
        this.titleY = this.y + 55;

        this.tinRock = new TinRock(x, y, w, h);
        this.copperRock = new CopperRock(x, y, w, h);
        this.ironRock = new IronRock(x, y, w, h);

        GameContext.addClickSubscriber(this.tinRock);
        GameContext.addClickSubscriber(this.copperRock);
        GameContext.addClickSubscriber(this.ironRock);

        this.tinPickaxe = new TinPickaxe(x, y, w, h);
        this.copperPickaxe = new CopperPickaxe(x, y, w, h);
        this.ironPickaxe = new IronPickaxe(x, y, w, h);

        GameContext.set("TinPickaxe", this.tinPickaxe);
        GameContext.set("CopperPickaxe", this.copperPickaxe);
        GameContext.set("IronPickaxe", this.ironPickaxe);

        Log.info("Draw: MiningColumn Column", this);
    }

    update(tick) {
        if (this.hidden) {
            return;
        }

        this.tinRock.update(tick);
        this.copperRock.update(tick);
        this.ironRock.update(tick);

        this.tinPickaxe.update(tick);
        this.copperPickaxe.update(tick);
        this.ironPickaxe.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }

        this.tinRock.draw();
        this.copperRock.draw();
        this.ironRock.draw();

        this.tinPickaxe.draw();
        this.copperPickaxe.draw();
        this.ironPickaxe.draw();
    }

    drawBackground() {
        if (this.hidden) {
            return;
        }

        CanvasContextDecorator.drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
        CanvasContextDecorator.drawImageById(
            "MineShaftBackground",
            0,
            0,
            262,
            375,
            this.x,
            this.y,
            this.w,
            this.h
        );
        CanvasContextDecorator.drawText("Mining", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
    }
}