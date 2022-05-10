var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
const rectWidth = 25;
const rectHeight = 50;

var xPos1 = 25
var yPos1 = height / 2 - 25;

var xPos2 = width - 50;
var yPos2 = height / 2 - 25;

// preload the players
window.onload = function (){
	canvas.width = width;
	canvas.height = height;
	
	drawRect(25, yPos1, rectWidth, rectHeight);
	drawRect(xPos2, yPos2, rectWidth, rectHeight);
}

// moves the players based on keystrokes
window.onkeydown = function(e) {
	switch(e.keyCode){
		case 87:
			if(yPos1 > 0) yPos1 = yPos1 - 10;
			break;
			
		case 83:
			if(yPos1 < height - rectHeight) yPos1 = yPos1 + 10;
			break;
			
		case 38:
			if(yPos2 > 0) yPos2 = yPos2 - 10;
			break;
			
		case 40:
			if(yPos2 < height - rectHeight) yPos2 = yPos2 + 10;
			break;
	}
	
	ctx.clearRect(0,0, width, height);
	drawRect(xPos1, yPos1, rectWidth, rectHeight);
	drawRect(xPos2, yPos2, rectWidth, rectHeight);
}

// draws rectangles 
function drawRect(x, y, width, height){
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(x, y, width, height);
}
