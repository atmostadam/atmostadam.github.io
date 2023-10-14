export class HiddenStateStaticHandler {
    constructor() {
        HiddenStateStaticHandler.state = new Map();
    }

    static show(className) {
        HiddenStateStaticHandler.state.set(className, false);
    }

    static hide(className) {
        HiddenStateStaticHandler.state.set(className, true);
    }

    static isHidden(className) {
        if (!(HiddenStateStaticHandler.state.has(className))) {
            HiddenStateStaticHandler.state.set(className, true);
        }
        return HiddenStateStaticHandler.state.get(className);
    }
}