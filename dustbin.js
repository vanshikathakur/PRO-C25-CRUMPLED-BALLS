class Dustbin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight=213;
        this.wallThickness = 20;
		this.angle = 0;
		
		this.image = loadImage("dustbingreen.png");

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness,{isStatic:true});
        this.leftBody =  Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftBody, this.angle);

        this.rightBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.rightBody, -1*this.angle);
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }

    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;
        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);			
			angleMode(RADIANS);
			fill(255)
			rotate(this.angle)
			pop();
			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			rotate(-1*this.angle);
			pop();
			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);			
			angleMode(RADIANS);
			imageMode(CENTER);
			image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
			pop();
    }
}