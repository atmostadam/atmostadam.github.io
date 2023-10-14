import { GameCache } from "../persistence/GameCache.js";
import { MithrilRock } from "./rock/MithrilRock.js";

export class Mine {
    constructor(canvas, ctx) {
        this.ctx = ctx;

        new GameCache(canvas, ctx);

        this.mithrilRock = new MithrilRock();
    }

    update() {

    }

    draw() {
        this.mithrilRock.draw();
    }
}
