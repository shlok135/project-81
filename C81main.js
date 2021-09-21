canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color1 ="yellow";
color2 ="red";
color3 ="green";
color4 ="black";
color5 ="blue";
color ="cyan";

ctx.beginPath();
ctx.strokeStyle= color5
ctx.lineWidth=2;
ctx.arc(375,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4
ctx.lineWidth=2;
ctx.arc(300,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3
ctx.lineWidth=2;
ctx.arc(400,250,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color2
ctx.lineWidth=2;
ctx.arc(450,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1
ctx.lineWidth=2;
ctx.arc(350,250,50,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
console.log("x="+mouse_x+"y="+mouse_y);
circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}