import { Game } from "../Game.js"
import { ChickenOpponent } from "../opponents/ChickenOpponent.js";
import { SnakeOpponent } from "../opponents/SnakeOpponent.js";
import { SquirrelOpponent } from "../opponents/SquirrelOpponent.js";

export class OpponentLoader {
    constructor() {
        this.opponentNames = ["Chicken", "Snake", "Squirrel"];
        Game.setCache("opponentNames", this.opponentNames);

        for (var i = 0; i < 3; i++) {
            Game.setCacheImage(this.opponentNames[i].toLowerCase() + "Pixel");
            Game.setCacheImage(this.opponentNames[i].toLowerCase() + "Portrait");
        }

        Game.setCacheClass(new ChickenOpponent());
        Game.setCacheClass(new SnakeOpponent());
        Game.setCacheClass(new SquirrelOpponent());
    }
}