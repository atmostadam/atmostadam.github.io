import { GameDeveloperException } from "../exception/GameDeveloperException.js";

/**
 * Return true if n between min and max else false.
 * 
 * @param {number} n The number to validate
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 * @returns true if between the numbers else false
 */
export function between(n, min, max) {
    if (n > min && n < max) {
        return true;
    }
    return false;
}

/**
 * Checks the rectangle's expected x, y, w and h to see if the user's click x and click y
 * are within the bounds of the expected click area.
 * 
 * @param {number} clickX       The actual x location of where the user clicked on the canvas.
 * @param {number} clickY       The actual y location of where the user clicked on the canvas.
 * @param {number} expectX      The x start position of the rectangle expected click area.
 * @param {number} expectY      The y start position of the rectangle expected click area.
 * @param {number} expectW      The width of the rectangle's expected click area.
 * @param {number} expectH      The height of the rectangle's expected click area.
 * @returns true if inside else false
 */
export function insideRectangle(clickX, clickY, expectX, expectY, expectW, expectH) {
    var w = expectX + expectW;
    var h = expectY + expectH;

    if (between(clickX, expectX, w) && between(clickY, expectY, h)) {
        var inside = true;
    } else {
        var inside = false;
    }
    return inside;
}

export function randomElementValue(array) {
    if (array.length === 0) {
        throw GameDeveloperException("Empty array passed to randomElementValue()");
    }
    if (array.length === 1) {
        return array[0];
    }
    return array[Math.floor(Math.random() * array.length)];
}

/** Random int between min (inclusive) and max (exclusive). */
export function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}