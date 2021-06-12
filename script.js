var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 35;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 460;
var positionOfPaddle2 = 460;
var topPositionOfBall = 370;
var leftPositionOfBall = 640;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;


//ball movements
function startBall() {
  topPositionOfBall = 370;
  leftPositionOfBall = 640;

  if(Math.random() < 0.5){
    var side = 1;
   }else {
    var side = -1;
  }

  leftSpeedOfBall = side * (Math.random() * 6 + 5)
  topSpeedOfBall = Math.random() * 6 + 5;
}

//player controls//

document.addEventListener('keydown',function(e){
 // W
  if(e.keycode == 87|| e.which == 87) {
    speedOfPaddle1 = -10;
  }
  //S
  if(e.keycode == 83|| e.which == 83) {
    speedOfPaddle1 = 10;
  }
  //Up
  if(e.keycode == 38|| e.which == 38) {
    speedOfPaddle2 = -10;
  }
  //Down
  if(e.keycode == 40|| e.which == 40) {
    speedOfPaddle2 = 10;
  }
})

document.addEventListener('keyup',function(e){
 // W
  if(e.keycode == 87|| e.which == 87) {
    speedOfPaddle1 = 0;
  }
  //S
  if(e.keycode == 83|| e.which == 83) {
    speedOfPaddle1 = 0;
  }
  //Up
  if(e.keycode == 38|| e.which == 38) {
    speedOfPaddle2 = 0;
  }
  //Down
  if(e.keycode == 40|| e.which == 40) {
    speedOfPaddle2 = 0;
  }
})

window.setInterval(function show() {

 positionOfPaddle1 += speedOfPaddle1;
 positionOfPaddle2 += speedOfPaddle2;

 topPositionOfBall += topSpeedOfBall;
 leftPositionOfBall += leftSpeedOfBall;

//stops paddles from leaving screen up 
if(positionOfPaddle1 <= 1) {
  positionOfPaddle1 = 1;
}
if(positionOfPaddle2 <= 1) {
  positionOfPaddle2 = 1;
}
//stops paddles from leaving screen Down
if(positionOfPaddle1 >= window.innerHeight - paddleHeight){
  positionOfPaddle1 = window.innerHeight - paddleHeight
}
if(positionOfPaddle2 >= window.innerHeight - paddleHeight){
  positionOfPaddle2 = window.innerHeight - paddleHeight
}
if(topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius) {
  topSpeedOfBall =  -topSpeedOfBall;
}
if(leftPositionOfBall <= paddleWidth) {
  if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) { 
    leftSpeedOfBall = -leftSpeedOfBall;
  } else {
    score2++
    startBall();
  }
}
if(leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
  if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
    leftSpeedOfBall = -leftSpeedOfBall;
  } else {
    score1++
    startBall();
  }
}

if(score1 >= 9 && score1 >= score2 +2) {
 score1 = 0
 score2 = 0
 
} 
if(score2 >= 9 && score2 >= score1 +2){
  score1= 0
  score2= 0
  
}

 document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
 document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

 document.getElementById('ball').style.top = topPositionOfBall + 'px';
 document.getElementById('ball').style.left = leftPositionOfBall + 'px';

 document.getElementById('score1').innerHTML = score1.toString()
 document.getElementById('score2').innerHTML = score2.toString()
},1000/60)
