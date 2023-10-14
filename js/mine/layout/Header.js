import { Drawing } from "./../../common/base/Drawing.js";
import { ScrollingTextHandler } from "../handler/ScrollingTextHandler.js";
import { CanvasDecorator } from "./../../common/decorator/CanvasDecorator.js";
import { drawText } from "./../../common/util/DrawingUtils.js";
import { Log } from "./../../common/logger/Log.js";

export class Header extends Drawing {
    constructor(x, y, w, h) {
        super();

        const pt = 32;
        this.font = pt + "pt Arial";
        this.color = "#e1e1e1";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        const margin = CanvasDecorator.getLeft() + 50;

        this.startX = margin;
        this.tx = margin;
        this.ty = (this.h + CanvasDecorator.getLeft() + pt) / 2;
        this.endX = CanvasDecorator.getWidth() - margin;

        this.handler = new ScrollingTextHandler();

        Log.info("Draw: Header Banner", this);
    }

    update(tick) {
        this.handler.updateText();
        if (this.tx > this.endX) {
            this.tx = this.startX;
            this.handler.next();
        }
    }

    draw() {
        if (null != this.handler.text) {
            drawText(this.handler.text, this.font, this.handler.textColor, this.tx, this.ty);
            this.tx += 2;
        }
    }

    drawBackground() {
        this.drawFilledRectangleLoaded();
    }
}