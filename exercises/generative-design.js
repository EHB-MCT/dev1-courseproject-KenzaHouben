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
    drawNoise();
}

function drawNoise() {

    for (let i = 0; i < width; i++) {
        context.fillStyle = "orange";
        let y = Noise.perlinNoise(i / 250) * 400 + 10;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < height; i++) {
        context.fillStyle = "red";
        let y = Noise.perlinNoise(i / 250) * 400 + 110;
        context.fillRect(i, y, 10, width);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "green";
        let y = Noise.perlinNoise(i / 250) * 400 + 210;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "blue";
        let y = Noise.perlinNoise(i / 250) * 400 + 310;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "yellow";
        let y = Noise.perlinNoise(i / 250) * 400 + 410;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "yellow";
        let y = Noise.perlinNoise(i / 250) * 400 + 510;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "pink";
        let y = Noise.perlinNoise(i / 250) * 400 + 610;
        context.fillRect(i, y, 10, height);
    }

    for (let i = 0; i < width; i++) {
        context.fillStyle = "purple";
        let y = Noise.perlinNoise(i / 250) * 400 + 710;
        context.fillRect(i, y, 10, height);
    }

}
// context.fillStyle = Utils.hsla(Math.random() * 360 - i, 100, 50, 60);