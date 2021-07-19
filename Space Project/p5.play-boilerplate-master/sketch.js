var sc1img, sc2img, sc3img, sc4img, issimg, spacebg 
var iss,spacecraft,hasDocked=false



function preload() {
sc1img = loadImage("spacecraft1.png")
sc2img = loadImage("spacecraft2.png")
sc3img = loadImage("spacecraft3.png")
sc4img = loadImage("spacecraft4.png")
issimg = loadImage("iss.png")
spacebg  = loadImage("spacebg.jpg")
}


function setup() {
  createCanvas(600,350);
 
  spacecraft= createSprite(285,240)
  spacecraft.addImage(sc1img)
  spacecraft.scale = 0.15
  iss= createSprite(330,130) 
  iss.addImage(issimg)
  iss.scale = 0.25
}

function draw() { 
  background(spacebg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sc3img)
      spacecraft.x= spacecraft.x-1
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc4img)
      spacecraft.x= spacecraft.x+1
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc2img)
    }

    if(keyDown("UP_ARROW")){
      spacecraft.addImage(sc2img)
      spacecraft.y= spacecraft.y-2
    }
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x+12)){
    hasDocked=true
    textSize(25)
    fill("white")
    text("docking succesful",200,300)

  }

  drawSprites();
}