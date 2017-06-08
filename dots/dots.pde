
void setup() {
  background(255);
   size (300,300);
   for (int i =0; i < 100; i++) {
     float x = random(width);
     float y = random(height);
     float r = random(0,255);
     float b = random(0,255);
     noStroke();
     fill(r,10,b);
     ellipse(x,y,15,50);
   }
   save("output.png");
   exit();
}