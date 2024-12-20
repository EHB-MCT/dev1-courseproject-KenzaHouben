"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
let golf1a = 0;
let golf1b = 0;
let stars = [];
let waveH = 400;
let northL = 400;
let offSet = 0;


setup();
update();

window.onwheel = scrollMovement;
window.onmousemove = mouseMovement;

function setup() {
    // De setup voor de sterren
    for (let i = 0; i < 45; i++) {
        let star = {
            xPosition: Utils.randomNumber(0, width),
            yPosition: Utils.randomNumber(0, height),
            starSize: Utils.randomNumber(0, 20)
        };
        stars.push(star);
    }
}

function update() {
    // Tekent in het begin elke keer een zwarte achtergrond
    drawRect();

    // Tekent telkens de sterren op een willekeurig plek
    for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i].xPosition, stars[i].yPosition, stars[i].starSize);
        stars[i].xPosition += Utils.randomNumber(-5, -1);
        stars[i].yPositions += Utils.randomNumber(-2, 2);
        if (stars[i].xPosition < 0) {
            // Zorgt ervoor dat de sterren terug beginnen in het begin op een natuurlijke manier
            stars[i].xPosition = width + 10;
            stars[i].yPosition = Utils.randomNumber(0, height);
        }
    }
    // Tekent telkens het noorderlicht
    drawNoorderlicht();
    // Tekent telkens de golven + animeert ze
    drawGolven();
    golf1a += 0.01;
    golf1b += 0.05;

    // spaceInvader wordt hier opgeroepen
    signature(1500, 900, 25);

    // Zorgt ervoor dat het geanimeerd wordt
    requestAnimationFrame(update);
}

function signature(xPosition, yPosition, size) {
    context.fillStyle = "pink";
    context.beginPath();
    context.fillRect(xPosition, yPosition, size, size);
    context.fillRect(xPosition + 100, yPosition, size, size);
    context.fillRect(xPosition, yPosition + 50, size, size);
    context.fillRect(xPosition, yPosition + 75, size + 100, size);
    context.fillRect(xPosition + 50, yPosition + 100, size, size);
    context.fillRect(xPosition + 100, yPosition + 50, size, size);
}

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
        context.fillStyle = Utils.hsla(Math.random() * 30 - i + offSet * 500, 100, 50, 100);
        let y = Noise.perlinNoise(i / 600 + offSet) * northL + 110;
        Utils.fillAndStrokeCircle(i, y, 80, height);
    }
}

drawGolven();
function drawGolven() {
    // Zorgt voor de golven van de oceaan
    for (let j = 0; j < 4; j++) {
        context.fillStyle = Utils.hsl(210, 50, 30 + j * 10);
        for (let i = 0; i < width; i++) {
            let y = Noise.perlinNoise(i / 600 + golf1a + j * 100) * waveH + 510 + j * 50;
            y += Noise.perlinNoise(i / 300 + golf1b) * 100;
            context.fillRect(i, y, 10, height);
        }
    }
}

/**
 * 
 * @param {WheelEvent} e 
 */
function scrollMovement(e) {
    // Noorderlicht
    console.log(northL + " --- " + e.deltaY);
    if (northL >= 550 && e.deltaY < 0) {
        northL += e.deltaY;
    } else if (northL <= 50 && e.deltaY > 0) {
        northL += e.deltaY;
    } else if (northL > 50 && northL < 550) {
        northL += e.deltaY;
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function mouseMovement(e) {
    console.log(e.pageX);
    // Noorderlicht
    offSet = e.pageX / 1000;
    // Golven
    waveH = e.pageY - 200;

}