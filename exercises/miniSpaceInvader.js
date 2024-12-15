"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

signature();

function signature() {
    context.fillStyle = "pink";
    context.beginPath();
    context.fillRect(1500, 900, 25, 25);
    context.fillRect(1600, 900, 25, 25);
    context.fillRect(1500, 950, 25, 25);
    context.fillRect(1500, 975, 125, 25);
    context.fillRect(1550, 1000, 25, 25);
    context.fillRect(1600, 950, 25, 25);
}