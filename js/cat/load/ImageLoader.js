import { Game } from "../Game.js"

/** Load by img.src. Might give a performance boost if needed to implement later. */
export class ImageLoader {
    constructor() {

    }

loadImage(key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            Game.setCache(key, img);
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;

    return d;
};

getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};
}