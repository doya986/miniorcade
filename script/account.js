var tetrisScore=parseInt(localStorage.getItem('tetrisScore'));

var BOScore=parseInt(localStorage.getItem('BOscore'));

if(localStorage.getItem("prevstreak")=="0" || localStorage.getItem("prevstreak")==null)
    localStorage.setItem("prevstreak", "0");
var XOStreak=parseInt(localStorage.getItem("prevstreak"));
var newXOStreak=parseInt(localStorage.getItem('wins'));

var snakeScore=parseInt(localStorage.getItem('snakeScore'));

var SIScore=parseInt(localStorage.getItem('SIscore'));


if(newXOStreak>XOStreak){
    XOStreak=newXOStreak;
    localStorage.setItem("prevstreak", newXOStreak.toString());
}
    

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
