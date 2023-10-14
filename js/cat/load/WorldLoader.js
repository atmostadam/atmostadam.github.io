import { WorldCatPixelDrawing } from "../world/WorldCatPixelDrawing.js";
import { Game } from "./../Game.js";

export class WorldLoader {
    constructor() {
        Game.setCacheClass(new WorldCatPixelDrawing());
    }
}