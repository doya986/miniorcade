
var tetrisScore=0;
var newTetrisScore=parseInt(localStorage.getItem('tetrisScore'));
var BOScore=0;
var newBOScore=parseInt(localStorage.getItem('BOscore'));
var XOStreak=0;
var newXOStreak=parseInt(localStorage.getItem('wins'));
var snakeScore=0;
var newSnakeScore=parseInt(localStorage.getItem('snakeScore'));
var SIScore=0;
var newSIScore=parseInt(localStorage.getItem('SIscore'));


if(newBOScore>BOScore)
        BOScore=newBOScore;

if(newTetrisScore>tetrisScore)
    tetrisScore=newTetrisScore;

if(newXOStreak>XOStreak)
    XOStreak=newXOStreak;

if(newSnakeScore>snakeScore)
    snakeScore=newSnakeScore;

if(newSIScore>SIScore)
    SIScore=newSIScore;

window.onload= function (){

    var p1=document.getElementById('tet');
    p1.innerText=tetrisScore+" points";
    color("tet", tetrisScore);

    let p2=document.getElementById('BO');
    p2.innerText=BOScore+' points';
    color("BO", BOScore);

    let p3=document.getElementById('tic');
    p3.innerText=XOStreak+' wins in a row';
    xocolor("tic", XOStreak);

    let p4=document.getElementById('snake');
    p4.innerText=snakeScore+' points';
    color("snake", snakeScore);

    var p5=document.getElementById('space');
    p5.innerText=SIScore+' points';
    color("space", SIScore);

}

function color(i, score){

    let p=document.getElementById(i);

    if(score>=20000){
            p.classList.add("gold");
            return;
    }        
    else if (score>=10000){  
            p.classList.add("prpl");
            return;
    }        
    else if (score>=5000){
        p.classList.add("blue");
            return; 
    }
    else if(score>=2000){
        p.classList.add("blue");
        return;
    }
    else if(score>=0){
        p.classList.add("gray");
        return;
    }
    else
        return;        

}
function xocolor(i, score){
    let p=document.getElementById(i);

    if(score>50){
            p.classList.add("gold");
            return;
    }        
    else if (score>25){  
            p.classList.add("prpl");
            return;
    }        
    else if (score>15){
        p.classList.add("blue");
            return; 
    }
    else if(score>5){
        p.classList.add("blue");
        return;
    }
    else if(score>=0){
        p.classList.add("gray");
        return;
    }
}
