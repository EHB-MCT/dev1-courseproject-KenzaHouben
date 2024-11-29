"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";









drawStar(25, 50, 25);

function drawStar(x, y, size) {
    context.fillStyle = Utils.hsl(Math.random() * 60, 70, 70);
    context.beginPath();
    context.moveTo(size / 2, y);
    context.lineTo(x, y - size);
    context.lineTo(x + 12.5, y);
    context.lineTo(x, y + size);
    context.closePath();
    context.fill();
    context.stroke();
}

