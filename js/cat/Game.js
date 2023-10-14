
import { KeyboardListener } from "./listener/KeyboardListener.js";
import { MouseListener } from "./listener/MouseListener.js";
import { GameValidationException } from "./exception/GameValidationException.js";
import { CatLoader } from "./load/CatLoader.js";
import { OpponentLoader } from "./load/OpponentLoader.js";
import { BattleLoader } from "./load/BattleLoader.js";
import { ScreenLoader } from "./load/ScreenLoader.js";
import { BackgroundImageLoader } from "./load/BackgroundImageLoader.js";
import { SymbolImageLoader } from "./load/SymbolImageLoader.js";
import { LoginLoader } from "./load/LoginLoader.js";
import { GameLocalStorage } from "./persistence/GameLocalStorage.js";
import { WorldLoader } from "./load/WorldLoader.js";
import { SpriteLoader } from "./load/SpriteLoader.js";
import { SelectionLoader } from "./load/SelectionLoader.js";
import { SoundLoader } from "./load/SoundLoader.js";
import { FileLoader } from "./load/FileLoader.js";

/** Potential Performance Improvements: https://github.com/atmostadam/gamedev-js-tiles */
export class Game {
    constructor(canvas, ctx) {
        if (!Game.instance) {
            Game.instance = this;
        }
        /** Dependency Injection: Do NOT change order. */
        try {
            this.gameContext = new Map();
            Game.setCache("introScreenDelay", 3000);

            this.canvas = canvas;
            this.ctx = ctx;
            this.tick = 0;

            Game.setCache("width", this.canvas.width);
            Game.setCache("height", this.canvas.height);

            new BackgroundImageLoader();
            new SymbolImageLoader();
            new SpriteLoader();
            new CatLoader();
            new OpponentLoader();
            new BattleLoader();
            new ScreenLoader();
            new LoginLoader();
            new WorldLoader();
            new SelectionLoader();
            new SoundLoader();
            new FileLoader();

            Game.setCacheClass(new KeyboardListener());
            Game.setCacheClass(new MouseListener());

            Game.setCacheClass(new GameLocalStorage());

            this.currentScreen = Game.getCache("TitleScreen");
        } catch (e) {
            console.error("FATAL CRASH DURING GAME CONSTRUCTOR!", e);
            console.error("Game", this);
            console.error("this.errorMessage", e.message);
            throw e;
        }
        return Game.instance;
    }

    update() {
        try {
            this.tick++;
            this.currentScreen.update();
        } catch (e) {
            console.error("FATAL CRASH DURING update()!", e);
            console.error("Game", this);
            console.error("this.errorMessage", e.message);
            throw e;
        }
    }

    draw() {
        try {
            this.currentScreen.draw();
        } catch (e) {
            console.error("FATAL CRASH DURING draw()!", e, this);
            console.error("Game", this);
            console.error("this.errorMessage", e.message);
            throw e;
        }
    }

    static getInstance() {
        return this.instance;
    }

    static getCtx() {
        return this.instance.ctx;
    }

    static getCanvas() {
        return this.instance.canvas;
    }

    static debug() {
        return Game.getCache("debug");
    }

    static getWidth() {
        return Game.getCache("width");
    }

    static getHeight() {
        return Game.getCache("height");
    }

    static getCat() {
        return Game.getCache("cat");
    }

    static getCatDecorator() {
        return Game.getCache("CatDecorator");
    }

    static getOpponent() {
        return Game.getCache("opponent");
    }

    static getOpponentDecorator() {
        return Game.getCache("OpponentDecorator");
    }

    static nextScreen(name) {
        console.log("NEXT SCREEN ---> " + name);
        var nextScreen = Game.getCache(name);
        nextScreen.load();
        this.instance.currentScreen = nextScreen;
    }

    static setCache(key, value) {
        if (null == key) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null key into setCache";
            console.error(message);
            throw new GameValidationException(message);
        }
        this.instance.gameContext.set(key, value);
    }

    static setCacheImage(id) {
        if (null == id) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setCacheImage";
            console.error(message);
            throw new GameValidationException(message);
        }
        const image = document.getElementById(id);
        if (null == image) {
            var message = "GameValidationException -> Search by Image Element id [" + id + "] results in a null!";
            console.error(message);
            throw new GameValidationException("GameValidationException -> Search by Image Element id [" + id + "] results in a null!");
        }
        return Game.setCache(id, image);
    }

    static setCacheClass(clazz) {
        if (null == clazz) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setCacheClass";
            console.error(message);
            throw new GameValidationException(message);
        }
        Game.setCache(clazz.constructor.name, clazz);
    }

    static getCache(key) {
        if (!this.instance.gameContext.has(key)) {
            var message = "GameValidationException -> No entry exists in cache for key [" + key + "]";
            console.error(message);
            throw new GameValidationException(message);
        }
        return this.instance.gameContext.get(key);
    }

    static containsCache(key) {
        return this.instance.gameContext.has(key);
    }

    static deleteCache(key) {
        return this.instance.gameContext.delete(key);
    }
}