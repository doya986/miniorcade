/*issues thus far:
1.when randomly chosen tile by bot is filled, no way to select another >> SOLVED, BUT
  1a. now when player is o, game over doesn't register SOMETIMES >> SOLVED, caused by same thing as 1b
  1b. SOMETIMES registers wins when no wins, as in x-o-x registered as a win
      seems solution for issue 1 caused a tile to be selected when it's already 
      filled >> SOLVED, had to add return after recusrsive function call
2.doesn't register game over for some reason >> SOLVED, had to remove 
  win tracking function seems it interfered with game over
3.when user is x, bot player is x. 
  seems current player is switched before deciding bot player >> SOLVED, had = instead of ==
4.can't track wins, might use cookies, might just send wins to function in acc page
*/
var board;
var playerO = "O";
var playerX = "X";
var XorO=[playerX,playerO];
var currPlayer= XorO[Math.floor(Math.random()*XorO.length)];;//to give random letter to user
var botPlayer;
var winCount=0;
window.localStorage.setItem("winCount",winCount);

var gameOver = false;

window.onload = setGame();


function setGame() {
    board = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function setTile() {
    if (gameOver) {
        //consWins();
        location.reload();
        return;
    }
    
    let coords = this.id.split("-");    //ex) "1-2" -> ["1", "2'"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') { 
        //already taken spot
        return;
    }
    
    board[r][c] = currPlayer; //mark the board
    this.innerText = currPlayer; //mark the board on html

    if(currPlayer==playerO)
        botPlayer=playerX;
    else
        botPlayer=playerO;
    
    
    //check winner
    checkWinner(); 
    checkNoWinner();
    if(gameOver){
        return;
    }
    
    //set random tile
    botSetTile();
    
}

function botSetTile(){
    if(gameOver)
       return;
    
    randomTile=selectRandomTile();
    let coords = randomTile.id.split("-"); //ex) "1-2" -> ["1", "2'"]
    var r = parseInt(coords[0]);
    var c = parseInt(coords[1]);
    if (board[r][c] != ' ') { 
        //already taken spot
       botSetTile();
       return;
    }
    //mark board
    board[r][c]= botPlayer;
    randomTile.innerText=botPlayer;

    //check winner
    checkWinner();
    checkNoWinner();
    if(gameOver){
        return;
    }
    
    return;
}
function selectRandomTile(){
    var rSelect=Math.floor(Math.random()*3);
    var cSelect=Math.floor(Math.random()*3);
    var randomTile=document.getElementById(rSelect.toString()+"-"+cSelect.toString());
    
    return randomTile;
}

function checkWinner() {
    //horizontally, check 3 rows
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            //if we found the winning row
            //apply the winner style to that row
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }

    //vertically, check 3 columns
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
            //if we found the winning col
            //apply the winner style to that col
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());                
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }

    //diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile = document.getElementById(i.toString() + "-" + i.toString());                
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    //anti-diagonally
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        //0-2
        let tile = document.getElementById("0-2");                
        tile.classList.add("winner");

        //1-1
        tile = document.getElementById("1-1");                
        tile.classList.add("winner");

        //2-0
        tile = document.getElementById("2-0");                
        tile.classList.add("winner");
        gameOver = true;
        return;
    }
}
function checkNoWinner(){
    var filledCell=0;
    for(r=0;r<board.length;r++)
        for(c=0;c<board[r].length;c++){
            if(board[r][c]!=' ')
              filledCell++;
        }

    if(filledCell==9){
        gameOver=true;   
        winCount=0;
    }    
    else
    gameOver=false;
    return;
}
function consWins(typeOfWinn){
    if(typeOfWinn==currPlayer)
    window.localStorage.getItem("winCount",winCount)++;
    else
    window.localStorage.getItem("winCount",winCount)=0;
    document.getElementById('winCount').innerHTML=window.localStorage.getItem("winCount",winCount);
    return;
}
