class Ball {
    constructor(x, y, r) {
      var options = { 
        restitution:1.0,
        density :0.8
    };
  
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;

      World.add(world, this.body);
      this.image= loadImage("assets/Ball.png");
      console.log(this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
  