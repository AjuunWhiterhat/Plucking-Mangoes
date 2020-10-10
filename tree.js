class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push();
        rect(CENTER);
        rect(width/2,height-10,width,10);
        pop();
    }
}