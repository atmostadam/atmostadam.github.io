import { Game } from "./../Game.js";

export class KeyboardListener {
    constructor() {
        this.keys = [];
        this.listenForKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"];
        this.skipableScreens = [];

        window.addEventListener("keydown", e => {
            console.log("keydown --> Trying to push [" + e.key + "]");
            if (

                /*
                (e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "w" ||
                e.key === "a" ||
                e.key === "s" ||
                e.key === "d")
*/

                this.listenForKeys.includes(e.key)
                && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            const currentScreen = Game.getInstance().currentScreen.constructor.name;
            if ("title" === currentScreen ||
                "rachel" === currentScreen ||
                "nathan" === currentScreen ||
                "dad" === currentScreen ||
                "mom" === currentScreen) {
                Game.getInstance().nextScreen();
            }
        });

        window.addEventListener("keyup", e => {
            if (/* e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "w" ||
                e.key === "a" ||
                e.key === "s" ||
                e.key === "d" */
                this.listenForKeys.includes(e.key)
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
    /*
    
        var Keyboard = {};
    
    Keyboard.LEFT = 37;
    Keyboard.RIGHT = 39;
    Keyboard.UP = 38;
    Keyboard.DOWN = 40;
    
    Keyboard._keys = {};
    
    Keyboard.listenForEvents = function (keys) {
        window.addEventListener('keydown', this._onKeyDown.bind(this));
        window.addEventListener('keyup', this._onKeyUp.bind(this));
    
        keys.forEach(function (key) {
            this._keys[key] = false;
        }.bind(this));
    }
    
    Keyboard._onKeyDown = function (event) {
        var keyCode = event.keyCode;
        if (keyCode in this._keys) {
            event.preventDefault();
            this._keys[keyCode] = true;
        }
    };
    
    Keyboard._onKeyUp = function (event) {
        var keyCode = event.keyCode;
        if (keyCode in this._keys) {
            event.preventDefault();
            this._keys[keyCode] = false;
        }
    };
    
    Keyboard.isDown = function (keyCode) {
        if (!keyCode in this._keys) {
            throw new Error('Keycode ' + keyCode + ' is not being listened to');
        }
        return this._keys[keyCode];
    };
    */
}