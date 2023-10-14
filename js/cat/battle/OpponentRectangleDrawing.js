import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "./../api/Drawing.js";
import { Game } from "./../Game.js";


export class OpponentRectangleDrawing extends Drawing {
    constructor() {
        super();

        this.size = cfg.BATTLE_RECTANGLE_SIZE;
        this.color = cfg.BATTLE_RECTANGLE_OPPONENT_COLOR;
        this.w = cfg.BATTLE_RECTANGLE_SWSH;
        this.h = cfg.BATTLE_RECTANGLE_SWSH;
        this.y = cfg.BATTLE_RECTANGLE_Y - 3.5;
    }


    load() {
        this.x = Game.getCache("battleOpponentRectangleDrawingX");
        return this;
    }

    draw() {
        super.drawRectangleLoaded();
    }
}