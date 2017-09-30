//this is sketch 1
var sketch1 = function (p){
  p.x = 100;
  p.y = 100;


  p.setup = function(){

    p.createCanvas(window.innerWidth/2, window.innerHeight);
    p.background(0);
  }

  p.draw = function(){
    p.fill(255,0,200,25);
    p.noStroke();
    p.ellipse(p.x,p.y,100,100);
    p.x = p.x+ p.random(-15,15);
    p.y = p.y+ p.random(-15,15);

  }
}
//this is sketch 2
var sketch2 = function (p){
  p.x = 100;
  p.y = 100;


  p.setup = function(){

    p.createCanvas(window.innerWidth/2, window.innerHeight);
    p.background(0);
  }

  p.draw = function(){
    p.fill(255,255,200,25);
    p.noStroke();
    p.ellipse(p.x,p.y,100,100);
    p.x = p.x+ p.random(-15,15);
    p.y = p.y+ p.random(-15,15);

  }
}



var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);

function resetBackground(){
  myp52.x = myp52.width/2;
  myp52.y = myp52.height/2;
  myp52.background(51);
  myp51.background(51);
}
setInterval(resetBackground,3000);

