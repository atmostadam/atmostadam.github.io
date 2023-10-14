import { Game } from "../Game.js"
import { LoginDeleteRectangleDrawing } from "../login/LoginDeleteRectangleDrawing.js"
import { LoginLoadRectangleDrawing } from "../login/LoginLoadRectangleDrawing.js"
import { LoginNewCatRectangleDrawing } from "../login/LoginNewCatRectangleDrawing.js"

export class LoginLoader {
    constructor() {
        Game.setCacheClass(new LoginDeleteRectangleDrawing());
        Game.setCacheClass(new LoginLoadRectangleDrawing());
        Game.setCacheClass(new LoginNewCatRectangleDrawing());
    }
}