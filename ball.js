class Ball
{
    constructor(x,y,radius)
    {
        var options = {
            "restitution":0.15,
            "friction":4,
            'density':1000,
            
        }
       this.body = Bodies.circle(x,y,radius/2,options);
       this.radius = radius;
       World.add(world,this.body);
    }

    display()
   {    var pos = this.body.position;
        fill("skyblue");
        ellipse(pos.x,pos.y,this.radius,this.radius)

}
}
