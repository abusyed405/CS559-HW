function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;
 
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;
    // use the sliders to get various parameters
    var dx = slider1.value;
    var dy = slider2.value;
   
    
    function DrawTriangle(color) {
        context.beginPath()
        context.moveTo(50,50)
        context.lineTo(25,100)
        context.lineTo(75,100)
        context.fillStyle  = color
        context.fill()
    }

    function DrawRectangle(color) {
        context.beginPath();
        context.rect(100,100, 75, 75);
        context.fillStyle = color;
        context.fill();

    }

    function DrawCircle(color) {
        context.beginPath()
        context.arc(50,250,40,0, 2*Math.PI)
        context.fillStyle = color;
        context.fill()

    }
 
    DrawCircle("pink");
    context.translate(dx,dy);
    DrawRectangle("blue")
    DrawTriangle("green");
    
    context.restore();

  }
  slider1.addEventListener("input",draw);
  slider2.addEventListener("input",draw)
  
 
  draw();
}
window.onload = setup;









