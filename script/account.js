import 'https://tomashubelbauer.github.io/github-pages-local-storage/index.js';

// Use `localStorage` as you normally would now
var tetrisScore=0;
var newTetrisScore=parseInt(localStorage.getItem('tetrisScore'));
var BOScore=0;
var newBOScore=parseInt(localStorage.getItem('BOscore'));
var XOStreak=0;
var newXOStreak=0;
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

    let p1=document.getElementById('tet');
    p1.innerText=tetrisScore+" points";


    let p2=document.getElementById('BO');
    p2.innerText=BOScore+' points';

    let p3=document.getElementById('tic');
    p3.innerText=XOStreak+' points';

    let p4=document.getElementById('snake');
    p4.innerText=snakeScore+' points';

    let p5=document.getElementById('space');
    p5.innerText=SIScore+' points';
}

