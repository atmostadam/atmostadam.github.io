import { Drawing } from "../../common/base/Drawing.js";

export class IronShovel extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.image = document.getElementById("Shovel");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y + 720;
        this.sw = 128;
        this.sh = 128;

        this.speed = 6;

        this.minX = this.x - 200;
        this.minY = this.y;
        this.maxX = this.x;
        this.maxY = this.y + 200;

        this.movingTowards = true;
        this.hidden = true;
    }

    update() {
        if (this.hidden) {
            return;
        }
        if (this.movingTowards) {
            this.x += this.speed;
            this.y -= this.speed;
            if (this.y < this.minY || this.x > this.maxX) {
                this.movingTowards = false;
            }
        } else {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < this.minX || this.y > this.maxY) {
                this.movingTowards = true;
            }
        }
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}