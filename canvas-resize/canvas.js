var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

// //rectangle
// c.fillStyle="rgba(255 ,0,0,0.5)";
// c.fillRect(100,100,100,100);

// //x y h w
// c.fillRect(210,100,100,100);


// //line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// //x y
// c.lineTo(400,300);
// c.stroke();


// //circle

// //x y radius radius startangle endangle counterclockwise

// for(var i=0;i<=3;i++){
//     c.beginPath();
//     c.arc(300+i*10,300+i*5,30,Math.PI*2,false);
//     c.strokeStyle='blue';
//     c.stroke();
    
    
// }


//creates loop


function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI*2,false);
        c.strokeStyle='blue';
        c.stroke();
        
    }
    this.update=function(){  if(this.x+this.radius>innerWidth||this.x-this.radius<0){
        this.dx=-this.dx;
    }

    if(this.y+this.radius>innerHeight||this.y-this.radius<0){
        this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
}
}



var circlearray=[];
for(i=0;i<100;i++){
    var radius=30;
    var x=Math.random()*(innerHeight-radius*2)+radius;
    var y=Math.random()*(innerWidth-radius*2)+radius;
    var dx=(Math.random()-0.5)*8;
    var dy=(Math.random()-0.5)*8;
    
    circlearray.push(new Circle(x,y,dx,dy,radius))
}
var circle= new Circle(100,100,3,3,30);
animate();

   function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    circle.update();

    for(i=0;i<circlearray.length;i++){
        circlearray[i].update();

    }
   
  
 
   }
