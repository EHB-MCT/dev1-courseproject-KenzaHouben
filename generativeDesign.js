function setup() {
    createCanvas(800, 800);
    background(255);
    noFill();
    stroke(0, 50);
}

function draw() {
    translate(width / 2, height / 2); // Move the origin to the center
    let radius = 300;
    for (let i = 0; i < 100; i++) {
        let angle = map(i, 0, 100, 0, TWO_PI);
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        ellipse(x, y, 50, 50); // Draw circles in a circular pattern
    }
    noLoop(); // Static drawing
}