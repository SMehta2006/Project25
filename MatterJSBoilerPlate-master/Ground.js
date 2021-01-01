class Ground {
    constructor() {
        var ground_options = {
            isStatic : true
        }
    this.body = Bodies.rectangle(500,680,1000,10,ground_options);

    World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y,1000,10);
    }
}