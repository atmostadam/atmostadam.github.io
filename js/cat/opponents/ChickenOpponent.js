import { OpponentDecorator } from "../model/OpponentDecorator.js";
import { Opponent } from "../model/Opponent.js";

export class ChickenOpponent extends OpponentDecorator {
    constructor() {
        super(
            new Opponent(
                "Chicken",
                "red",
                10,
                10,
                1,
                2));

        this.ix = 0;
        this.iy = 0;
        this.w = 16;
        this.h = 16;
        this.sw = 64;
        this.sh = 64;

        this.opponent.xp = 5;

        this.image = this.getPixelImage();
    }

    update() {

    }

    draw() {
        super.drawWorld();
    }
}