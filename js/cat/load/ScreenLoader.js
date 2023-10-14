import { Game } from "../Game.js"
import { TitleScreen } from "../screen/TitleScreen.js";
import { RachelScreen } from "../screen/RachelScreen.js";
import { NathanScreen } from "../screen/NathanScreen.js";
import { DadScreen } from "../screen/DadScreen.js";
import { MomScreen } from "../screen/MomScreen.js";
import { LoginScreen } from "../screen/LoginScreen.js";
import { CatSelectionScreen } from "../screen/CatSelectionScreen.js";
import { WorldScreen } from "../screen/WorldScreen.js";
import { BattleScreen } from "../screen/BattleScreen.js";

export class ScreenLoader {
    constructor() {
        /** init */
        var titleScreen = new TitleScreen();
        var rachelScreen = new RachelScreen();
        var nathanScreen = new NathanScreen();
        var dadScreen = new DadScreen();
        var momScreen = new MomScreen();
        var loginScreen = new LoginScreen();
        var catSelectionScreen = new CatSelectionScreen();
        var worldScreen = new WorldScreen();
        var battleScreen = new BattleScreen();

        /** load */
        Game.setCacheClass(titleScreen.load());
        Game.setCacheClass(rachelScreen.load());
        Game.setCacheClass(nathanScreen.load());
        Game.setCacheClass(dadScreen.load());
        Game.setCacheClass(momScreen.load());
        Game.setCacheClass(loginScreen.load());
        Game.setCacheClass(catSelectionScreen);
        Game.setCacheClass(worldScreen);
        Game.setCacheClass(battleScreen);
    }
}