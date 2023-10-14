import { Game } from "../Game.js"

export class SymbolImageLoader {
    constructor() {
        Game.setCacheImage("clawSymbol");
        Game.setCacheImage("biteSymbol");
        Game.setCacheImage("puffSymbol");
        Game.setCacheImage("pounceSymbol");
    }
}