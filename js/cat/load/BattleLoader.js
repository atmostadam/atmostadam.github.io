import { Game } from "../Game.js"
import { CatAttackDamageText } from "../battle/CatAttackDamageText.js";
import { CatBottomBiteAnimation } from "../battle/CatBottomBiteAnimation.js";
import { CatHpText } from "../battle/CatHpText.js";
import { CatLeftClawAnimation } from "../battle/CatLeftClawAnimation.js";
import { CatNameText } from "../battle/CatNameText.js";
import { CatPixelAnimation } from "../battle/CatPixelAnimation.js";
import { CatPortraitDrawing } from "../battle/CatPortraitDrawing.js";
import { CatRectangleDrawing } from "../battle/CatRectangleDrawing.js";
import { CatRightClawAnimation } from "../battle/CatRightClawAnimation.js";
import { CatTopBiteAnimation } from "../battle/CatTopBiteAnimation.js";
import { OpponentAttackDamageText } from "../battle/OpponentAttackDamageText.js";
import { OpponentHpText } from "../battle/OpponentHpText.js";
import { OpponentPixelAnimation } from "../battle/OpponentPixelAnimation.js";
import { OpponentPortraitDrawing } from "../battle/OpponentPortraitDrawing.js";
import { OpponentRectangleDrawing } from "../battle/OpponentRectangleDrawing.js";
import { OpponentNameText } from "../battle/OpponentNameText.js";
import { CatLosesText } from "../battle/CatLosesText.js";
import { CatWinsText } from "../battle/CatWinsText.js";
import * as cfg from "../config/GameConfiguration.js";

export class BattleLoader {
    constructor() {
        Game.setCache("battleWidth", Game.getWidth() - (2 * cfg.BATTLE_ANCHOR_X));
        Game.setCache("battleHeight", Game.getHeight() - (2 * cfg.BATTLE_ANCHOR_Y));
        Game.setCache("battleWidthInEigths", (Game.getWidth() - (cfg.BATTLE_ANCHOR_X * 2)) / 8);
        Game.setCache("battleHeightInEigths", (Game.getHeight() - (cfg.BATTLE_ANCHOR_Y * 2)) / 8);

        Game.setCache("battleLeftButtonX", cfg.BATTLE_ANCHOR_X + (Game.getCache("battleWidthInEigths") * 3));
        Game.setCache("battleRightButtonX", cfg.BATTLE_ANCHOR_X + (Game.getCache("battleWidthInEigths") * 5));
        Game.setCache("battleTopButtonY", cfg.BATTLE_ANCHOR_Y + (Game.getCache("battleHeightInEigths") * 5));
        Game.setCache("battleBottomButtonY", cfg.BATTLE_ANCHOR_Y + (Game.getCache("battleHeightInEigths") * 7));

        Game.setCache("battleClawSymbolX", Game.getCache("battleLeftButtonX") - 78);
        Game.setCache("battleClawSymbolY", Game.getCache("battleTopButtonY") - 78);

        Game.setCache("battlePounceSymbolX", Game.getCache("battleRightButtonX") - 175);
        Game.setCache("battlePounceSymbolY", Game.getCache("battleTopButtonY") - 160);

        Game.setCache("battleBiteSymbolX", Game.getCache("battleLeftButtonX") - 74);
        Game.setCache("battleBiteSymbolY", Game.getCache("battleBottomButtonY") - 74);

        Game.setCache("battlePuffSymbolX", Game.getCache("battleRightButtonX") - 100);
        Game.setCache("battlePuffSymbolY", Game.getCache("battleBottomButtonY") - 100);

        Game.setCache("battleCatAttackX", Game.getWidth() - cfg.BATTLE_ANCHOR_X - cfg.PORTRAIT_WH + 40);

        Game.setCache("battleCatNameTextY", Game.getHeight() - cfg.BATTLE_ANCHOR_Y);

        Game.setCache("battleOpponentPixelX", Game.getWidth() - 350);
        Game.setCache("battleOpponentHpTextX", Game.getWidth() - cfg.BATTLE_ANCHOR_X - (cfg.PORTRAIT_WH / 2));
        Game.setCache("battleOpponentNameTextX", Game.getWidth() - cfg.PORTRAIT_WH);
        Game.setCache("battleOpponentPortraitDrawingX", Game.getWidth() - cfg.BATTLE_ANCHOR_X - cfg.PORTRAIT_WH);
        Game.setCache("battleOpponentRectangleDrawingX", Game.getWidth() - cfg.BATTLE_PORTRAIT_OPPONENT_X);

        Game.setCacheClass(new CatAttackDamageText());
        Game.setCacheClass(new CatBottomBiteAnimation());
        Game.setCacheClass(new CatHpText());
        Game.setCacheClass(new CatLeftClawAnimation());
        Game.setCacheClass(new CatNameText());
        Game.setCacheClass(new CatPixelAnimation());
        Game.setCacheClass(new CatPortraitDrawing());
        Game.setCacheClass(new CatRectangleDrawing());
        Game.setCacheClass(new CatRightClawAnimation());
        Game.setCacheClass(new CatTopBiteAnimation());
        Game.setCacheClass(new OpponentAttackDamageText());
        Game.setCacheClass(new OpponentHpText());
        Game.setCacheClass(new OpponentNameText());
        Game.setCacheClass(new OpponentPixelAnimation());
        Game.setCacheClass(new OpponentPortraitDrawing());
        Game.setCacheClass(new OpponentRectangleDrawing());
        Game.setCacheClass(new CatLosesText());
        Game.setCacheClass(new CatWinsText());
    }
}