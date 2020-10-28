class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, radius, options);
        this.radius = radius;
        this.ballImg = loadImage("paper1.png");
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); 
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.ballImg, 0 , 0, 60, 60);
        pop();  
    }
}