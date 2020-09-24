class box {
    constructor(x, y,height,width) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
      }
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.body = Bodies.rectangle(x, y,this.height, this.width, options);

      World.add(world, this.body);
     
    }
    display(){

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(20, 30,40, 40);
      pop();
      
    }
  }