import { Furnance } from "../component/Furnance.js";
import { Drawing } from "./../../common/base/Drawing.js";
import { TinOre } from "../component/TinOre.js";
import { CopperOre } from "../component/CopperOre.js";
import { IronOre } from "../component/IronOre.js";
import { Log } from "./../../common/logger/Log.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { GameContext } from "./../../common/context/GameContext.js";
import { TinShovel } from "./../tools/TinShovel.js";
import { CopperShovel } from "./../tools/CopperShovel.js";
import { IronShovel } from "./../tools/IronShovel.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class SmeltingColumn extends Drawing {
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

        const furnanceX = this.x + halfWidth - 100;
        const furnanceTopY = this.y + 60;
        const furnanceBottomY = this.y + 440;

        this.furnanceTop = new Furnance(furnanceX, furnanceTopY);
        this.furnanceBottom = new Furnance(furnanceX, furnanceBottomY);

        this.tin = new TinOre(x + halfWidth + 20, y);
        this.copper = new CopperOre(x + halfWidth - 20, y);
        this.iron = new IronOre(x + halfWidth - 20, y);

        GameContext.addClickSubscriber(this.tin);
        GameContext.addClickSubscriber(this.copper);
        GameContext.addClickSubscriber(this.iron);

        this.tinShovel = new TinShovel(x + halfWidth, y, w, h);
        this.copperShovel = new CopperShovel(x + halfWidth, y, w, h);
        this.ironShovel = new IronShovel(x + halfWidth, y, w, h);

        GameContext.set("TinShovel", this.tinShovel);
        GameContext.set("CopperShovel", this.copperShovel);
        GameContext.set("IronShovel", this.ironShovel);

        Log.info("Draw: SmeltingColumn Column", this);
    }

    update(tick) {
        if (this.hidden) {
            return;
        }

        this.furnanceTop.update(tick);
        this.furnanceBottom.update(tick);

        this.tin.update(tick);
        this.copper.update(tick);
        this.iron.update(tick);

        this.tinShovel.update(tick);
        this.copperShovel.update(tick);
        this.ironShovel.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }

        this.tin.draw();
        this.copper.draw();
        this.iron.draw();

        this.tinShovel.draw();
        this.copperShovel.draw();
        this.ironShovel.draw();
    }

    drawBackground() {
        if (this.hidden) {
            return;
        }

        CanvasContextDecorator.drawFilledRectangle("black", this.x, this.y, this.w, this.h);
        CanvasContextDecorator.drawImage(
            document.getElementById("FlameBackground"),
            0,
            0,
            237,
            454,
            this.x,
            this.y,
            this.w,
            this.h
        );
        CanvasContextDecorator.drawText("Smelting", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX, this.titleY);
        this.furnanceTop.draw();
        this.furnanceBottom.draw();
    }
}