import { Drawing } from "./../../common/base/Drawing.js";
import { between } from "./../../common/util/MathUtils.js";

export class TinPickaxe extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.image = document.getElementById("Pickaxe");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y;
        this.sw = 128;
        this.sh = 128;

        this.speed = 6;

        this.minX = this.x - 150;
        this.minY = this.y - 150;
        this.maxX = this.x + 50;
        this.maxY = this.y + 50;

        this.movingTowards = true;
        this.hidden = true;
    }

    update() {
        if (this.hidden) {
            return;
        }
        if (this.movingTowards) {
            this.x += this.speed;
            this.y += this.speed;
            if (this.x > this.maxX || this.y > this.maxY) {
                this.movingTowards = false;
            }
        } else {
            this.x -= this.speed;
            this.y -= this.speed;
            if (this.x < this.minX || this.y < this.minY) {
                this.movingTowards = true;
            }
        }
        /*
        if (this.goingUp) {
            this.x += this.speed;
            this.y += this.speed;
        } else {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.x < this.minX ||
            this.x > this.maxX ||
            this.y < this.minY ||
            this.y > this.maxY) {
            this.goingUp = !this.goingUp;
        }
        if (this.tick > this.payoutTicks) {
            this.hidden = true;
            this.tick = 0;
        }
        this.tick++;
        */
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}