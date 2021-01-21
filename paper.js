class Paper{
    constructor(x, y, radius){
        var options ={
            restitution:0.3,
            isStatic:false,
            friction: 0,
            density:1.3
        }
        this.image = loadImage("paper.png");        
        this.x = x;
        this.y = y;
        this.radius = radius;    
        
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);        
        image(this.image,0, 0, this.radius, this.radius);
        pop();
    }
}