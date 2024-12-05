"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPositions = [];
let yPositions = [];
let starSize = [];

let golf1 = 0;
let golf2 = 0;
let golf3 = 0;

setup();
update();

drawRect();
function drawRect() {
    // Zorgt voor zwarte achtergrond achter Noise
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

}

function drawStar(x, y, size) {
    // Tekent een ster
    context.strokeStyle = Utils.hsl(Math.random() * 60, 70, 70);
    context.fillStyle = Utils.hsl(Math.random() * 60, 70, 70);
    context.beginPath();
    context.moveTo(x - size / 2, y);
    context.lineTo(x, y - size);
    context.lineTo(x + size / 2, y);
    context.lineTo(x, y + size);
    context.closePath();
    context.fill();
    context.stroke();
}

drawNoorderlicht();
function drawNoorderlicht() {
    // Zorgt voor cirkels die naast elkaar getekend worden. Moet het noorderlicht voorstellen.
    for (let i = 0; i < width + 80; i++) {
        context.strokeStyle = "black";
        context.fillStyle = Utils.hsla(Math.random() * 30 - i, 100, 50, 100);
        let y = Noise.perlinNoise(i / 600) * 400 + 110;
        Utils.fillAndStrokeCircle(i, y, 80, height);
    }
}

drawGolven();
function drawGolven() {
    // Zorgt voor de golven van de oceaan
    // First golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = context.fillStyle = "#7fcdff";
        let y = Noise.perlinNoise(i / 600 + golf1) * 400 + 510;
        context.fillRect(i, y, 10, height);
    }
    // Second golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = " #76b6c4";
        let y = Noise.perlinNoise(i / 600 + golf2) * 400 + 610;
        context.fillRect(i, y, 10, height);
    }
    // Third golf
    for (let i = 0; i < width; i++) {
        context.fillStyle = "#1da2d8";
        let y = Noise.perlinNoise(i / 600 + golf3) * 400 + 710;
        context.fillRect(i, y, 10, height);
    }
}

function setup() {
    // De setup voor de sterren
    for (let i = 0; i < 50; i++) {
        xPositions[i] = Utils.randomNumber(0, width);
        yPositions[i] = Utils.randomNumber(0, height);
        starSize[i] = Utils.randomNumber(0, 20);
    }
}

function update() {
    // Tekent in het begin elke keer een zwarte achtergrond
    drawRect();

    // Tekent telkens de sterren op een willekeurig plek
    for (let i = 0; i < 50; i++) {
        drawStar(xPositions[i], yPositions[i], starSize[i]);
        // xPositions[i] += Utils.randomNumber();
        // yPositions[i] += Utils.randomNumber();
    }

    // Tekent telkens het noorderlicht
    drawNoorderlicht();

    // Tekent telkens de golven + animeert ze
    drawGolven();
    golf1 += 0.1;
    golf2 += 0.2;
    golf3 += 0.3;

    // Zorgt ervoor dat het geanimeerd wordt
    requestAnimationFrame(update);
}

// window.onwheel -> om te scrollen
// vragen wat er bedoeld wordt met signature