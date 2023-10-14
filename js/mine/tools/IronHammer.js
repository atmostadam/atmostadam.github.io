import { Drawing } from "../../common/base/Drawing.js";

export class IronHammer extends Drawing {
    constructor(x, y, w, h) {
        super();

        const halfWidth = w / 2;

        this.image = document.getElementById("Hammer");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x + halfWidth - 250;
        this.y = y + 380;
        this.sw = 128;
        this.sh = 128;

        this.speed = 6;

        this.minX = this.x - 80;
        this.minY = this.y - 80;
        this.maxX = this.x + 90;
        this.maxY = this.y + 90;

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
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }
}