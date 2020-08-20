class Bob{
    constructor(x, y, radius){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':1.5,
        }

        
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill(0, 208, 227);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}