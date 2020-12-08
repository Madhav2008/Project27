class Bob {
    constructor(x, y, diameter) {
        var options = {
            restitution: 1,
            isStatic: false,
            friction: 0,
            density: 0.4,
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.diameter = 30;

        World.add(world, this.body);
    }

    display() {
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        strokeWeight(6);
        stroke("black");
        fill("green");
        circle(0, 0, this.diameter * 2);
        pop();
    }
}