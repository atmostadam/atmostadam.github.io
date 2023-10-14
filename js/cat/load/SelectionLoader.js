import { Game } from "../Game.js"
import * as cfg from "../config/GameConfiguration.js";

export class SelectionLoader {
    constructor() {
        Game.setCache("selectionRectangleWidth", (Game.getWidth() - (cfg.SELECTION_RECTANGLE_SPACING_X * 10)) / 10);
        Game.setCache("selectionRectangleHeight", (Game.getHeight() - (cfg.SELECTION_RECTANGLE_SPACING_Y * 2)) / 2);
    }

}