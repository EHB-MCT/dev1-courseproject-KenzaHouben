"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();
function draw() {
    // Zorgt voor zwarte achtergrond achter Noise
    context.fillRect(0, 0, width, height);
    drawCircleNoise();
}

function drawCircleNoise() {



    // Zorgt voor cirkels die naast elkaar getekend worden. Moet het noorderlicht voorstellen.
    for (let i = 0; i < width; i++) {
        context.fillStyle = context.fillStyle = Utils.hsla(Math.random() * 30 - i, 100, 50, 100);
        let y = Noise.perlinNoise(i / 600) * 400 + 110;
        Utils.fillAndStrokeCircle(i, y, 80, height);
    }

    // Zorgt voor de golven van de oceaan.
    // First golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = context.fillStyle = "#7fcdff";
        let y = Noise.perlinNoise(i / 600) * 400 + 510;
        context.fillRect(i, y, 10, height);
    }

    // Second golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = " #76b6c4";
        let y = Noise.perlinNoise(i / 600) * 400 + 610;
        context.fillRect(i, y, 10, height);
    }

    // Third golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = " 	#1da2d8";
        let y = Noise.perlinNoise(i / 600) * 400 + 710;
        context.fillRect(i, y, 10, height);
    }
}