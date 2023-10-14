import { SelectionPortraitDrawing } from "../selection/SelectionPortraitDrawing.js";
import { SelectionCatPixelDrawing } from "../selection/SelectionCatPixelDrawing.js";
import { SelectionTextDrawing } from "../selection/SelectionTextDrawing.js";
import { SelectionRectangleDrawing } from "../selection/SelectionRectangleDrawing.js";
import { SelectionCatTypeTextDrawing } from "../selection/SelectionCatTypeTextDrawing.js";
import * as cfg from "../config/GameConfiguration.js";
import { CatDecorator } from "../model/CatDecorator.js";
import { Game } from "./../Game.js";
import { Drawing } from "../api/Drawing.js";
import { Cat } from "../model/Cat.js";

export class CatSelectionScreen extends Drawing {
    constructor() {
        super();

        this.catTexts = [];
        this.catPortraits = [];
        this.catPixels = [];
        this.catTypes = [];
        this.catRectangles = [];
    }

    load() {
        try {
            this.background = Game.getCache("grassland");
            this.catsToSelect = Game.getCache("catsToSelect");

            for (var j = 0; j < 2; j++) {
                for (var i = 0; i < 10; i++) {
                    if (this.getIdx(i, j) === 19) {
                        return;
                    }
                    this.drawCatBox(i, j);
                }
            }
            return this;
        } catch (e) {
            console.error("FATAL CRASH DURING [CatSelectionScreen] load()!", e);
            console.error("CatSelectionScreen", this);
            console.error(e.stack);
            console.error("errorMessage", e.message);
            throw e;
        }
    }

    update() {
        for (var i = 0; i < 19; i++) {
            this.catRectangles[i].update();
            this.catPortraits[i].update();
            this.catPixels[i].update();
            this.catTexts[i].update();
            this.catTypes[i].update();
        }
    }

    draw() {
        super.drawBackground(this.background);

        for (var i = 0; i < 19; i++) {
            this.catRectangles[i].draw();
            this.catPortraits[i].draw();
            this.catPixels[i].draw();
            this.catTexts[i].draw();
            this.catTypes[i].draw();
        }
    }

    drawCatBox(i, j) {
        var cat = this.catsToSelect[this.getIdx(i, j)];

        var rectangleX = cfg.SELECTION_RECTANGLE_ANCHOR_X + (Game.getCache("selectionRectangleWidth") * i) + (cfg.SELECTION_RECTANGLE_SPACING_X * i);
        var rectangleY = cfg.SELECTION_RECTANGLE_ANCHOR_Y + (Game.getCache("selectionRectangleHeight") * j) + (cfg.SELECTION_RECTANGLE_SPACING_Y * j);

        this.catRectangles.push(new SelectionRectangleDrawing(cat, Game.getCache("selectionRectangleWidth"),
            Game.getCache("selectionRectangleHeight"), rectangleX, rectangleY));

        this.catTexts.push(new SelectionTextDrawing(cat, cfg.SELECTION_TEXT_MARGIN_X + rectangleX,
            cfg.SELECTION_TEXT_MARGIN_Y + rectangleY));

        this.catPortraits.push(new SelectionPortraitDrawing(cat, cfg.SELECTION_PORTRAIT_MARGIN_XY + rectangleX,
            cfg.SELECTION_PORTRAIT_MARGIN_XY + rectangleY));

        this.catPixels.push(new SelectionCatPixelDrawing(cat, cfg.SELECTION_PIXEL_LEFT_PAD_X + rectangleX,
            cfg.SELECTION_PIXEL_MARGIN_Y + rectangleY));

        this.catTypes.push(new SelectionCatTypeTextDrawing(cat, cfg.SELECTION_TEXT_TYPE_MARGIN_X + rectangleX,
            cfg.SELECTION_TEXT_TYPE_MARGIN_Y + rectangleY));
    }

    notify(x, y) {
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < 10; i++) {
                var rectangleX = cfg.SELECTION_RECTANGLE_ANCHOR_X + (Game.getCache("selectionRectangleWidth") * i) + (cfg.SELECTION_RECTANGLE_SPACING_X * i);
                var rectangleY = cfg.SELECTION_RECTANGLE_ANCHOR_Y + (Game.getCache("selectionRectangleHeight") * j) + (cfg.SELECTION_RECTANGLE_SPACING_Y * j);

                console.log("Gamer clicked X: [" + x + " : should be [" + rectangleX + " to " + (rectangleX + Game.getCache("selectionRectangleWidth")) + "]");
                console.log("Gamer clicked Y: [" + y + " : should be [" + rectangleY + " to " + (rectangleY + Game.getCache("selectionRectangleHeight")) + "]");
                if (rectangleX < x && x < rectangleX + Game.getCache("selectionRectangleWidth") &&
                    rectangleY < y && y < rectangleY + Game.getCache("selectionRectangleHeight")) {
                    Game.setCache("cat", this.catsToSelect[i + (j * 10)]);
                    Game.setCacheClass(new CatDecorator(this.catsToSelect[i + (j * 10)]));
                    Game.nextScreen("WorldScreen");
                    return;
                }
            }
        }
    }

    getIdx(i, j) {
        return i + (j * 10);
    }
}