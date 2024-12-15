"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

signature(1500, 900, 25);

function signature(xPosition, yPosition, size) {
    context.fillStyle = "pink";
    context.beginPath();
    context.fillRect(xPosition, yPosition, size, size);
    context.fillRect(xPosition + 100, yPosition, size, size);
    context.fillRect(xPosition, yPosition + 50, size, size);
    context.fillRect(xPosition, yPosition + 75, size + 100, size);
    context.fillRect(xPosition + 50, yPosition + 100, size, 25);
    context.fillRect(xPosition + 100, yPosition + 50, size, size);
}