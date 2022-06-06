
function AIChoice(){
    let AI = Math.floor(Math.random() * 3);

    switch(AI){
        case 0:
            return "Scissors";
        case 1:
            return "Paper";
        case 2:
            return "Rock";
    }
}


function calculateResult(val, AIchoice, out3){

    let choices = {
        "Rock" : {"Scissors" : 1, "Rock" : 0.5, "Paper" : 0},

        "Scissors" : {"Paper" : 1, "Scissors" : 0.5, "Rock" : 0},

        "Paper" : {"Rock" : 1, "Paper" : 0.5, "Scissors" : 0}
    }
    let res = choices[val][AIchoice];
    let resAI = choices[AIchoice][val];

    if (res < resAI){
        out3.style.color = "red";
        return "You Lost";
    }
    else if(res > resAI){
        out3.style.color = "green";
        return "YOU WIN!!";
    }
    else{
        out3.style.color = "grey";
        return "TIE";
    }
        
}

function chose(val){
    let div = document.getElementById("output");
    div.innerHTML = "";
    let out1 = document.createElement('h1');
    let out2 = document.createElement('h1');
    let out3 = document.createElement('h1');

    let out = document.createTextNode('Your Choice: ' +  val);
    
    let AIchoice = AIChoice();

    let AIout = document.createTextNode('AI Choice: ' + AIchoice);

    let getRes = calculateResult(val, AIchoice, out3);

    let res = document.createTextNode(getRes);

    out1.appendChild(out);
    out2.appendChild(AIout);
    out3.appendChild(res);

    div.appendChild(out1);
    div.appendChild(out2);
    div.appendChild(out3);

}


