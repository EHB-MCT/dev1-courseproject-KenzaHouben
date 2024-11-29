"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

let golf = 0;

update();

drawRect();
function drawRect() {

    // Zorgt voor zwarte achtergrond achter Noise
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

}

function drawStar(x_star, y_star, size, hue) {


}

drawNoorderlicht();
function drawNoorderlicht() {

    //Tekent de sterren.
    for (let i = 0; i <= 150; i++) {
        let x_star = Math.random() * width + 35;
        let y_star = Math.random() * height + 35;
        context.fillStyle = "white";
        Utils.fillCircle(x_star, y_star, 2);
        drawStar(x_star, y_star, 20, 40);
    }

    // Zorgt voor cirkels die naast elkaar getekend worden. Moet het noorderlicht voorstellen.
    for (let i = 0; i < width + 80; i++) {
        context.fillStyle = context.fillStyle = Utils.hsla(Math.random() * 30 - i, 100, 50, 100);
        let y = Noise.perlinNoise(i / 600) * 400 + 110;
        Utils.fillAndStrokeCircle(i, y, 80, height);
    }

}

drawGolven();
function drawGolven() {
    // Zorgt voor de golven van de oceaan.
    // First golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = context.fillStyle = "#7fcdff";
        let y = Noise.perlinNoise(i / 600 + golf) * 400 + 510;
        context.fillRect(i, y, 10, height);
    }

    // Second golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = " #76b6c4";
        let y = Noise.perlinNoise(i / 600 + golf + 100) * 400 + 610;
        context.fillRect(i, y, 10, height);
    }

    // Third golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = " 	#1da2d8";
        let y = Noise.perlinNoise(i / 600) * 400 + 710;
        context.fillRect(i, y, 10, height);
    }


}

function update() {
    drawRect();
    drawNoorderlicht();
    drawGolven();
    golf1 += 0.1;
    requestAnimationFrame(update);
}

// window.onload
// parameters moeten erbij

