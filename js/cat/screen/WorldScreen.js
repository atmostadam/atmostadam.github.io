import { Drawing } from "../api/Drawing.js";
import { Game } from "./../Game.js";
import { ChickenOpponent } from "../opponents/ChickenOpponent.js";
import { SnakeOpponent } from "../opponents/SnakeOpponent.js";
import { SquirrelOpponent } from "../opponents/SquirrelOpponent.js";
import { WorldFirstLayer } from "../world/WorldFirstLayer.js";
import { WorldSecondLayer } from "../world/WorldSecondLayer.js";
import { WorldThirdLayer } from "../world/WorldThirdLayer.js";
import { WorldFourthLayer } from "../world/WorldFourthLayer.js";
import { WorldSeventhLayer } from "../world/WorldSeventhLayer.js";
import { WorldEigthLayer } from "../world/WorldEigthLayer.js";

export class WorldScreen extends Drawing {
    constructor() {
        super();
    }

    load() {
        this.firstLayer = new WorldFirstLayer(); // Ground
        this.secondLayer = new WorldSecondLayer(); // Walk on top of tiles
        this.thirdLayer = new WorldThirdLayer(); // Collision tiles
        this.fourthLayer = new WorldFourthLayer(); // NPC sprites
        this.opponent = new ChickenOpponent().load(super.getRandom(50, 1850), super.getRandom(50, 1000));  // Opponent Sprites
        this.cat = Game.getCache("CatDecorator");
        this.seventhLayer = new WorldSeventhLayer();  // Walk behind tile
        this.eigthLayer = new WorldEigthLayer(); // Tile on top of tile


        this.chicken = new ChickenOpponent().load(super.getRandom(50, 1850), super.getRandom(50, 1000));
        this.snake = new SnakeOpponent().load(super.getRandom(50, 1850), super.getRandom(50, 1000));
        this.squirrel = new SquirrelOpponent().load(super.getRandom(50, 1850), super.getRandom(50, 1000));


        //this.map = new WorldMap();
        //this.cat = new WorldCat(this.map, 12, 12);
        //this.camera = new WorldCamera(this.map, 32, 32);
        //this.map.load(this.camera);
        //this.camera.follow(this.cat);

        //this.cat = Game.getCache("WorldCatPixelDrawing").load();  // Cat Sprites


        //this.seventhLayer = new WorldSeventhLayer();  // Walk behind tile
        //this.eigthLayer = new WorldEigthLayer(); // Tile on top of tile
        return this;
    }

    update() {
        this.input = Game.getCache("KeyboardListener").keys;

        var dirx = 0;
        var diry = 0;

        if (this.input.includes("ArrowLeft") || this.input.includes("a")) { dirx = -1; }
        if (this.input.includes("ArrowRight") || this.input.includes("d")) { dirx = 1; }
        if (this.input.includes("ArrowUp") || this.input.includes("w")) { diry = -1; }
        if (this.input.includes("ArrowDown") || this.input.includes("s")) { diry = 1; }

        this.firstLayer.update();
        this.secondLayer.update();
        this.thirdLayer.update();
        this.fourthLayer.update();
        this.opponent.update();
        this.chicken.update();
        this.snake.update();
        this.squirrel.update();
        this.cat.update(dirx, diry);
        this.seventhLayer.update();
        this.eigthLayer.update();
    }

    draw() {
        this.firstLayer.draw();
        this.secondLayer.draw();
        this.thirdLayer.draw();
        this.fourthLayer.draw();
        this.opponent.draw();
        this.chicken.draw();
        this.snake.draw();
        this.squirrel.draw();
        this.cat.drawWorld();
        this.seventhLayer.draw();
        this.eigthLayer.draw();
    }
}