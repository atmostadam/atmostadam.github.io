import { Game } from "./../Game.js";
import { GenericGrassTile } from "./../tiles/GenericGrassTile.js";

export class MapStartingArea {
    constructor() {
        this.tileSize = 32;
        this.rows = Game.getHeight() / this.tileSize;
        this.columns = Game.getWidth() / this.tileSize;
        this.tiles = [
            1, 3, 3, 3, 1, 1, 3, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 2, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 2, 1, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1,
            1, 1, 1, 1, 2, 1, 1, 1
        ];
    }

    update() {

    }

    draw() {
        for (var c = 0; c < this.columns; c++) {
            for (var r = 0; r < this.rows; r++) {
                new GenericGrassTile(c * this.tileSize, r * this.tileSize).draw();
            }
        }
    }
}