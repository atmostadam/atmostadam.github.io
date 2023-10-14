import { Game } from "../Game.js";

export class WorldMap {
    constructor() {
        this.columns = 12;
        this.rows = 12;
        this.tileSize = 32;

        this.atlas = [
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3
        ]

        /*
        this.layers = [[
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,
            3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3
        ], [
            4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
            4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 0, 0, 3, 3, 3, 3, 3, 3, 3
        ]];
        */

    }

    load(camera) {
        this.camera = camera;
    }

    draw(startCol, startRow) {
        var startCol = Math.floor(this.camera.x / this.tileSize);
        var endCol = startCol + (this.camera.width / this.tileSize);
        var startRow = Math.floor(this.camera.y / this.tileSize);
        var endRow = startRow + (this.camera.height / this.tileSize);
        var offsetX = -this.camera.x + startCol * this.tileSize;
        var offsetY = -this.camera.y + startRow * this.tileSize;

        for (var c = startCol; c <= endCol; c++) {
            for (var r = startRow; r <= endRow; r++) {
                //var tile = this.getTile(c, r);
                //var x = (c - startCol) * this.tileSize + offsetX;
                //var y = (r - startRow) * this.tileSize + offsetY;
                if (tile !== 0) { // 0 => empty tile
                    Game.getCtx().drawImage(
                        Game.getCache("TilesetField"),
                        16,
                        64,
                        16,
                        16,
                        Math.round(c),  // target x
                        Math.round(r), // target y
                        this.tileSize, // target width
                        this.tileSize // target height
                        /*
                        //this.tileAtlas, // image
                        //(tile - 1) * map.tsize, // source x
                        //0, // source y
                        //map.tsize, // source width
                        //map.tsize, // source height
                        Math.round(x),  // target x
                        Math.round(y), // target y
                        this.tileSize, // target width
                        this.tileSize // target height
                        */
                    );
                }
            }
        }
    }

    getTile(col, row) {
        return this.atlas[row * this.columns + col];
    }

    isSolidTileAtXY(x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // tiles 3 and 5 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var isSolid = tile === 3 || tile === 5;
            return res || isSolid;
        }.bind(this), false);
    };

    getCol(x) {
        return Math.floor(x / this.tileSize);
    };

    getRow(y) {
        return Math.floor(y / this.tileSize);
    };

    getX(col) {
        return col * this.tileSize;
    }

    getY(row) {
        return row * this.tileSize;
    }
}
