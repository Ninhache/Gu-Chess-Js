import {Board} from "./board";
import {Canvas} from "./canvas";

document.addEventListener('DOMContentLoaded', () => {

    new Board().initialDraw(Canvas.getCanvas());

});
