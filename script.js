function bubbleshow(){
    var bubbles = document.querySelector(".bubbles");
 
var clutter =" ";

for(var i=0 ; i<60; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubbles">${rn}</div>`
}
 
document.querySelector("#down").innerHTML= clutter;}

var score = 0;
var timer = 60;
var hit = 0;

function scoresetter(newscore){
    score = newscore;
    document.querySelector("#score").innerHTML= score;
}

function timershow(){
    setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent= timer;
        }

        else{
            document.querySelector("#down").innerHTML= `<h1>Game over<br>your score was: ${score}</h1>`;
        }
    },1000);
}

function hitshow(){
    hit= Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hit;
}

function enginesetter(){
    document.querySelector("#down").addEventListener("click", function(dets){
        if(Number(dets.target.textContent) === hit){
             scoresetter(score+=10)
             hitshow()
             bubbleshow()
        }
    })
}

enginesetter();
hitshow();
timershow();
bubbleshow();
scoresetter(score);