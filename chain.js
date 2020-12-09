class Chain 
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
            var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.4,
            length: 250
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain);
}

display()
{
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
 var Anchor1X=pointA.x
var Anchor1Y=pointA.y
 var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY
push();
    strokeWeight(4);
    stroke("white")
 line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    pop();
}

}
