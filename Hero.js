class Hero { 
    constructor(x, y){
        var options = { 
            isStatic: false, 
            airFriction: 1000

        }

        this.body = Bodies.circle(x, y, 100, options);
        World.add(world, this.body);

        this.image = loadImage("Superhero-01.png");
    }

    display(){
        var pos = this.body.position; 
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0 , 200, 200);
        pop();

    }
}