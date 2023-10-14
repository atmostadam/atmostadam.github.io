import { BanditCat } from "../cats/BanditCat.js";
import { BreezyCat } from "../cats/BreezyCat.js";
import { CocoaCat } from "../cats/CocoaCat.js";
import { CowieCat } from "../cats/CowieCat.js";
import { DottieCat } from "../cats/DottieCat.js";
import { EveCat } from "../cats/EveCat.js";
import { FrostyCat } from "../cats/FrostyCat.js";
import { GanacheCat } from "../cats/GanacheCat.js";
import { GingerCat } from "../cats/GingerCat.js";
import { GozerCat } from "../cats/GozerCat.js";
import { KitkatCat } from "../cats/KitkatCat.js";
import { MarshmellowCat } from "../cats/MarshmellowCat.js";
import { MistyCat } from "../cats/MistyCat.js";
import { PeachesCat } from "../cats/PeachesCat.js";
import { PepperCat } from "../cats/PepperCat.js";
import { SocksCat } from "../cats/SocksCat.js";
import { SpookyCat } from "../cats/SpookyCat.js";
import { SpreeCat } from "../cats/SpreeCat.js";
import { WhiskersCat } from "../cats/WhiskersCat.js";
import { Game } from "../Game.js"

export class CatLoader {
    constructor() {
        Game.setCacheClass(new BanditCat());
        Game.setCacheClass(new BreezyCat());
        Game.setCacheClass(new CocoaCat());
        Game.setCacheClass(new CowieCat());
        Game.setCacheClass(new DottieCat());
        Game.setCacheClass(new EveCat());
        Game.setCacheClass(new FrostyCat());
        Game.setCacheClass(new GanacheCat());
        Game.setCacheClass(new GingerCat());
        Game.setCacheClass(new GozerCat());
        Game.setCacheClass(new KitkatCat());
        Game.setCacheClass(new MarshmellowCat());
        Game.setCacheClass(new MistyCat());
        Game.setCacheClass(new PeachesCat());
        Game.setCacheClass(new PepperCat());
        Game.setCacheClass(new SocksCat());
        Game.setCacheClass(new SpookyCat());
        Game.setCacheClass(new SpreeCat());
        Game.setCacheClass(new WhiskersCat());

        var catsToSelect = [
            Game.getCache("BanditCat"),
            Game.getCache("BreezyCat"),
            Game.getCache("CocoaCat"),
            Game.getCache("CowieCat"),
            Game.getCache("DottieCat"),
            Game.getCache("EveCat"),
            Game.getCache("FrostyCat"),
            Game.getCache("GanacheCat"),
            Game.getCache("GingerCat"),
            Game.getCache("GozerCat"),
            Game.getCache("KitkatCat"),
            Game.getCache("MarshmellowCat"),
            Game.getCache("MistyCat"),
            Game.getCache("PeachesCat"),
            Game.getCache("PepperCat"),
            Game.getCache("SocksCat"),
            Game.getCache("SpookyCat"),
            Game.getCache("SpreeCat"),
            Game.getCache("WhiskersCat")];
        Game.setCache("catsToSelect", catsToSelect);

        for (var i = 0; i < 19; i++) {
            Game.setCacheImage(catsToSelect[i].name.toLowerCase() + "Pixel");
            Game.setCacheImage(catsToSelect[i].name.toLowerCase() + "Portrait");
        }
    }
}