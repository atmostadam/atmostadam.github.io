import { Game } from "./../Game.js";
import * as cfg from "./../config/GameConfiguration.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = Game.getCanvas().getBoundingClientRect();
            console.log("Gamer clicked [clientX=" + e.clientX + " : clientY=" + e.clientY + "]. Offset [rect.left=" + rect.left + ", rect.top=" + rect.top + "]");
            Game.getInstance().currentScreen.notify(e.clientX - rect.left, e.clientY - rect.top);
        });
    }
}