var lines = [];
// let cx;
// let cy;

function preload() {
  img = loadImage("assets/Muro.png");
  imgmask = loadImage("assets/Muromask.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);
  // cx = width/2;
  // cy = height/2;
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(5, height -100);
  frameRate(90);

}

function draw() {

  col = colorPicker.color();
  noFill();
  stroke(col);
  const dx = constrain(rotationY, -5, 5);
  const dy = constrain(rotationX, -3, 3);

  if (touchMoved){

    var linea = new mylines();
    lines.push(linea);
    

    for (i=0;i<50;i++){

    push();
    translate(mouseX,mouseY);
    rotate(random(PI*2));
    noStroke();
    fill(col.levels[0]+random(-25,25),col.levels[1]+random(-25,25),col.levels[2]+random(-25,25),random(0,10));
    beginShape();
    for (m = 0; m < PI * 2; m += 1) {
      r = random(2, 10);
      let x = cos(m) * r;
      let y = sin(m) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  }

  // for (var linea of lines) {
  //   linea.show();
  // }
 
  noStroke();
  image(imgmask,0,0,width,height);
}






class mylines {
  constructor(){
    this.px=pmouseX;
    this.py=pmouseY;
    this.cx=mouseX
    this.cy=mouseY;
    this.col=colorPicker.color();
  }
  show() {
    push();
    strokeWeight(3);
    stroke(this.col);
    noFill();
    blendMode(MULTIPLY);
    line(this.px,this.py,this.cx,this.cy)
    pop();
  }
}




function touchMoved() {
  return false;
}

document.ontouchmove = function(event) {
  event.preventDefault();
};

// ask for permissions on iOS
function touchEnded(event) {
  // check that those functions exist
  // if they exist it means we are
  // on iOS and we can request the permissions
  if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission){
    DeviceOrientationEvent.requestPermission()
    console.log("AAA");
  }
}


