import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";
import { Game } from "../Game.js";

export class CatRightClawAnimation extends Hideable {
    constructor() {
        super(true);

        this.numOfSlashes = 15;
        this.slashSpeed = 3;

        this.ix = 0;
        this.iy = 0;
        this.w = 612;
        this.h = 612;
        this.sw = 200;
        this.sh = 200;

        this.image = super.getImage("clawSlashRight");
    }

    load() {
        this.countSlashes = 0;
        this.x = Game.getWidth() - 470;
        this.y = cfg.BATTLE_OPPONENT_PIXEL_Y - 120;
        this.show();
        setTimeout(() => { this.hide(); }, 5000);

        return this;
    }

    update() {
        if (super.isHidden()) {
            return;
        }
        if (this.countSlashes < this.numOfSlashes) {
            this.x += this.slashSpeed;
            this.y += this.slashSpeed;
            this.countSlashes++;
            return;
        }
        this.hide();
    }

    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawImage(
            this.image,
            this.ix,
            this.iy,
            this.w,
            this.h,
            this.x,
            this.y,
            this.sw,
            this.sh
        );
    }

    hide() {
        super.hide();
        this.countSlashes = 0;
    }
}