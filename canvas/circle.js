console.log("Let us draw some circles");
//create the method to draw and update
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
function circle(x,y,radius,i){
  this.i=i;
  this.x=x;
  this.y=y;
  this.dx=Math.round(Math.random()*2);this.dy=Math.round(Math.random()*2);
  this.radius=radius;
  color=["red","lightgreen","yellow","purple","lightblue","blue","black"];
  this.color=color[Math.floor(Math.random()*color.length)];
  console.log(this.color);
  this.draw=function(){
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,2*Math.PI);
      c.fillStyle=this.color;
      c.fill();
      prevoiusX.push(x);
      prevoiusY.push(y);
      if(i-1==nO){
        c.moveTo(prevoiuX[0],prevoiusY[0]);
        c.lineTo(prevoiusX[this.i],prevoiusY[this.i]);
        c.strokeStyle="black";
        c.stroke();
      }
      else{
        c.moveTo(prevoiusX[i-1],prevoiusY[i-1]);
        c.lineTo(prevoiusX[i],prevoiusY[i]);
        c.strokeStyle="blue";
        c.stroke()
      }
      prevoiusX[i]=this.x;
      prevoiusY[i]=this.y;
    }
  this.update=function(){
    this.x+=this.dx;
    this.y+=this.dy;
    if(this.x+this.radius>canvas.offsetWidth || this.x-this.radius<0){
      this.dx=-this.dx;
    }
    if(this.y+this.radius>canvas.offsetHeight || this.y-this.radius<0){
      this.dy=-this.dy;
    }
    this.draw();
  }
}
var m=[];
prevoiusX=[];prevoiusY=[];
var nO=10;
for (var i=0;i<=nO;i++){
  var x=Math.round(Math.random()*(canvas.offsetWidth-20));
  var y=Math.round(Math.random()*(canvas.offsetHeight-10));
  m.push(new circle(x,y,5,i));
}
function animate(){
  c.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);
  requestAnimationFrame(animate);
  for (var i=0;i<m.length;i++){
    m[i].update();
  }
}
animate();