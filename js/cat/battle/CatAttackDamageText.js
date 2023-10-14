import { Hideable } from "../api/Hideable.js";
import * as cfg from "../config/GameConfiguration.js";
import { Game } from "../Game.js";

export class CatAttackDamageText extends Hideable {
    constructor() {
        super(true);

        this.font = cfg.BATTLE_SCREEN_FONT;
        this.color = cfg.COLOR_RED;
        this.y = cfg.BATTLE_ATTACK_DAMAGE_TEXT_Y;
    }

    load() {
        this.x = Game.getCache("battleCatAttackX");
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