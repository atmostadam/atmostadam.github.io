import { Log } from "./../logger/Log.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameValidationException } from "../exception/GameValidationException.js";

export class CanvasDecorator {
    constructor() {
        if (CanvasDecorator.instance) {
            throw new GameDeveloperException("[FATAL] Developer Error. CanvasContextDecorator is an enforced SINGLETON so new can only be used once.");
        }
        CanvasDecorator.instance = this;

        this.canvas = document.getElementById("game-canvas");
        CanvasDecorator.getAndSetWidth();
        CanvasDecorator.getAndSetHeight();
        this.margin = 0;

        Log.info("Canvas W & H [width=" + this.canvas.width + ", height=" + this.canvas.height + "]", this);

        return CanvasDecorator.instance;
    }

    /** Get width and resize canvas width to browser width. */
    static getAndSetWidth() {
        const w = Math.ceil(CanvasDecorator.getCanvas().getBoundingClientRect().width);
        CanvasDecorator.getCanvas().width = w;
        return w;
    }

    /** Get height and resize canvas height to browser height. */
    static getAndSetHeight() {
        const h = Math.ceil(CanvasDecorator.getCanvas().getBoundingClientRect().height);
        CanvasDecorator.getCanvas().height = h;
        return h;
    }

    /** Width of Canvas resized to width of browser. */
    static getWidth() {
        return CanvasDecorator.getCanvas().width;
    }

    /** Height of Canvas resized to height of browser. */
    static getHeight() {
        return CanvasDecorator.getCanvas().height;
    }

    /** Margin applying to top, bottom, left and right. */
    static getMargin() {
        return this.margin;
    }

    /** Browser Buffer applying to top, bottom, left and right. */
    static getBuffer() {
        return Math.ceil(CanvasDecorator.getCanvas().getBoundingClientRect().left);
    }

    /** Left X (0) plus Browser Buffer plus Margin. */
    static getLeft() {
        return 0;
    }

    /** Right X (max) minus Browser Buffer minus Margin. */
    static getRight() {
        return CanvasDecorator.getCanvas().width;
    }

    /** Top Y (0) plus Browser Buffer plus Margin. */
    static getTop() {
        return 0;
    }

    /** Bottom Y (max) minus Browser Buffer minus Margin. */
    static getBottom() {
        return CanvasDecorator.getCanvas().height;
    }

    /** Canvas being decorated. */
    static getCanvas() {
        return CanvasDecorator.getInstance().canvas;
    }

    /**
     * Singleton design pattern method to get singleton instance.
     * 
     * @returns the instance.
     */
    static getInstance() {
        if (null == CanvasDecorator.instance) {
            throw new GameValidationException("Must create an instance before calling getInstance(). instance is null!");
        }
        return CanvasDecorator.instance;
    }
}