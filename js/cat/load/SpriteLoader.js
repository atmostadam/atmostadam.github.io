import { Game } from "../Game.js"

export class SpriteLoader {
    constructor() {
        Game.setCacheImage("TilesetField");
        Game.setCacheImage("TilesetNature");
        Game.setCacheImage("HeroSpritesheet");
    }
}