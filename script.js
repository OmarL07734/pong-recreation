var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

const width = window.innerWidth - 20;
const height = window.innerHeight - 100;
const rectWidth = 25;
const rectHeight = 50;

var player1Pos = [25, height / 2 - 25];
var player2Pos = [width - 50, height / 2 - 25];

var circlePos = [width /2, height / 2];
var xdir = -5;
var ydir = 5;
game = setInterval(move, 20);

var score = document.getElementById('score');
var splitScore = score.innerText.split('');
splitScore[0] = 0;
splitScore[4] = 0;
// preload the players
window.onload = function (){
	canvas.width = width;
	canvas.height = height;
	
	drawCircle(circlePos[0], circlePos[1], 10);
	drawRect(player1Pos[0], player1Pos[1], rectWidth, rectHeight);
	drawRect(player2Pos[0], player2Pos[1], rectWidth, rectHeight);
}

// moves the players based on keystrokes
window.onkeydown = function(e) {
	switch(e.key){
		case 'w':
			if(player1Pos[1] > 0) player1Pos[1] = player1Pos[1] - 20;
			break;
			
		case 's':
			if(player1Pos[1] < height - rectHeight) player1Pos[1] = player1Pos[1] + 20;
			break;
			
		case 'ArrowUp':
			if(player2Pos[1] > 0) player2Pos[1] = player2Pos[1] - 20;
			break;
			
		case 'ArrowDown':
			if(player2Pos[1] < height - rectHeight) player2Pos[1] = player2Pos[1] + 20;
			break;
	}
	

}

// draws rectangles 
function drawRect(x, y, width, height){
	ctx.fillStyle = '#FFFFFF';
	ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, size){
	ctx.beginPath();
	ctx.fillStyle ='White';
	ctx.arc(x, y, size, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}

function move(){
	clearScreen()
	drawCircle(circlePos[0], circlePos[1], 10);
	drawRect(player1Pos[0], player1Pos[1], rectWidth, rectHeight);
	drawRect(player2Pos[0], player2Pos[1], rectWidth, rectHeight);
	checkCollisions();
	circlePos[0] = circlePos[0] + xdir;
  circlePos[1] = circlePos[1] + ydir;
	score.innerText = splitScore.join('');
	checkScore(splitScore);
}

function checkCollisions(){
  if((circlePos[0] > player1Pos[0] && circlePos[0] < player1Pos[0] + rectWidth) && (circlePos[1] > player1Pos[1] && circlePos[1] < player1Pos[1] + rectHeight)){
    xdir = 5;
  }
  if((circlePos[0] > player2Pos[0] && circlePos[0] < player2Pos[0] + rectWidth) && (circlePos[1] > player2Pos[1] && circlePos[1] < player2Pos[1] + rectHeight)){
    xdir = -5;
  }
	if(circlePos[0] <= 10){
		splitScore[4] = splitScore[4] + 1;
		circlePos = [width / 2, height / 2];
		xdir = 5;
		ydir = -5;
	}
	if(circlePos[0] >= width - 10){
		splitScore[0] = splitScore[0] + 1;
		circlePos = [width / 2, height / 2];
		xdir = -5;
		ydir = 5;
	}
  if(circlePos[1] > height - 10) ydir = -5
  if(circlePos[1] < 10) ydir = 5
}

function clearScreen(){
  ctx.clearRect(0, 0, width, height);
}

function checkScore(splitScore){
	player1Score = splitScore[0];
	player2Score = splitScore[4];

	if(player1Score == 7){
		score.innerText = 'PLAYER 1 WINS!!!';
		clearScreen();
		clearInterval(game);
	}else if(player2Score == 7){
		score.innerText = 'PLAYER 2 WINS!!';
		clearInterval(game);
		clearScreen();
	}
}
