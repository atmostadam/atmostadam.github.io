import { Game } from "../Game.js";

export class FileLoader {
    constructor() {
        /*
        var file = document.getElementById("myFile").files[0];

        const reader = new FileReader();

        reader.onload = function (e) { Game.setCache("csvMap", e.target.result); };

        reader.readAsText(file);
        */


        /*
        var reader = new FileReader();
        reader.readAsText("dad.csv", function (error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
        */


        var xhr = new XMLHttpRequest();
        xhr.open("GET", "dad.csv");
        xhr.send();

        xhr.onload = function () {
            console.log(xhr.responseText);
            Game.setCache("atlas", xhr.responseText);
            //var properties = ;
            // Do something with the properties
        };
    }
}