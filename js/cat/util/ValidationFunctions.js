import { GameValidationException } from "../exception/GameValidationException.js";

export function requireNotNull(name, value) {
    if (null == name || null == value) {
        throw new GameValidationException("GameValidationException -> [" + name + "] [" + value + "] instance argument cannot be null!", "ValidationFunctions.js", 5);
    }
    return value;
}

export function requireNumber(name, value) {
    requireNotNull(name, value);
    if (isNaN(value)) {
        //throw new GameValidationException("GameValidationException -> [" + name + "] [" + value + "] instance argument is not a number!", "ValidationFunctions.js", 13);
        return 0;
    }
    return value;
}

export function requireGame(game) {
    return requireNotNull("game", game);
}

export function requireContext(ctx) {
    return requireNotNull("ctx", ctx);
}

export function requireImage(id) {
    requireNotNull("id", id);
    if (id instanceof HTMLImageElement) {
        return id;
    }
    const image = document.getElementById(id);
    if (null == image) {
        throw new GameValidationException("GameValidationException -> Search by Image Element id [" + id + "] results in a null!", "ValidationFunctions.js", 33);
    }
    return image;
}