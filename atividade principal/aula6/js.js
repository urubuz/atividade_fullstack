let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.fillRect(0,225,300,75)
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(100,125,100,100);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(78, 49, 16, 1)';
ctx.fillRect(140,175,20,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(216, 81, 81, 1)';
ctx.moveTo(100,125);
ctx.lineTo(200,125);
ctx.lineTo(150,75);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 217, 255, 1)';
ctx.fillRect(109,144,30,30);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(0, 217, 255, 1)';
ctx.fillRect(160,144,30,30);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.arc(235,65,35, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(47, 126, 216, 1)';
ctx.fillRect(0,262.5,100,37.5);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(47, 126, 216, 1)';
ctx.fillRect(0,225,35,37.5);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(47, 126, 216, 1)';
ctx.arc(0,225,35, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(47, 126, 216, 1)';
ctx.arc(100,297.5,35, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(35,175,20,50);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(28, 75, 10, 1)';
ctx.arc(45,165,25, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(240,225,20,50);  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(28, 75, 10, 1)';
ctx.arc(250,210,25, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();