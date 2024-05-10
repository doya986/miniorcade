//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
const img=new Image();
img.src='styles/resources/food2.png';
var foodX;
var foodY;

var score=0;
var gameOver = false;

window.onload = setGame();
function setGame() {
    gameOver=false;
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document.addEventListener("keyup", changeDirection);
    
    // update();
    setInterval(update, 1000/10); //100 milliseconds
}
function resetGame(){
    window.localStorage.setItem('snakeScore',score.toString());
    location.reload(true);
}
function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    /*context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);*/
    context.drawImage(img, foodX, foodY, blockSize+1, blockSize+1);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        score+=10*(snakeBody.length);
        placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        functionAlert(); 
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            functionAlert();
        }
    }

    context.font='15px orbitron';
    context.fillStyle='#ffffff';
    context.fillText(score, 10, 25);
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}
function goUp(){
    if (velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
}
function goDown(){
    if (velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
}
function goLeft(){
    if (velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
}
function goRight(){
    if (velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
function functionAlert(msg, myYes) {
    var confirmBox = $("#gameover");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".button").unbind().click(function() {
        confirmBox.hide();
     });
     confirmBox.find(".button").click(myYes);
     confirmBox.show();
  }
