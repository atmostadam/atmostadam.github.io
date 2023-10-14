import { OpponentDecorator } from "../model/OpponentDecorator.js";
import { Opponent } from "../model/Opponent.js";

/** Reptiles - 10 xp per mom */
export class SnakeOpponent extends OpponentDecorator {
    constructor() {
        super(
            new Opponent(
                "Snake",
                "green",
                15,
                15,
                1,
                2));

        this.ix = 0;
        this.iy = 0;
        this.w = 1024;
        this.h = 1024;
        this.sw = 160;
        this.sh = 160;

        this.opponent.xp = 10;

        this.image = this.getPixelImage();
    }

    update() {

    }

    draw() {
        super.drawWorld();
    }
}