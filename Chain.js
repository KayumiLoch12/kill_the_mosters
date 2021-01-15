class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 90
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
    this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body
     }
    
    display(){
        if(this.chain.bodyA !== null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4); 
        stroke("lightblue")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}