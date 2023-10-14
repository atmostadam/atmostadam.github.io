import { GameContext } from "./common/context/GameContext.js";
import { GameChoice } from "./GameChoice.js";

window.addEventListener("load", function () {
    var lastTime = performance.now();
    const minMsPerFrame = 1000 / 60;
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    new GameContext(canvas, canvasContext);
    new GameChoice(canvas, canvasContext);
    var tick = 0;

    function animate() {
        try {
            const time = performance.now();
            const sixtyFps = (time - lastTime) > minMsPerFrame;

            if (sixtyFps) {
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                GameContext.get("GameLoop").update(++tick);
                GameContext.get("GameLoop").draw();
            }

            window.requestAnimationFrame(animate);

            if (sixtyFps) {
                lastTime = time;
            }
        } catch (e) {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            console.error("[FATAL] APPLICATION HAS CRASHED!", e, this);
            throw e;
        }
    }
    animate();
});