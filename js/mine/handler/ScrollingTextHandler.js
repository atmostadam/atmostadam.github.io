export class ScrollingTextHandler {
    constructor() {
        if (!ScrollingTextHandler.instance) {
            ScrollingTextHandler.instance = this;
        }

        this.textBacklog = [
            ["Mine as much as you can to...", "green"],
            ["Unlock new metallurgy gameplay!", "green"],
            ["Hello Rachel!", "purple"],
            ["Hello Nathan!", "blue"],
            ["Welcome to my game!", "green"]
        ];
        this.text = "Click the green highlighted rock!";
        this.textColor = "green";
        return ScrollingTextHandler.instance;
    }

    static addText(textValue, textColor) {
        if (null == ScrollingTextHandler.instance.text) {
            ScrollingTextHandler.instance.text = textValue;
            ScrollingTextHandler.instance.textColor = textColor;
            return;
        }
        ScrollingTextHandler.instance.textBacklog.push([textValue, textColor]);
    }

    updateText() {
        if (this.text == null && this.textBacklog.length == 0) {
            return null;
        }
        if (this.text == null && this.textBacklog.length != 0) {
            this.next();
        }
    }

    next() {
        if (this.textBacklog.length == 0) {
            this.text = null;
            this.textColor = null;
            return;
        }
        var [t, tc] = this.textBacklog.shift();
        this.text = t;
        this.textColor = tc;
    }

    static getInstance() {
        return ScrollingTextHandler.instance;
    }
}