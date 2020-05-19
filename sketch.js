var movingrect,fixedrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.debug=true;
  fixedrect = createSprite(300,300,50,50);
  fixedrect.debug=true;
}

function draw() {
  background("blue"); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor="black";
  fixedrect.shapeColor="black";

  } else {
    movingrect.shapeColor="white";
    fixedrect.shapeColor="white"; 
  }


  drawSprites();
}