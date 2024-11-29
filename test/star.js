"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let xPositions = [];
let yPositions = [];
let starSize = [];

setup();
update();

function setup() {
    for (let i = 0; i < 50; i++) {
        xPositions[i] = Utils.randomNumber(0, width);
        yPositions[i] = Utils.randomNumber(0, height);
        starSize[i] = Utils.randomNumber(0, 20);
    }
}


function update() {
    for (let i = 0; i < 50; i++) {
        drawStar(xPositions[i], yPositions[i], starSize[i]);
    }
}





function drawStar(x, y, size) {
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

