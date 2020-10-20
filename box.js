class  Box
 {
     constructor(x,y,width,height)
     {
         var options=
         {
            restitution:1,
             density:0.12,
             isStatic:true
         }
         this.body=Bodies.rectangle(x,y,width,height,options);
         this.width=width;
         this.height=height;
        
         World.add(world,this.body);
         
     }
     display()
     {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        rectMode(CENTER);
        rect(x,y,this.width,this.height);
        pop();
     }
 }