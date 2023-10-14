import { Drawing } from "./common/base/Drawing.js";
import { CanvasContextDecorator } from "./common/decorator/CanvasContextDecorator.js";
import { CanvasDecorator } from "./common/decorator/CanvasDecorator.js";
import { insideRectangle } from "./common/util/MathUtils.js";
import { MineGameLoop } from "./mine/MineGameLoop.js";
import { GameContext } from "./common/context/GameContext.js";
import { Log } from "./common/logger/Log.js";
import { Game } from "./cat/Game.js";

export class GameChoice extends Drawing {
    constructor(canvas, ctx) {
        super();
        this.x = CanvasDecorator.getLeft();
        this.y = CanvasDecorator.getTop();
        this.w = CanvasDecorator.getWidth();
        this.h = CanvasDecorator.getHeight();
        this.canvas = canvas;
        this.ctx = ctx;

        GameContext.set("GameLoop", this);
        GameContext.set("GameChoice", this);
        GameContext.addClickSubscriber(this);
    }

    update(tick) {

    }

    draw() {
        CanvasContextDecorator.drawFilledRectangle("green", this.x, this.y, this.w / 2, this.h / 2);
        CanvasContextDecorator.drawFilledRectangle("orange", this.w / 2, this.y, this.w / 2, this.h / 2);
        CanvasContextDecorator.drawFilledRectangle("blue", this.x, this.h / 2, this.w / 2, this.h / 2);
        CanvasContextDecorator.drawFilledRectangle("yellow", this.w * (1 / 3), this.h / 2, this.w / 3, this.h / 2);
        CanvasContextDecorator.drawFilledRectangle("purple", this.w * (2 / 3), this.h / 2, this.w / 3, this.h / 2);

        CanvasContextDecorator.drawText("CAT LIFE", "52pt Veranda", "white", this.w * (1 / 10), this.h / 4);
        CanvasContextDecorator.drawText("MINE GAME", "52pt Veranda", "black", this.w * (6 / 10), this.h / 4);
        CanvasContextDecorator.drawText("Nathan", "52pt Veranda", "white", this.w * (1 / 10), this.h * (3 / 4));
        CanvasContextDecorator.drawText("Mom", "52pt Veranda", "black", this.w * (9 / 20), this.h * (3 / 4));
        CanvasContextDecorator.drawText("Rachel", "52pt Veranda", "white", this.w * (8 / 10), this.h * (3 / 4));
    }

    onClick(x, y) {
        if (insideRectangle(x, y, this.x, this.y, this.w / 2, this.h / 2)) {
            GameContext.set("GameLoop", new Game(this.canvas, this.ctx));
            GameContext.removeClickSubscriber(this);
        }
        if (insideRectangle(x, y, this.w / 2, this.y, this.w / 2, this.h / 2)) {
            GameContext.set("GameLoop", new MineGameLoop());
            GameContext.removeClickSubscriber(this);
        }
    }
}
