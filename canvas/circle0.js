console.log("Let us draw some circles");
//create the method to draw and update
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var dx=1;dy=3;
function circle(x,y,radius){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.draw=function(){
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,2*Math.PI);
      c.fillStyle="red";
      c.fill();
      console.log(this.x+" "+this.y+" "+this.radius);
    }
  this.update=function(){
    this.x+=1;
    this.y+=3;
    this.draw();
  }
}
var m=new circle(30,40,10);
m.update();
