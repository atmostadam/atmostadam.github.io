import { Drawing } from "./Drawing.js";

export class Hideable extends Drawing {
    constructor(hidden) {
        super();

        this.hidden = hidden;
    }

    hide() {
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }

    isHidden() {
        return this.hidden;
    }
}