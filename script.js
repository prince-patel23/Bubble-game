let timer = 60;
let score =0;
let hitRn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewhit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
};

function makeBubble(){
    
    let clutter = "";

    for(let i=1; i<=133; i++){
        let randomNum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNum}</div>`;    
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    document.querySelector("#pbottom").innerHTML = clutter;
};

function runTimer() {
    let tiemrInt = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(tiemrInt);
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
};

document.querySelector("#pbottom")
.addEventListener("click", function(dets) {
    let clickedNum = (Number(dets.target.textContent));
    if(clickedNum === hitRn){
        increaseScore();
        makeBubble();
        getNewhit();
    }
    else if(clickedNum !== hitRn){
        score -= 10;
        document.querySelector("#scoreVal").textContent = score;
    }
})

runTimer();
makeBubble();
getNewhit();