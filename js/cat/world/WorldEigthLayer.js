import { Game } from "../Game.js";
import { Drawing } from "../api/Drawing.js"
import * as cfg from "../config/GameConfiguration.js";

export class WorldEigthLayer extends Drawing {
    constructor() {
        super();

        this.heartImage = super.getImage("heart");
    }

    draw() {
        this.clearCatInfoArea();
        this.drawName();
        this.drawLevel();
        this.drawHp();
        this.drawHeart();
    }

    clearCatInfoArea() {
        super.drawFilledRectangle(
            cfg.COLOR_WHITE,
            Game.getWidth() - 700,
            0,
            700,
            64
        );
    }

    drawName() {
        super.drawText(
            Game.getCache("CatDecorator").getCat().name,
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_BLUE,
            Game.getWidth() - cfg.WORLD_CAT_NAME_TEXT_X - 120,
            cfg.WORLD_CAT_NAME_TEXT_Y
        )
    }

    drawLevel() {
        super.drawText(
            "Level: " + Game.getCache("CatDecorator").getCat().level + " (" + Game.getCache("CatDecorator").getCat().xp + "xp)",
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_ORANGE,
            Game.getWidth() - cfg.WORLD_CAT_LEVEL_TEXT_X - 120,
            cfg.WORLD_CAT_LEVEL_TEXT_Y
        )
    }

    drawHp() {
        super.drawText(
            Game.getCache("CatDecorator").getCat().currentHp + "/" + Game.getCache("CatDecorator").getCat().maxHp,
            cfg.WORLD_SCREEN_FONT_BOLD_30,
            cfg.COLOR_GREEN,
            Game.getWidth() - cfg.WORLD_CAT_HP_TEXT_X,
            cfg.WORLD_CAT_HP_TEXT_Y
        )
    }

    drawHeart() {
        super.drawImage(
            this.heartImage,
            0,
            0,
            256,
            256,
            Game.getWidth() - cfg.WORLD_HEART_X,
            cfg.WORLD_HEART_Y,
            50,
            50);
    }
}