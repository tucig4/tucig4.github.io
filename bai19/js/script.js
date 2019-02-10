const firstQuestion={
    question:"Which of these is not a country in Africa?",
    answerNumberOne:"Botswana",
    answerNumberTwo:"Burkina Faso",
    answerNumberThree:"Saudi Arabia",
    answerNumberFour:"Cote D'Ivoire",
    rightAnswer:"Saudi Arabia"
};
const secondQuestion={
    question:"The game of Mah-Jong originated in what country?",
    answerNumberOne:"England",
    answerNumberTwo:"Russia",
    answerNumberThree:"Japan",
    answerNumberFour:"China",
    rightAnswer:"China"
};
const thirdQuestion={
    question:"What chemical is added to the water in swimming pools?",
    answerNumberOne:"Ammonia",
    answerNumberTwo:"Vinegar",
    answerNumberThree:"Chlorine",
    answerNumberFour:"Sulfur",
    rightAnswer:"Chlorine"
};
const fourthQuestion={
    question:" What is the last name of the family depicted in the movie 'The Sound of Music'?",
    answerNumberOne:"Von Trapp",
    answerNumberTwo:"Von Vanderberg",
    answerNumberThree:"Von Plummer",
    answerNumberFour:"Von Furstenburg",
    rightAnswer:"Von Trapp"
};
const fifthQuestion={
    question:"Crazy Horse was a celebrated leader among what people?",
    answerNumberOne:"Native Americans",
    answerNumberTwo:"Maoris",
    answerNumberThree:"Eskimos",
    answerNumberFour:"Vikings",
    rightAnswer:"Native Americans"
};
const allQuestionAndAnswer=[];
allQuestionAndAnswer.push(firstQuestion);
allQuestionAndAnswer.push(secondQuestion);
allQuestionAndAnswer.push(thirdQuestion);
allQuestionAndAnswer.push(fourthQuestion);
allQuestionAndAnswer.push(fifthQuestion);

var page=0;
var rightAnswerPerQuestion=0;
window.onload=function(){
    document.getElementById('congratulation').style.display="none";
    displayContent();
}

function updateQuestion(){
    const question=document.querySelector('.question');
    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
            return question.value=allQuestionAndAnswer[0].question;
        }
        if(page===1){
            return question.value=allQuestionAndAnswer[1].question;
        }
        if(page===2){
            return question.value=allQuestionAndAnswer[2].question;
        }
        if(page===3){
            return question.value=allQuestionAndAnswer[3].question;
        }
        if(page===4){
            return question.value=allQuestionAndAnswer[4].question;
        }
    }
    
}

function displayContent(){
    updateAnswer();
    updateQuestion();
}
function updateAnswer(){
    const answerOne=document.querySelector('.numberOne');
    const answerTwo=document.querySelector('.numberTwo');
    const answerThree=document.querySelector('.numberThree');
    const answerFour=document.querySelector('.numberFour');

    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
           return answerOne.innerHTML=allQuestionAndAnswer[0].answerNumberOne,
            answerTwo.innerHTML=allQuestionAndAnswer[0].answerNumberTwo,
            answerThree.innerHTML=allQuestionAndAnswer[0].answerNumberThree,
            answerFour.innerHTML=allQuestionAndAnswer[0].answerNumberFour;        
        }
        if(page===1){
           return answerOne.innerHTML=allQuestionAndAnswer[1].answerNumberOne,
            answerTwo.innerHTML=allQuestionAndAnswer[1].answerNumberTwo,
            answerThree.innerHTML=allQuestionAndAnswer[1].answerNumberThree,
            answerFour.innerHTML=allQuestionAndAnswer[1].answerNumberFour;        
        }
        if(page===2){
            return answerOne.innerHTML=allQuestionAndAnswer[2].answerNumberOne,
            answerTwo.innerHTML=allQuestionAndAnswer[2].answerNumberTwo,
            answerThree.innerHTML=allQuestionAndAnswer[2].answerNumberThree,
            answerFour.innerHTML=allQuestionAndAnswer[2].answerNumberFour;        
        }
        if(page===3){
            return answerOne.innerHTML=allQuestionAndAnswer[3].answerNumberOne,
            answerTwo.innerHTML=allQuestionAndAnswer[3].answerNumberTwo,
            answerThree.innerHTML=allQuestionAndAnswer[3].answerNumberThree,
            answerFour.innerHTML=allQuestionAndAnswer[3].answerNumberFour;        
        }
        if(page===4){
            return answerOne.innerHTML=allQuestionAndAnswer[4].answerNumberOne,
            answerTwo.innerHTML=allQuestionAndAnswer[4].answerNumberTwo,
            answerThree.innerHTML=allQuestionAndAnswer[4].answerNumberThree,
            answerFour.innerHTML=allQuestionAndAnswer[4].answerNumberFour;        
        }
    }
    
}
function handleAnswer(answer){
    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
            if(answer.classList.contains("numberOne") ){
                if(allQuestionAndAnswer[0].answerNumberOne===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberTwo") ){
                if(allQuestionAndAnswer[0].answerNumberTwo===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberThree")){
                if(allQuestionAndAnswer[0].answerNumberThree===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberFour")){
                if(allQuestionAndAnswer[0].answerNumberFour===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===1){
            if(answer.classList.contains("numberOne") ){
                if(allQuestionAndAnswer[1].answerNumberOne===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberTwo") ){
                if(allQuestionAndAnswer[1].answerNumberTwo===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberThree")){
                if(allQuestionAndAnswer[1].answerNumberThree===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberFour")){
                if(allQuestionAndAnswer[1].answerNumberFour===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===2){
            if(answer.classList.contains("numberOne") ){
                if(allQuestionAndAnswer[2].answerNumberOne===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberTwo") ){
                if(allQuestionAndAnswer[2].answerNumberTwo===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberThree")){
                if(allQuestionAndAnswer[2].answerNumberThree===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberFour")){
                if(allQuestionAndAnswer[2].answerNumberFour===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===3){
            if(answer.classList.contains("numberOne") ){
                if(allQuestionAndAnswer[2].answerNumberOne===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberTwo") ){
                if(allQuestionAndAnswer[2].answerNumberTwo===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberThree")){
                if(allQuestionAndAnswer[2].answerNumberThree===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberFour")){
                if(allQuestionAndAnswer[2].answerNumberFour===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===4){
            if(answer.classList.contains("numberOne") ){
                if(allQuestionAndAnswer[4].answerNumberOne===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberTwo") ){
                if(allQuestionAndAnswer[4].answerNumberTwo===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberThree")){
                if(allQuestionAndAnswer[4].answerNumberThree===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.classList.contains("numberFour")){
                if(allQuestionAndAnswer[4].answerNumberFour===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }
        
        
    }
    
}
function nextPage(){
    page++;
    if(page<5){
        displayContent();
    }else{
        document.getElementById('congratulation').style.display="block";
        document.getElementsByClassName('answer')[0].style.display='none';
        document.getElementsByClassName('question')[0].style.display='none';
        document.getElementById('point').innerText=rightAnswerPerQuestion+"/5";
    }
    
}
function resetPage(){
    window.location.reload(true);
}


const quiz=document.querySelector('.quizGame');
const answer=document.querySelector('.answer');
answer.addEventListener('click',function(event){
    const target=event.target;
    if(target.classList.contains("numberOne")){
        handleAnswer(target);
        return;
    }
    if(target.classList.contains("numberTwo")){
        handleAnswer(target);
        return;
    }
    if(target.classList.contains("numberThree")){
        handleAnswer(target);
        return;
    }
    if(target.classList.contains("numberFour")){
        handleAnswer(target);
        return;
    }
    if(!target.classList.contains("marked")){
        nextPage();
        return;
    }
});
const congratulation=quiz.querySelector('.congratulation');
const reset=congratulation.querySelector('.reset');
reset.addEventListener('click',function(event){
    const target=event.target;
    if(target.classList.contains("reset")){
        resetPage();
        return;
    }
})






