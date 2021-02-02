let score = cricInfoDataModel.initValue;
const util = utility();
function setScore() {
    if (localStorage.getItem('mainScore') != null) {
        let mainScore = JSON.parse(localStorage.getItem('mainScore'));
        score.runs = mainScore.runs
        score.balls = mainScore.balls
        score.wickets = mainScore.wickets
        comm= JSON.parse(localStorage.getItem('comm'));

    }
    else {
        localStorage.setItem('mainScore', JSON.stringify(score))
        localStorage.setItem('comm',JSON.stringify(comm));
        
       
    }

    let scoreBoard = document.querySelector('#scoreBoard')
    updateScoreBoard(scoreBoard, score)
}
function updateScoreBoard(scoreBoard, score) {
    scoreBoard.innerHTML = `${score.runs}/${score.wickets}-${overCount(score.balls)}`
    showComm(cardCont);
    
    
}

function updateScore(entry) {
    if (entry != 7) {
        score.runs += entry

    }
    else {
        score.wickets += 1;

    }
    score.balls += 1
    if (score.wickets === cricInfoDataModel.wicket || score.balls === cricInfoDataModel.ball) {
        console.log(`Total runs: ${score.runs} in ${overCount(score.balls)} overs with ${10 - score.wickets} wickets` +
            `left, Run rate: ${((score.runs / score.balls) * 6).toFixed(4)} per over `);
        console.log("New game");
        score = {
            runs: 0,
            balls: 0,
            wickets: 0
        }
    }
    util.setData('mainScore', score);

    updateScoreBoard(document.querySelector('#scoreBoard'), score)

}
let cardCont= document.getElementById("card-container");
onload = function () {
    setScore()
    showComm(cardCont);
}
function showComm(cardCont){
    while (cardCont.firstChild) {
        cardCont.removeChild(cardCont.firstChild);  
    }
 
    comm.reverse().forEach((element, index) => {
        card = document.createElement("div");
        card.id="card";
        cardCont.appendChild(card);
        para= document.createElement("p");
        para.innerHTML=element;
        card.appendChild(para);
        if ((index+1)%6==0) 
        {
         let hr =document.createElement("hr");
        
         card.appendChild(hr);   
        }
      

    });
}
const events = [0, 3, 6, 1, 7, 2, 4]

let commentry = {
    0: "its a dot ball",
    1: "Quick single taken",
    2: "taking a double players returned to positions",
    3: "Triple Taken in a nice shot",
    4: "Boundary!!! 4 Runs taken",
    6: "Magnificent shot over the boundary, SIXER!",
    7: "Nice Bowling , One wicket gone!"
};

let newEvent = ''
let btnplay = document.querySelector('#btnplay')
btnplay.addEventListener('click', function () {
    newEvent = events[Math.floor(Math.random() * events.length)];
    updateScore(newEvent)
    showCommentry(newEvent)
})
function showCommentry(newEvent) {
    // here i have to push new commentry to array
    comm.push(commentry[newEvent]);
    localStorage.setItem("comm",JSON.stringify(comm));
    showComm(cardCont);
    
}
function overCount(balls) {
    return `${parseInt(balls / 6)}.${balls % 6}`
}
