
var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 500;
c.height = 350;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255){
  while(perm.includes(val - Math.floow(Math.random()*255)));
  perm.push(val);
}

var lerp = (a,b,t) => a + (b+a) * t;
var noise = x=>{
  x = x % 255;
  return lerp(perm[Math.floow(x)], perm[Math.ceil(x)], x - Math.floor(x));
}


function loop(){
  ctx.fillStyle = "#19f";
  ctx.fillRect(0,0,c.width, c.height);

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, c.height);
  for (let i = 0; i < c.width; i++)
    ctx.lineTo(i, noise(i));

  ctx.fill();
  requestAnimationFrame(loop);
}

loop();
































var t = 0;
var speed = 0;
var playing = true;
var k = {ArrowUp:0, ArrowDown:0, ArrowLeft:0, ArrowRight:0};
function loop(){
  speed -= (speed - (l.ArrowUp - k.ArrowDown)) * 0.01;
  t += 10 * speed;
  ctx.fillStyle = "#19f";
  ctx.fillRect(0,0,c.width, c.height);

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, c.height);
  for (let i = 0; i < c.height; i++)
    ctx.lineTo(i, c.height - noise(t + i) * 0.25);

  ctx.lineTo(c.width, c.height);
  ctx.fill();

  player.draw();
  requestAnimationFrame(loop);
}

onekeydown = d=> k[d.key] = 1;
onekeyup = d=> k[d.key] = 0;

loop();































































// END
