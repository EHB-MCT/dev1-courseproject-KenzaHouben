"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawStar(100, 200);

function drawStar(x, y, size) {
    // context.fillStyle = Utils.hsl(hue, 50, 50);
    context.fillStyle = "yellow";
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 50, y + 50);
    context.lineTo(x + 50, y + 50);
    context.lineTo(x - 50, y - 50);
    context.closePath();
    context.fill();
    context.stroke();
}

// context.fillStyle = "yellow";
// context.beginPath();
// context.moveTo(200, 200);
// context.lineTo(200 + 50, 200 + 50);
// context.lineTo(150 + 50, 250 + 50);
// context.lineTo(200 - 50, 300 - 50);
// context.closePath();
// context.fill();
// context.stroke();