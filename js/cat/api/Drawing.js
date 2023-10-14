import { Game } from "../Game.js";
import { GameValidationException } from "../exception/GameValidationException.js";

export class Drawing {
    load() { return this; }

    update() { }

    draw() { }

    clear() { }

    notify(x, y) {
        console.log("Gamer has clicked the mouse on screen [" + this.constructor.name + "] at [" + x + ", " + y + "] out of max [" +
            Game.getWidth() + ", " + Game.getHeight() + "]");
    }

    drawImage(image, ix, iy, w, h, x, y, sw, sh) {
        Game.getCtx().drawImage(image, ix, iy, w, h, x, y, sw, sh);
    }

    drawImageLoaded() {
        Game.getCtx().drawImage(this.image, this.ix, this.iy, this.w, this.h,
            this.x, this.y, this.sw, this.sh);
    }

    drawText(text, font, color, x, y) {
        var ctx = Game.getCtx();
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        //ctx.strokeText(text, x, y);
    }

    drawTextLoaded() {
        var ctx = Game.getCtx();
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
        //ctx.strokeText(this.text, this.x, this.y);
    }

    drawRectangle(size, color, x, y, w, h) {
        var ctx = Game.getCtx();
        ctx.beginPath();
        ctx.lineWidth = size;
        ctx.strokeStyle = color;
        ctx.rect(x, y, w, h);
        ctx.stroke();
    }

    drawRectangleLoaded() {
        var ctx = Game.getCtx();
        ctx.beginPath();
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    }

    drawFilledRectangle(color, x, y, w, h) {
        var ctx = Game.getCtx();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    /** Unfilled. */
    drawCircle(color, x, y) {
        var ctx = Game.getCtx();
        ctx.beginPath();
        ctx.arc(x, y, 65, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
        ctx.lineWidth = 10;
        ctx.stroke();
    }

    drawFilledCircle(color, x, y) {
        var ctx = Game.getCtx();
        ctx.beginPath();
        ctx.arc(x, y, 65, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    drawBackground(image) {
        var ctx = Game.getCtx();
        ctx.drawImage(
            image,
            0,
            0,
            Game.getWidth(),
            Game.getHeight(),
            0,
            0,
            Game.getWidth(),
            Game.getHeight());
    }

    drawBackgroundLoaded() {
        var ctx = Game.getCtx();
        ctx.drawImage(
            this.image,
            0,
            0,
            Game.getWidth(),
            Game.getHeight(),
            0,
            0,
            Game.getWidth(),
            Game.getHeight());
    }

    getImage(id) {
        const image = document.getElementById(id);
        //const image = Game.getCache(id);
        if (null == image) {
            throw new GameValidationException("Image [" + id + "] is missing from Document body.");
        }
        return image;
    }

    getCurrentScreenName() {
        return this.getCurrentScreen().constructor.name;
    }

    getCurrentScreen() {
        return Game.getInstance().currentScreen;
    }

    getSpeedPerTickX(dx, numOfTicks) {
        if ((dx - this.x) > 0) {
            this.speedPerTickX = (dx - this.x) / numOfTicks;
        } else {
            this.speedPerTickX = -(this.x - dx) / numOfTicks;
        }
    }

    getSpeedPerTickY(dy, numOfTicks) {
        if ((dy - this.y) > 0) {
            this.speedPerTickY = (dy - this.y) / numOfTicks;
        } else {
            this.speedPerTickY = -(this.y - dy) / numOfTicks;
        }
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}