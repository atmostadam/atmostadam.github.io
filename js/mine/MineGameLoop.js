import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js";
import { MarketColumn } from "./layout/MarketColumn.js";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { Currency } from "./model/Currency.js";
import { Inventory } from "./model/Inventory.js";
import { InventoryDecorator } from "./decorator/InventoryDecorator.js";
import { CurrencyDecorator } from "./decorator/CurrencyDecorator.js";
import { HiddenStateStaticHandler } from "./handler/HiddenStateStaticHandler.js";
import { ScrollingTextHandler } from "./handler/ScrollingTextHandler.js";
import { Log } from "./../common/logger/Log.js";
import { CanvasDecorator } from "./../common/decorator/CanvasDecorator.js";
import { MineConstants } from "./configuration/MineConstants.js";

export class MineGameLoop {
    constructor() {
        new Log(true, true);
        Log.info("Executing prerequiste steps for Game Loop in constructor.", this);

        new HiddenStateStaticHandler();
        new ScrollingTextHandler();

        new InventoryDecorator(new Inventory(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        new CurrencyDecorator(new Currency(0, 0, 0));

        new MineConstants();

        //const margin = 5;

        const headerSize = 60;
        const footerSize = 60;

        //const bodyX = margin;
        //const bodyY = margin + headerSize;

        //const bodyWidth = canvas.width - margin - bodyX;
        //const bodyHeight = canvas.height - margin - footerSize - bodyY;

        //const bodyWidthOneFifth = bodyWidth / 5;
        //const bodyWidthTwoFifths = bodyWidthOneFifth * 2;
        //const bodyWidthThreeFifths = bodyWidthOneFifth * 3;
        //const bodyWidthFourFifths = bodyWidthOneFifth * 4;




        /*
        this.market = new MarketColumn(margin, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smithing = new SmithingColumn(margin + bodyWidthOneFifth, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smelting = new SmeltingColumn(margin + bodyWidthTwoFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.mining = new MiningColumn(margin + bodyWidthThreeFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.inventory = new InventoryColumn(margin + bodyWidthFourFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        */


        this.tick = 0;



        //const margin = 30;

        /*
        const x = CanvasDecorator.geLeft();
        const y = CanvasDecorator.getTop();
        const headFootWidth = CanvasDecorator.getWidth() - (2 * margin);
        const headFootHeight = CanvasDecorator.getHeight() / 10;
        */

        const heightOneTwentieth = CanvasDecorator.getHeight() / 20;
        const widthOneFifth = CanvasDecorator.getWidth() / 5;

        this.header = new Header(
            CanvasDecorator.getLeft(),
            CanvasDecorator.getTop(),
            CanvasDecorator.getWidth(),
            heightOneTwentieth);

        this.footer = new Footer(
            CanvasDecorator.getLeft(),
            CanvasDecorator.getHeight() - heightOneTwentieth,
            CanvasDecorator.getWidth(),
            heightOneTwentieth);

        this.inventory = new InventoryColumn(
            widthOneFifth * 4,
            heightOneTwentieth,
            widthOneFifth,
            CanvasDecorator.getHeight() - (heightOneTwentieth * 2));

        this.mining = new MiningColumn(
            widthOneFifth * 3,
            heightOneTwentieth,
            widthOneFifth,
            CanvasDecorator.getHeight() - (heightOneTwentieth * 2));

        this.smelting = new SmeltingColumn(
            widthOneFifth * 2,
            heightOneTwentieth,
            widthOneFifth,
            CanvasDecorator.getHeight() - (heightOneTwentieth * 2));

        this.smithing = new SmithingColumn(
            widthOneFifth,
            heightOneTwentieth,
            widthOneFifth,
            CanvasDecorator.getHeight() - (heightOneTwentieth * 2));

        this.market = new MarketColumn(
            0,
            heightOneTwentieth,
            widthOneFifth,
            CanvasDecorator.getHeight() - (heightOneTwentieth * 2));
    }

    update(tick) {
        this.tick = tick;
        this.header.update(this.tick);
        this.footer.update(this.tick);
        this.inventory.update(this.tick);
        this.mining.update(this.tick);
        this.smelting.update(this.tick);
        this.smithing.update(this.tick);
        this.market.update(this.tick);
    }

    draw() {
        this.header.drawBackground();
        this.footer.drawBackground();
        this.mining.drawBackground();
        this.inventory.drawBackground();
        this.smelting.drawBackground();
        this.smithing.drawBackground();
        this.market.drawBackground();

        this.header.draw();
        this.footer.draw();
        this.mining.draw();
        this.inventory.draw();
        this.smelting.draw();
        this.smithing.draw();
        this.market.draw();
    }
}
