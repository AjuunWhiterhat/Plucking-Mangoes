class Final extends Tree{
    constructor(x,y,width,height){
        super(width/2,height-10,width,10);
        this.image = loadImage("tree.png");
    }

    display(){
        image(this.image,1050,height-420,320,420);
        super.display();
    }
}