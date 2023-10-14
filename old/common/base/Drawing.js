import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { insideRectangle } from "../util/MathUtils.js";
import { CanvasDecorator } from "../decorator/CanvasDecorator.js";
import { CanvasContextDecorator } from "../decorator/CanvasContextDecorator.js";
import { Log } from "./../logger/Log.js";

export class Drawing {
    constructor() {
        this.waitUntilTick = 0;
        this.hidden = false;
        this.waiting = false;
    }

    load() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override load()");
    }

    update(tick) {
        this.tick = tick;
        if (this.hidden) {
            return;
        }
        if (this.waiting) {
            this.updateWaiting(tick);
        } else {
            this.safeUpdate(tick);
        }
    }

    updateWaiting(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override updateWaiting()");
    }

    safeUpdate(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override safeDraw()");
    }

    draw() {
        if (this.hidden) {
            return;
        }
        if (this.waiting) {
            this.drawWaiting();
        } else {
            this.safeDraw();
        }
    }

    drawWaiting() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override drawWaiting()");
    }

    safeDraw() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override safeDraw()");
    }

    clear() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override clear()");
    }

    notify(x, y) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override notify(x, y)");
    }

    drawImageLoaded() {
        CanvasContextDecorator.drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.sw, this.sh);
    }

    drawTextLoaded() {
        CanvasContextDecorator.drawText(this.text, this.font, this.color, this.x, this.y);
    }

    drawRectangleLoaded() {
        CanvasContextDecorator.drawRectangle(this.size, this.color, this.x, this.y, this.w, this.h);
    }

    drawFilledRectangleLoaded() {
        CanvasContextDecorator.drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
    }

    drawCircleLoaded() {
        CanvasContextDecorator.drawCircle(this.size, this.color, this.x, this.y, this.r, this.s, this.e);
    }

    drawFilledCircleLoaded() {
        CanvasContextDecorator.drawFilledCircle(this.color, this.x, this.y, this.r, this.s, this.e);
    }

    drawBackgroundLoaded() {
        CanvasContextDecorator.drawImage(this.image, 0, 0, CanvasDecorator.getWidth(),
            CanvasDecorator.getHeight(), 0, 0, CanvasDecorator.getWidth(),
            CanvasDecorator.getHeight());
    }

    getImage(id) {
        return CanvasContextDecorator.getImage(id);
    }

    /** See if click condition is true. */
    onClick(x, y) {
        if (this.hidden) {
            return;
        }
        if (insideRectangle(x, y, this.x, this.y, this.sw, this.sh)) {
            this.click();
        }
    }

    /** When clicked. */
    click() {

    }

    show() {
        this.hidden = false;
    }

    hide() {
        this.hidden = true;
    }
}