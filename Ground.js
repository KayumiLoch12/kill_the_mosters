class Ground {

    constructor(x,y,width,height){
    var options = {
    isStatic: true,
    friction: 1.0,
    density: 0.06
    }
     this.body = Bodies.rectangle(x,y,width,height,options); 
     World.add(world, this.body);
     this.width = width
     this.height = height
    
    
    }
    display(){
    var pos = this.body.position 
    fill("pink")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height)
    
    }
    
    
    
    
    
    }