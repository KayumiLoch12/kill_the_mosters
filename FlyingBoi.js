class FlyingBoi {

    constructor(x,y,r){
    var options = {
     restitution: 0.8,   
    frictionAir: 0.005,
    density: 0.06
    }
    this.image = loadImage("Superhero-01.png");
     this.body = Bodies.circle(x,y,r,options); 
     World.add(world, this.body);
     this.width = r
     this.height = r
    
    
    }
    display(){
    var angle = this.body.angle
    var pos = this.body.position 
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight(4);
    stroke("purple")
    fill("lightpurple")
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
    }
    
    
    
    
    
    }