let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.rect(50,50,300,300);
context.strokeStyle = "black";
context.fillStyle = "black";
context.fill();
context.stroke();


context.beginPath();
context.rect(75,75,50,50);
context.rect(275,75,50,50);
context.rect(75,175,50,50);
context.rect(75,225,50,50);
context.rect(125,225,50,50);
context.rect(175,225,50,50);
context.rect(225,225,50,50);
context.rect(175,275,50,50);
context.rect(275,225,50,50);
context.rect(275,175,50,50);



context.strokeStyle = "pink";
context.fillStyle = "pink";
context.fill();

context.stroke();
