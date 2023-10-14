import { Game } from "./../Game.js";
import { Drawing } from "../api/Drawing.js";

export class LoginScreen extends Drawing {
    constructor() {
        super();
        this.image = this.getImage("grassland");
    }

    update() {

    }

    draw() {
        super.drawBackgroundLoaded();
        if (Game.getCache("GameLocalStorage").containsCat()) {
            Game.getCache("LoginNewCatRectangleDrawing").draw();
            Game.getCache("LoginDeleteRectangleDrawing").draw();
            Game.getCache("LoginLoadRectangleDrawing").draw();
        } else {
            Game.nextScreen("CatSelectionScreen");
        }
    }

    notify(x, y) {
        console.log("[" + x + ", " + y + "]");
        if (100 < x && x < Game.getWidth() - 100) {
            if (100 < y && y < 300) {
                Game.nextScreen("CatSelectionScreen");
            }
            if (400 < y && y < 600) {
                Game.getCache("GameLocalStorage").load();
                Game.nextScreen("WorldScreen");
            } else if (700 < y && y < 900) {
                Game.getCache("GameLocalStorage").clear();
            }
        }
    }
}