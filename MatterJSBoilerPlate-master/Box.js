class Box {
    constructor(x, y, width, height) {
      var options = {
         isStatic : true,
         'density' : 1.0,
         'friction' : 1.0,
         'restitution' : 0.8,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      push() 
      translate(pos.x,pos.y); 
      imageMode(CENTER); 
      fill("white");
      image(this.image,0,0,this.width,this.height);
      pop()
    }
  };