import { Game } from "../Game.js"

export class BackgroundImageLoader {
    constructor() {
        Game.setCacheImage("title");
        Game.setCacheImage("rachel");
        Game.setCacheImage("nathan");
        Game.setCacheImage("dad");
        Game.setCacheImage("mom");
        Game.setCacheImage("grassland");
        Game.setCacheImage("tokyo");
    }
}