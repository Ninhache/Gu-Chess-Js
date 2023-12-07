import {CANVAS_HEIGHT, CANVAS_WIDTH} from "./config";

export class Canvas {
    private static instance: HTMLCanvasElement;

    public static getCanvas(): HTMLCanvasElement {
        if (!this.instance) {
            this.instance = document.createElement('canvas');
            this.instance.width = CANVAS_WIDTH;
            this.instance.height = CANVAS_HEIGHT;
            document.body.appendChild(this.instance);
        }
        return this.instance;
    }
}
