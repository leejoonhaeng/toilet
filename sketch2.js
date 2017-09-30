var button1;
var button2;
var bgcolor;
var canvas ; 
var x = 100;
var y =100;

var sliderH;
var h;
var sliderA;
var a;
var sliderAL;
var al;
var sliderK; 
var k;
var sliderHN;
var hn;
var sliderVN; 
var vn;

var input;
var nameP;
var h1;
var k=0;
var k1 = 0;
var se = 0 ;
var sw = true;

var txt ; 

function setup() {
  canvas = createCanvas(500,500,WEBGL);
  //canvas.position(500,500);
  bgcolor = color(255);
  h1 = createP('select value');
 
  sliderH  = createSlider(0,100,50);
  createP("h = " +sliderH.value());
  sliderA  = createSlider(0,100,20);
  createP("a = " +sliderA.value());
  sliderAL  = createSlider(1,90,45);
  createP("alpha = " +sliderAL.value());

  sliderHN  = createSlider(2,20,5);
  createP("horizontal number = " +sliderHN.value());
  sliderVN  = createSlider(2,20,5);
  createP("vertical number = " +sliderVN.value());

  txt  = createP("hi  ");
  
  button1 = createButton("Moving/Stop moving");
  button1.mousePressed(stop);

  button2 = createButton("change color");
  button2.mouseOver(changeBackground);


  //createSlider(10,100,47);
}
function UpdateName(){
	name = input.value();
}

function stop(){
  if (sw == true) sw =false;
  else sw = true;
}

function changeBackground(){
  txt.style("background-color","pink");
  txt.style("padding","20px");

}

/*
function switch(){
  if (sw == true ){
    sw = false;
  }else{
    sw = true;
  }
}*/

function draw() {
  
  background(bgcolor);
  h = sliderH.value();
  a = sliderA.value();
  al = PI*(sliderAL.value())/180;
  hn = sliderHN.value();
  vn = sliderVN.value();
  rotateX(PI/2);



  if ( sw == true){
    se = se+1;
    if (se>360) se = se-360;
    k = 0.95*sin((se/180)*PI);
  }else{
    
    
    if ((se/180) ==2) se = 360;
    else if ((se/180) ==1) se = 180;
    else se = se+1;
    k = 0.95*sin((se/180)*PI);
    
  }

  



  for ( var j = 0; j <vn+1 ; j++){
    for (var i = 0; i <hn ; i++){
      push();
      translate(-0.5*((h/(cos(al*k)*tan(al)))*(1%2)+a*cos(al*k)*(hn)),0,-0.5*(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*vn);
      beginShape();
        stroke(20);
        vertex((h/(cos(al*k)*tan(al)))*(j%2)+a*cos(al*k)*i ,a*sin(al*k)*(i%2),(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*j);
        vertex((h/(cos(al*k)*tan(al)))*(j%2)+a*cos(al*k)*(i+1) ,a*sin(al*k)*((i+1)%2),(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*j);
      endShape();
      pop();
    }
}
  for ( var j = 0; j <vn ; j++){
    for (var i = 0; i <hn+1 ; i++){
      push();
      translate(-0.5*((h/(cos(al*k)*tan(al)))*(1%2)+a*cos(al*k)*(hn)),0,-0.5*(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*vn);
      beginShape();
        stroke(20);
        vertex((h/(cos(al*k)*tan(al)))*(j%2)+a*cos(al*k)*i ,a*sin(al*k)*(i%2),(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*j);
        vertex((h/(cos(al*k)*tan(al)))*((j+1)%2)+a*cos(al*k)*i ,a*sin(al*k)*(i%2),(h/sin(al))*sqrt( 1- (cos(al)*cos(al))/(cos(al*k)*cos(al*k)))*(j+1));
      endShape();
      pop();

    }
  }


  
}