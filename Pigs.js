class Pigs {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50,options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  