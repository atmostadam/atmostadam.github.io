import { Game } from "./../Game.js";
import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";

class CookieWarningScreen extends Drawing {
    constructor() {
        super();
    }

    startRunning() { // Deprecated
        this.load();
    }

    load() {
        this.text = "This website uses cookies to save your progress. No Cookie-Haters. Leave immediately if you do not like the taste of cookies.";
        this.color = "black";
        this.font = cfg.BATTLE_SCREEN_FONT;
        this.x = Game.getWidth();
        this.y = Game.getHeight();
        return this;
    }

    update() {
        if (this.delay) {
            return;
        }
        setTimeout(() => { if ("CookieWarningScreen" == this.getCurrentScreenName()) { this.nextScreen(); } }, Game.getCache("introScreenDelay"));
        this.delay = true;
    }

    draw() {
        super.drawTextLoaded();
    }

    notify() {
        this.nextScreen();
    }
}