import { OpponentDecorator } from "../model/OpponentDecorator.js";
import { Opponent } from "../model/Opponent.js";

export class SquirrelOpponent extends OpponentDecorator {
    constructor() {
        super(
            new Opponent(
                "Squirrel",
                "brown",
                10,
                10,
                1,
                2));

        this.ix = 0;
        this.iy = 0;
        this.w = 2048;
        this.h = 2048;
        this.sw = 128;
        this.sh = 128;

        this.opponent.xp = 7;

        this.image = this.getPixelImage();
    }

    update() {

    }

    draw() {
        super.drawWorld();
    }
}