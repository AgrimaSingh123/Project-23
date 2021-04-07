class Ground{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(20,20,300,300,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    World.add(world,this.body);
    }
    display(){
        fill("grey");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }
}