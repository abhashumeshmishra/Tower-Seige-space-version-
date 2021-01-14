class blocks{
  constructor(x, y, width, height) {
      var options ={         
          restitution :0.4,
          friction :0.4,
          isStatic:false
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

 display(){
  var angle = this.body.angle;
  var pos = this.body.position;
   if(this.body.speed < 5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
     rect(0, 0, this.width, this.height);
     pop();
   }
  }
  score() {
    if(this.Visiblity<0 && this.Visiblity >-105){
       score++;
    }
   }
}