import * as cfg from "../config/GameConfiguration.js";
import { Drawing } from "../api/Drawing.js";
import { Game } from "../Game.js";

export class BattleScreen extends Drawing {
    constructor() {
        super();

        this.image = Game.getCache("grassland");
        this.claw = Game.getCache("clawSymbol");
        this.bite = Game.getCache("biteSymbol");
        this.puff = Game.getCache("puffSymbol");
        this.pounce = Game.getCache("pounceSymbol");

        this.state = "AttackSelection";
    }

    load() {
        this.BATTLE_PORTRAIT_OPPONENT_X = Game.getWidth() - cfg.BATTLE_ANCHOR_X - this.PORTRAIT_WH;

        this.BATTLE_FONT = cfg.BATTLE_SCREEN_FONT;
        this.BATTLE_COLOR = cfg.COLOR_ORANGE;
        this.BATTLE_CAT_NAME_TEXT_X = cfg.BATTLE_ANCHOR_X + 100;
        this.BATTLE_CAT_NAME_TEXT_Y = Game.getHeight() - cfg.BATTLE_ANCHOR_Y;
        this.BATTLE_OPPONENET_NAME_TEXT_X = Game.getWidth() - cfg.BATTLE_ANCHOR_X - this.PORTRAIT_WH + 60;

        this.opponent = Game.getCache("OpponentDecorator");
        this.cat = Game.getCache("CatDecorator");

        this.catRightClawAnimation = Game.getCache("CatRightClawAnimation");
        this.catLeftClawAnimation = Game.getCache("CatLeftClawAnimation");

        this.catTopBiteAnimation = Game.getCache("CatTopBiteAnimation");
        this.catBottomBiteAnimation = Game.getCache("CatBottomBiteAnimation");

        this.catAttackDamageText = Game.getCache("CatAttackDamageText");
        this.opponentAttackDamageText = Game.getCache("OpponentAttackDamageText");

        this.catPortrait = Game.getCache("CatPortraitDrawing").load();
        this.catName = Game.getCache("CatNameText").load();
        this.catHp = Game.getCache("CatHpText").load();
        this.catRectangle = Game.getCache("CatRectangleDrawing").load();

        //this.opponentPortrait = Game.getCache("OpponentPortraitDrawing").load();
        this.opponentName = Game.getCache("OpponentNameText").load();
        this.opponentHp = Game.getCache("OpponentHpText").load();
        this.opponentRectangle = Game.getCache("OpponentRectangleDrawing").load();

        this.catPixelAnimation = Game.getCache("CatPixelAnimation").load();

        this.opponentPixelAnimation = Game.getCache("OpponentPixelAnimation").load();

        this.catLosesText = Game.getCache("CatLosesText");
        this.catWinsText = Game.getCache("CatWinsText");

        return this;
    }

    update() {
        this.catPortrait.update();
        this.catName.update();
        this.catHp.update();
        this.catRectangle.update();
        this.catPixelAnimation.update();
        this.catAttackDamageText.update();

        this.opponentName.update();
        this.opponentHp.update();
        this.opponentRectangle.update();
        this.opponentPixelAnimation.update();
        this.opponentAttackDamageText.update();

        this.catRightClawAnimation.update();
        this.catLeftClawAnimation.update();
        this.catBottomBiteAnimation.update();
        this.catTopBiteAnimation.update();

        this.catLosesText.update();
        this.catWinsText.update();

        this.updateState();
    }

    draw() {
        this.drawBackground();
        this.drawButtons();

        this.catPortrait.draw();
        this.catName.draw();
        this.catHp.draw();
        this.catRectangle.draw();
        this.catPixelAnimation.draw();
        this.catAttackDamageText.draw();

        this.opponent.drawPortrait();
        this.opponentName.draw();
        this.opponentHp.draw();
        this.opponentRectangle.draw();
        this.opponentPixelAnimation.draw();
        this.opponentAttackDamageText.draw();

        this.catLeftClawAnimation.draw();
        this.catRightClawAnimation.draw();
        this.catBottomBiteAnimation.draw();
        this.catTopBiteAnimation.draw();

        this.catLosesText.draw();
        this.catWinsText.draw();
    }

    updateState() {
        switch (this.state) {
            case "AttackSelection":
                break;
            case "ClawState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "ClawState2";
                    this.catRightClawAnimation.load();
                    this.catAttackDamageText.setDamage(this.cat.clawAttack());
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_15);
                }
                break;
            case "ClawState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "ClawState3";
                    this.catLeftClawAnimation.load();
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_15);
                }
                break;
            case "ClawState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "BiteState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "BiteState2";
                    this.catTopBiteAnimation.load();
                    this.catBottomBiteAnimation.load();
                    this.catAttackDamageText.setDamage(this.cat.biteAttack(this.opponent));
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "BiteState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "BiteState3";
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "BiteState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "PounceState2";
                    this.catTopBiteAnimation.load();
                    this.catBottomBiteAnimation.load();
                    this.catAttackDamageText.setDamage(this.cat.pounceAttack(this.opponent));
                    if (this.opponent.getOpponent().currentHp < 1) {
                        setTimeout(() => this.catWinsText.show(), 500);
                    }
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState2":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "PounceState3";
                    this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_STATE_CAT_FORWARD_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "PounceState3":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState1";
                    this.catPixelAnimation.move(cfg.BATTLE_CAT_PIXEL_X, cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState1":
                if (!this.catPixelAnimation.isMoving()) {
                    this.state = "OpponentState2";
                    this.opponentAttackDamageText.setDamage(this.opponent.primaryAttack(this.cat));
                    if (this.cat.getCat().currentHp < 1) {
                        setTimeout(() => this.catLosesText.show(), 500);
                    }
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState2":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "OpponentState3";
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y - 110, cfg.BATTLE_PIXEL_SPEED_20);
                }
                break;
            case "OpponentState3":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "OpponentState4";
                    this.opponentPixelAnimation.move(cfg.BATTLE_OPPONENT_ATTACK_X, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            case "OpponentState4":
                if (!this.opponentPixelAnimation.isMoving()) {
                    this.state = "AttackSelection";
                    this.catPixelAnimation.restoreSize();
                    this.opponentPixelAnimation.move(Game.getWidth() - 360, cfg.BATTLE_CAT_PIXEL_Y + 40, cfg.BATTLE_PIXEL_SPEED_10);
                }
                break;
            default:
        }
    }

    drawButtons() {
        this.drawButton("green", Game.getCache("battleLeftButtonX"), Game.getCache("battleBottomButtonY"));
        this.drawButton("yellow", Game.getCache("battleRightButtonX"), Game.getCache("battleBottomButtonY"));
        this.drawButton("green", Game.getCache("battleLeftButtonX"), Game.getCache("battleTopButtonY"));
        this.drawButton("green", Game.getCache("battleRightButtonX"), Game.getCache("battleTopButtonY"));

        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, Game.getCache("battleLeftButtonX"), Game.getCache("battleBottomButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, Game.getCache("battleRightButtonX"), Game.getCache("battleBottomButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, Game.getCache("battleLeftButtonX"), Game.getCache("battleTopButtonY"));
        this.drawButtonOutline(this.BATTLE_BUTTON_OUTLINE_COLOR, Game.getCache("battleRightButtonX"), Game.getCache("battleTopButtonY"));

        this.drawSymbol(this.claw, Game.getCache("battleClawSymbolX"), Game.getCache("battleClawSymbolY"), cfg.BATTLE_CLAW_SYMBOL_WIDTH, cfg.BATTLE_CLAW_SYMBOL_HEIGHT);
        this.drawSymbol(this.pounce, Game.getCache("battlePounceSymbolX"), Game.getCache("battlePounceSymbolY"), cfg.BATTLE_POUNCE_SYMBOL_WIDTH, cfg.BATTLE_POUNCE_SYMBOL_HEIGHT);
        this.drawSymbol(this.bite, Game.getCache("battleBiteSymbolX"), Game.getCache("battleBiteSymbolY"), cfg.BATTLE_BITE_SYMBOL_WIDTH, cfg.BATTLE_BITE_SYMBOL_HEIGHT);
        this.drawSymbol(this.puff, Game.getCache("battlePuffSymbolX"), Game.getCache("battlePuffSymbolY"), cfg.BATTLE_PUFF_SYMBOL_WIDTH, cfg.BATTLE_PUFF_SYMBOL_HEIGHT);
    }

    drawBackground() {
        Game.getCtx().drawImage(
            this.image,
            0,
            0,
            Game.getWidth(),
            Game.getHeight(),
            0,
            0,
            Game.getWidth() * 2,
            Game.getHeight() * 2);
    }

    drawButton(color, x, y) {
        Game.getCtx().beginPath();
        Game.getCtx().arc(x, y, 100, 0, 2 * Math.PI);
        Game.getCtx().fillStyle = color;
        Game.getCtx().fill();
    }

    drawButtonOutline(color, x, y) {
        Game.getCtx().beginPath();
        Game.getCtx().arc(x, y, 100, 0, 2 * Math.PI);
        Game.getCtx().strokeStyle = color;
        Game.getCtx().lineWidth = 10;
        Game.getCtx().stroke();
    }

    drawSymbol(image, x, y, sw, sh) {
        Game.getCtx().drawImage(image, 0, 0, 500, 500, x, y, sw, sh);
    }

    notify(x, y) {
        if (this.state != "AttackSelection") {
            return;
        }
        console.log("ACTUAL: [" + x + ", " + y + "]");
        console.log("CLAW TARGET X [" + (Game.getCache("battleLeftButtonX") - 205) + ", " + (Game.getCache("battleLeftButtonX") + 5) + "]");
        console.log("CLAW TARGET Y [" + (Game.getCache("battleTopButtonY") - 220) + ", " + (Game.getCache("battleTopButtonY") - 10) + "]");
        //if (x > Game.getCache("battleLeftButtonX") - 220 && x < Game.getCache("battleLeftButtonX") - 60 &&
        //    y > Game.getCache("battleTopButtonY") - 220 && y < Game.getCache("battleTopButtonY") - 60) {
        if (Game.getCache("battleLeftButtonX") - 105 < x && x < Game.getCache("battleLeftButtonX") + 105 &&
            Game.getCache("battleTopButtonY") - 105 < y && y < Game.getCache("battleTopButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [CLAW] [" + x + ", " + y + "]");
            this.state = "ClawState1";
            this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_30);
            return;
        }
        if (Game.getCache("battleRightButtonX") - 105 < x && x < Game.getCache("battleRightButtonX") + 105 &&
            Game.getCache("battleTopButtonY") - 105 < y && y < Game.getCache("battleTopButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [POUNCE] [" + x + ", " + y + "]");
            this.state = "PounceState1";
            this.catPixelAnimation.move((Game.getWidth() / 2) - 200, -50, cfg.BATTLE_PIXEL_SPEED_15);
            return;
        }
        if (Game.getCache("battleLeftButtonX") - 105 < x && x < Game.getCache("battleLeftButtonX") + 105 &&
            Game.getCache("battleBottomButtonY") - 105 < y && y < Game.getCache("battleBottomButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [BITE] [" + x + ", " + y + "]");
            this.state = "BiteState1";
            this.catPixelAnimation.move(Game.getCache("battleCatAttackX"), cfg.BATTLE_CAT_PIXEL_Y, cfg.BATTLE_PIXEL_SPEED_30);
            return;
        }
        if (Game.getCache("battleRightButtonX") - 105 < x && x < Game.getCache("battleRightButtonX") + 105 &&
            Game.getCache("battleBottomButtonY") - 105 < y && y < Game.getCache("battleBottomButtonY") + 105) {
            console.log("notify() -> Gamer has clicked the mouse on screen [" + this.constructor.name + "] on the [PUFF BIG CAT] [" + x + ", " + y + "]");
            this.battleState = "puffUpState1";
            this.catPixelAnimation.puffUp(10, 15);
            return;
        }
        console.log("notify() - Gamer clicked the mouse randomly [" + this.constructor.name + "] and it did nothing [" + x + ", " + y + "]");
    }
}