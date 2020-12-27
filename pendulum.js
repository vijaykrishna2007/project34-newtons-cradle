class pendulum{
    constructor(x, y,color) {
        var options = {
            restitution:1.0,
            friction:0.0,
            frictionAir:0.0,
            slop:1.0,
            inertia:Infinity,
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0, 0,100,100);
        pop();
      }
}