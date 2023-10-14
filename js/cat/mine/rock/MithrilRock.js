import { Drawing } from "../../api/Drawing.js"

export class MithrilRock extends Drawing {
    constructor() {
        super();

        this.image = super.getImage("MineSpritesheet1");
    }

    draw() {
        super.drawImage(
            this.image,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
        );
    }
}