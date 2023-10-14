import { GameValidationException } from "../exception/GameValidationException.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import * as cfg from "../config/GameConfiguration.js";
import { Game } from "../Game.js";
import { drawImage } from "../main.js";
import { Drawing } from "./Drawing.js"

export class Screen extends Drawing {
    constructor() {
        super();

        this.running = false;
        this.screenTick = 0;
        this.sleeping = false;

        this.game = Game.getInstance();
    }

    startRunning() {
        this.running = true;
        this.log("startRunning()", "Show Screen [" + this.constructor.name + "]");
    }

    update() {
        this.screenTick++;
        if (this.screenTick % 1000 === 0) {
            this.log("update()", "1000 ticks on [" + this.constructor.name + "] with total [" + this.screenTick + "] ticks");
        }
    }

    draw() {

    }

    drawBackground(imageX, imageY, w, h) {
        drawImage(
            this.image,
            imageX,
            imageY,
            w,
            h,
            0,
            0,
            cfg.CANVAS_WIDTH,
            cfg.CANVAS_HEIGHT);
    }

    log(method, message) {
        console.log("[" + this.game.tick + "] [" + this.constructor.name + "] [" + method + "] -> " + message);
    }

    isSleeping() {
        return this.sleeping;
    }

    isAwake() {
        return !this.sleeping;
    }

    startSleeping() {
        this.sleeping = true;
    }

    stopSleeping() {
        this.sleeping = false;
    }

    sleepInMillis(ms) {
        this.startSleeping();
        setTimeout(() => this.stopSleeping(), ms);
        //setTimeout(function(){this.sleeping = false;}, ms);
    }

    requireNotNull(name, value) {
        if (null == name) {
            throw new GameDeveloperException("GameDeveloperException -> [" + name + "] [" + value + "] requireNotNull MUST HAVE 2 arguments!", this.constructor.name, -1);
        }
        if (null == name) {
            throw new GameValidationException("GameValidationException -> [" + name + "] [" + value + "] instance argument cannot be null!", this.constructor.name, -1);
        }
    }
}