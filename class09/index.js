var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
//context c언어에서 사용함 그림을 그려주는 툴 1학년때는 데이터가 저장되는곳

class button
{
    constructor(position_x,position_y,width,height,color)
    {
        this.position_x = position_x;
        this.position_y = position_y;
        this.width = width;
        this.height = height; 
        this.color = color
    }
    draw()
    {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.position_x,this.position_y,this.width,this.height);
        context.fill();
    }
}

var char_button = new button(100,100,100,100,'red');
char_button.draw();

canvas.onmousedown = function(event){ 
  
    const x = event.clientX - context.canvas.offsetLeft;//전체크기에서 캔버스안에 값 빼줘야지 전체 크기에 좌표가 나옴
    const y = event.clientY - context.canvas.offsetTop;
    if(x >= 100 && x <= 200 && y >= 100 && y <= 200)
    {
        context.fillStyle = "blue";
        context.fillRect(100, 100, 100, 100);
    }
}
canvas.onmouseup = function(event){ 
  
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;
    if(x >= 100 && x <= 200 && y >= 100 && y <= 200)
    {
        context.fillStyle = "red";
        context.fillRect(100, 100, 100, 100);
    }
}
canvas.onmousemove = function(event)
{
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;
    if(x >= 100 && x <= 200 && y >= 100 && y <= 200)
    {
        context.fillStyle = "yellow";
        context.fillRect(100, 100, 100, 100);
    }else
    {
        context.fillStyle = "red";
        context.fillRect(100, 100, 100, 100);
    }
}