import * as cfg from "../config/GameConfiguration.js";
import { Hideable } from "../api/Hideable.js";
import { Game } from "../Game.js";

export class CatWinsText extends Hideable {
    constructor() {
        super(true);

        //this.text = "CAT WINS";
        //this.font = "170pt 'Helvetica', 'sans-serif'";
        //this.color = cfg.COLOR_GREEN;

        this.image = super.getImage("successfulHunt");
        this.iy = 0;
        this.ix = 0
        this.w = 1200;
        this.h = 688;
        this.x = 400;
        this.y = 0;
        this.sw = 1200;
        this.sh = 688;
    }

    update() {
        if (super.isHidden()) {
            return;
        }
        if (this.y > 800) {
            super.hide();
            Game.getCache("CatDecorator").getCat().currentHp += this.amountHealed;
            if (Game.getCache("CatDecorator").getCat().maxHp < Game.getCache("CatDecorator").getCat().currentHp) {
                Game.getCache("CatDecorator").getCat().currentHp = Game.getCache("CatDecorator").getCat().maxHp;
            }
            Game.getCache("CatDecorator").getCat().xp += Game.getCache("OpponentDecorator").getOpponent().xp;
            if (Game.getCache("CatDecorator").getCat().xp > Game.getCache("CatDecorator").getXpToNextLevel()) {
                Game.getCache("CatDecorator").levelUp();
            }
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
        super.drawImageLoaded();
        super.drawText(
            this.amountHealed + "hp of MEAT",
            "100pt 'Helvetica', 'sans-serif'",
            cfg.COLOR_GREEN,
            this.x + 200,
            this.y - 50
        );
        super.drawImage(
            super.getImage("ham"),
            0,
            0,
            32,
            32,
            this.x,
            this.y - 150,
            128,
            128
        );
        super.drawImage(
            super.getImage("meat"),
            0,
            0,
            32,
            32,
            this.x + 1030,
            this.y - 150,
            128,
            128
        );
    }

    show() {
        super.show();
        this.amountHealed = super.getRandom(2, 8);
    }
}