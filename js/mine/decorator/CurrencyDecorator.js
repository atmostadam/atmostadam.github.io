export class CurrencyDecorator {
    constructor(currency) {
        if (!CurrencyDecorator.instance) {
            CurrencyDecorator.instance = this;
        }
        this.currency = currency;
        return CurrencyDecorator.instance;
    }

    static getCopperCoins() {
        return this.instance.currency.copperCoins;
    }

    static getSilverCoins() {
        return this.instance.currency.silverCoins;
    }

    static getGoldCoins() {
        return this.instance.currency.goldCoins;
    }

    addCopperCoins(amount) {
        this.currency.copperCoins += amount;
    }

    addSilverCoins(amount) {
        this.currency.silverCoins += amount;
    }

    addGoldCoins(amount) {
        this.currency.goldCoins += amount;
    }

    removeCopperCoins(amount) {
        this.currency.copperCoins -= amount;
    }

    removeSilverCoins(amount) {
        this.currency.silverCoins -= amount;
    }

    removeGoldCoins(amount) {
        this.currency.goldCoins -= amount;
    }

    static getInstance() {
        return CurrencyDecorator.instance;
    }
}