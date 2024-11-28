"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawStar();

function drawStar(x, y, hue) {
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(200, 200, 250, 250);
    context.lineTo(250, 250, 300, 300);
    context.lineTo(150, 250, 200, 200);
    context.stroke();
}

