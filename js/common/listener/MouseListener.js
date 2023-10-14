import { GameContext } from "./../context/GameContext.js";
import { Log } from "./../logger/Log.js";
import { CanvasDecorator } from "../decorator/CanvasDecorator.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = CanvasDecorator.getCanvas().getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            GameContext.getClickSubscribers().forEach(c => { c.onClick(x, y); });
        });
    }
}