class Ground {
    constructor(x, y, width, height){
        var options={
           // restitution : 0.5
         isStatic : true,
    
        }
        this.width = width;
        this.height = height
        this.body = Bodies.rectangle(x, y, this.width, this.height, options)
      //  this.color = color(random(0,255), random(0,255), random(0,255))
    World.add(world, this.body)
    
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push()
        //translate(pos.x, pos.y);
        fill("black");
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)
        pop();
    }
    }