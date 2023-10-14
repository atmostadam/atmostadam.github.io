import { Game } from "../Game.js";
import { GenericLongGrassTile } from "../tiles/2-GenericLongGrassTile.js";
import { Drawing } from "../api/Drawing.js"

export class WorldSeventhLayer extends Drawing {
    constructor() {
        super();

        this.tileSize = 32;
        this.rows = Game.getHeight() / this.tileSize;
        this.columns = Game.getWidth() / this.tileSize;

        this.layout = [];
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                if (0 == super.getRandom(0, 30)) {
                    this.layout.push(new GenericLongGrassTile(c * this.tileSize, r * this.tileSize));
                } else {
                    this.layout.push(null);
                }
            }
        }
    }

    load() {

    }

    update() {
    }

    draw() {
        this.layout.forEach(e => { if (null != e) e.draw(); });
    }
}