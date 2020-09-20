class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        
        this.image = loadImage("dustbingreen.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(0);
			//fill(255,255,0)
			image(this.image, 0,0,this.w, this.h);
			pop();
			
	}

}