class Plinko {
    constructor(x, y, ){
        var options={
            restitution : 0.5,
            isStatic : true,
            friction : 0,
    
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options)
      //  this.color = color(random(0,255), random(0,255), random(0,255))
    World.add(world, this.body)
    
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(ang);
        fill("black");
        ellipseMode(radius)
        ellipse(0, 0, this.r, this.r)
        pop();
    }
    }