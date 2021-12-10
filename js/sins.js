function plotSine(ctx, xOffset, yOffset, amp, freq, color) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 50;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    
    var x = 20;
    var y = 2;

    // parameters
    var amplitude = amp;
    var frequency = freq;

    ctx.moveTo(x, 50);
    while (x < width) {
        y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
        ctx.lineTo(x, y);
        x++;

    }
    ctx.stroke();
    ctx.save();

    console.log("Drawing point at y=" + y);

    ctx.stroke();
    ctx.restore();
}

function draw() {
    //section in html has to be called canvas
    var canvas1 = document.getElementById("graph1");
    var canvas2 = document.getElementById("graph2");
    var canvas3 = document.getElementById("graph3");
    var context3 = canvas3.getContext("2d");
    var context1 = canvas1.getContext("2d");
    var context2 = canvas2.getContext("2d");

    //for cleaning past points
    context1.clearRect(0, 0, 1000, 600);
    context2.clearRect(0, 0, 1000, 600);
    context3.clearRect(0, 0, 1000, 600);

    context1.save();
    context2.save();        
    context3.save();   
    
    //drawing the function via offsets
    plotSine(context1, step, 30, 20, 20, "rgb(140,140,140)");
    plotSine(context1, step, 2, 50, 30,"rgb(180,180,180)");
    plotSine(context2, step, 0, 14, 4,"rgb(30,30,30)");
    plotSine(context3, step, 0 , 30, 40,"rgb(120,120,120)");
    plotSine(context3, step, 0, 40, 20, "rgb(120,120,120)");

    context1.restore();
    context2.restore();
    context3.restore();
    // SPEED here
    step += -1;
    window.requestAnimationFrame(draw);
}
// for calling it in html section
function init() {
    window.requestAnimationFrame(draw);
}
var step = -4;