import { Cat } from "./../model/Cat.js";

export class BanditCat extends Cat {
    constructor() {
        super(
            "Bandit",
            1,
            0,
            "gray",
            "Aggressive",
            "red",
            10,
            10,
            1,
            4,
            2,
            4,
            5,
            10
        );
    }
}