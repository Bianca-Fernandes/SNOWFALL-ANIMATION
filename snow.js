class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0.5,
            density: 0.5,
            
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("snow4.webp")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        // var angle = this.body.angle;
 console.log("inSnow");
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 300, 300);
        // rotate(angle);
        pop();
    }
};