class Ball
{
    constructor(x,y,radius)
    {
        var options = {
            "restitution":0.4,
            "friction":4,
            'density':5,
            
        }
       this.body = Bodies.circle(x,y,radius/2,options);
       this.radius = radius;
       World.add(world,this.body);
    }

    display()
   {    var pos = this.body.position;
        fill("red");
        ellipse(pos.x,pos.y,this.radius,this.radius)

}
}
