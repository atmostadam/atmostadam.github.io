import { Drawing } from "./Drawing.js";

export class Animation extends Drawing {
    constructor() {
        super();

        //this.moving = false;
    }

    /*

    load() {
        this.numOfTicks = 0;
        this.countTicks = 0;
        this.speedPerTickX = 0;
        this.speedPerTickY = 0;
    }

    update() {
        super.update();
        if (this.numOfTicks > 0) {
            if (this.countTicks > this.numOfTicks) {
                this.moving = false;
                return;
            }
            this.x += this.speedPerTickX;
            this.y += this.speedPerTickY;
            this.countTicks++;
        }
    }

    draw() {
        super.draw();
    }

    startAnimation(dx, dy, numOfTicks) {
        this.countTicks = 0;
        this.speedPerTickX = 0;
        this.speedPerTickY = 0;
        this.moving = true;

        if ((dx - this.x) > 0) {
            this.speedPerTickX = (dx - this.x) / numOfTicks;
        } else {
            this.speedPerTickX = -(this.x - dx) / numOfTicks;
        }
        if ((dy - this.y) > 0) {
            this.speedPerTickY = (dy - this.y) / numOfTicks;
        } else {
            this.speedPerTickY = -(this.y - dy) / numOfTicks;
        }
        this.numOfTicks = numOfTicks - 1;
    }

    wait(waitNumOfTicks) {
        super.wait(waitNumOfTicks);
        this.startAnimation(this.x, this.y, waitNumOfTicks);
    }

    isMoving() {
        return this.moving;
    }
    */
}  