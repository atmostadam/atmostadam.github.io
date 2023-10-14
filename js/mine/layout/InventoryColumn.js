import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { Drawing } from "./../../common/base/Drawing.js";
import { drawImage, drawText, drawRectangle, drawFilledRectangle } from "./../../common/util/DrawingUtils.js";
import { Log } from "./../../common/logger/Log.js";
import { CanvasContextDecorator } from "./../../common/decorator/CanvasContextDecorator.js";
import { MineConstants } from "./../configuration/MineConstants.js";

export class InventoryColumn extends Drawing {
    constructor(x, y, w, h) {
        super();

        this.color = "#add8e6";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.titleX = this.x + (this.w / 2) - 135;
        this.titleY = this.y + 55;

        this.coinX = this.x + 10;
        this.copperCoinY = 115;
        this.silverCoinY = this.copperCoinY + 50;
        this.goldCoinY = this.silverCoinY + 50;
        this.tinOreY = this.goldCoinY + 50;
        this.copperOreY = this.tinOreY + 50;
        this.ironOreY = this.copperOreY + 50;
        this.tinIngotsY = this.ironOreY + 50;
        this.copperIngotsY = this.tinIngotsY + 50;
        this.bronzeIngotsY = this.copperIngotsY + 50;
        this.ironIngotsY = this.bronzeIngotsY + 50;
        this.tinWeaponsY = this.ironIngotsY + 50;
        this.tinArmorY = this.tinWeaponsY + 50;
        this.copperWeaponsY = this.tinArmorY + 50;
        this.copperArmorY = this.copperWeaponsY + 50;
        this.bronzeWeaponsY = this.copperArmorY + 50;
        this.bronzeArmorY = this.bronzeWeaponsY + 50;
        this.ironWeaponsY = this.bronzeArmorY + 50;
        this.ironArmorY = this.ironWeaponsY + 50;

        this.showCopperCoin = true;
        this.showSilverCoin = true;
        this.showGoldCoin = true;
        this.showTinOre = false;
        this.showCopperOre = false;
        this.showIronOre = false;
        this.showTinIngots = false;
        this.showCopperIngots = false;
        this.showBronzeIngots = false;
        this.showIronIngots = false;
        this.showTinWeapons = false;
        this.showTinArmor = false;
        this.showCopperWeapons = false;
        this.showCopperArmor = false;
        this.showBronzeWeapons = false;
        this.showBronzeArmor = false;
        this.showIronWeapons = false;
        this.showIronArmor = false;

        Log.info("Draw: InventoryColumn Column", this);
    }

    update(tick) {

    }

    draw() {
        var coinW = 365;
        var coinH = 40;

        drawText("Inventory", MineConstants.COLUMN_FONT, MineConstants.COLUMN_COLOR, this.titleX + 50, this.titleY - 20);

        if (this.showCopperCoin) {
            this.drawCoin(document.getElementById("CopperCoin"), CurrencyDecorator.getCopperCoins(),
                this.coinX, this.copperCoinY, coinW, coinH);
        }

        if (this.showSilverCoin) {
            this.drawCoin(document.getElementById("SilverCoin"), CurrencyDecorator.getSilverCoins(),
                this.coinX, this.silverCoinY, coinW, coinH);
        }

        if (this.showGoldCoin) {
            this.drawCoin(document.getElementById("GoldCoin"), CurrencyDecorator.getGoldCoins(),
                this.coinX, this.goldCoinY, coinW, coinH);
        }

        if (this.showTinOre) {
            this.drawOre(InventoryDecorator.getTinOre(), 64, 288, this.coinX, this.tinOreY, coinW, coinH);
        }

        if (this.showCopperOre) {
            this.drawOre(InventoryDecorator.getCopperOre(), 96, 288, this.coinX, this.copperOreY, coinW, coinH);
        }

        if (this.showIronOre) {
            this.drawOre(InventoryDecorator.getIronOre(), 128, 288, this.coinX, this.ironOreY, coinW, coinH);
        }

        if (this.showTinIngots) {
            this.drawIngot(InventoryDecorator.getTinIngots(), 32, 348, this.coinX, this.tinIngotsY, coinW, coinH);
        }

        if (this.showCopperIngots) {
            this.drawIngot(InventoryDecorator.getCopperIngots(), 96, 348, this.coinX, this.copperIngotsY, coinW, coinH);
        }

        if (this.showBronzeIngots) {
            this.drawIngot(InventoryDecorator.getBronzeIngots(), 192, 348, this.coinX, this.bronzeIngotsY, coinW, coinH);
        }

        if (this.showIronIngots) {
            this.drawIngot(InventoryDecorator.getIronIngots(), 128, 348, this.coinX, this.ironIngotsY, coinW, coinH);
        }

        if (this.showTinWeapons) {
            this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getTinWeapons(),
                this.coinX, this.tinWeaponsY, coinW, coinH);
        }

        if (this.showTinArmor) {
            this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getTinArmor(),
                this.coinX, this.tinArmorY, coinW, coinH);
        }

        if (this.showCopperWeapons) {
            this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getCopperWeapons(),
                this.coinX, this.copperWeaponsY, coinW, coinH);
        }

        if (this.showCopperArmor) {
            this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getCopperArmor(),
                this.coinX, this.copperArmorY, coinW, coinH);
        }

        if (this.showBronzeWeapons) {
            this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getBronzeWeapons(),
                this.coinX, this.bronzeWeaponsY, coinW, coinH);
        }

        if (this.showBronzeArmor) {
            this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getBronzeArmor(),
                this.coinX, this.bronzeArmorY, coinW, coinH);
        }

        if (this.showIronWeapons) {
            this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getIronWeapons(),
                this.coinX, this.ironWeaponsY, coinW, coinH);
        }

        if (this.showIronArmor) {
            this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getIronArmor(),
                this.coinX, this.ironArmorY, coinW, coinH);
        }
    }

    drawBackground() {
        this.drawFilledRectangleLoaded();
        CanvasContextDecorator.drawImage(
            document.getElementById("Backpack"),
            0,
            0,
            442,
            626,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

    drawCoin(image, amount, x, y, w, h) {
        drawFilledRectangle("white", x, y, w, h);
        drawRectangle(3, "green", x, y, w, h);

        drawImage(
            image,
            0,
            0,
            32,
            32,
            x,
            y - 5,
            48,
            48
        );

        drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawOre(amount, ix, iy, x, y, w, h) {
        drawFilledRectangle("white", x, y, w, h);
        drawRectangle(3, "green", x, y, w, h);

        drawImage(
            document.getElementById("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y,
            48,
            48
        );

        drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawIngot(amount, ix, iy, x, y, w, h) {
        drawFilledRectangle("white", x, y, w, h);
        drawRectangle(3, "green", x, y, w, h);

        drawImage(
            document.getElementById("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y - 10,
            48,
            48
        );

        drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawWeapon(image, amount, x, y, w, h) {
        drawFilledRectangle("white", x, y, w, h);
        drawRectangle(3, "green", x, y, w, h);

        drawImage(
            image,
            0,
            0,
            32,
            32,
            x + 7,
            y + 5,
            32,
            32
        );

        drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }

    drawArmor(image, amount, x, y, w, h) {
        drawFilledRectangle("white", x, y, w, h);
        drawRectangle(3, "green", x, y, w, h);

        drawImage(
            image,
            0,
            0,
            32,
            32,
            x + 7,
            y + 5,
            32,
            32
        );

        drawText(amount, "32pt Arial", "black", x + 48, y + 36);
    }
}