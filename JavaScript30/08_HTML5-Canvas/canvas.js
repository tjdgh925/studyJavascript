const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
const btn = document.querySelector('button');
console.log(ctx);


canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.95;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.globalCompositeOperation = 'lighten';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
var direction = true;

function clearCanvas(e){
    ctx.lineWidth = 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw(e){
    if(!isDrawing) return;
    console.log(e.clientX + ' ' + e.clientY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY; 

    if(hue >= 360) hue = 0;
    else hue ++;
    
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction)
        ctx.lineWidth+= 0.5;
    else
        ctx.lineWidth-= 0.5;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
btn.addEventListener('click',clearCanvas);


//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D