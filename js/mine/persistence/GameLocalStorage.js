import { Game } from "../Game.js";
import { GameValidationException } from "../exception/GameValidationException.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { CatDecorator } from "../model/CatDecorator.js";

export class GameLocalStorage {
    storeCat() {
        var catCache = Game.getCat();
        if (null == catCache) {
            var message = "GameValidationException -> NullPointerException -> Cat Cache Entry is EMPTY! Cannot save game!";
            console.error(message);
            throw new GameValidationException(message);
        }
        var catString = JSON.stringify(catCache);
        if (null == catString) {
            var message = "GameDeveloperException -> JSON Corruption -> Cat Cache Entry is Corrupt! Malformed Json!";
            console.error(message);
            throw new GameDeveloperException(message);
        }
        localStorage.setItem("cat", catString);
    }

    load() {
        return this.loadCat();
    }

    loadCat() {
        var catInLocalStorage = localStorage.getItem("cat");
        if (null == catInLocalStorage) {
            var message = "GameValidationException -> NullPointerException -> Local Storage is EMPTY! Cannot load game!";
            console.error(message);
            throw new GameValidationException(message);
        }
        var catFromJson = JSON.parse(catInLocalStorage);
        if (null == catFromJson) {
            var message = "GameDeveloperException -> JSON Corruption -> Local Storage is Corrupt! Malformed Json!";
            console.error(message);
            throw new GameDeveloperException(message);
        }
        Game.setCache("cat", catFromJson);
        Game.setCacheClass(new CatDecorator(catFromJson));
    }

    containsCat() {
        if (null == localStorage.getItem("cat")) {
            return false;
        }
        return true;
    }

    clear() {
        localStorage.clear();
    }
}