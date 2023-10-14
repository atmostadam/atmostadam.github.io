import * as cfg from "../config/GameConfiguration.js";
import { Hideable } from "../api/Hideable.js";
import { Game } from "../Game.js";

export class CatLosesText extends Hideable {
    constructor() {
        super(true);

        this.text = "CAT LOSES";
        this.font = "170pt 'Helvetica', 'sans-serif'";
        this.color = cfg.COLOR_RED;
        this.x = 400;
        this.y = 0;
    }

    update() {
        if (super.isHidden()) {
            return;
        }
        if (this.y > 600) {
            super.hide();
            Game.getCache("GameLocalStorage").storeCat();
            Game.deleteCache("OpponentDecorator");
            Game.deleteCache("opponent");
            Game.nextScreen("WorldScreen");
        }
        this.y += 5;
    }


    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawFilledRectangle(
            cfg.COLOR_WHITE,
            0,
            0,
            Game.getWidth(),
            Game.getHeight()
        );
        super.drawTextLoaded();
    }

}