import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";

export class OpponentAttackDamageText extends Hideable {
    constructor() {
        super(true);

        this.font = cfg.BATTLE_SCREEN_FONT;
        this.color = cfg.COLOR_RED;
        this.x = cfg.BATTLE_OPPONENT_ATTACK_DAMAGE_TEXT_X;
        this.y = cfg.BATTLE_ATTACK_DAMAGE_TEXT_Y;
    }

    draw() {
        if (super.isHidden()) {
            return;
        }
        super.drawTextLoaded();
    }

    setDamage(damage) {
        this.show();
        this.text = "-" + damage;
        setTimeout(() => { this.hide(); }, 2000);
    }
}