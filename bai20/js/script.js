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
$(window).on("load",function(){
    $('#congratulation').hide();
    jQuery.displayContent();
});

jQuery.updateQuestion=function(){
    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
            return $('.question').val(allQuestionAndAnswer[0].question);
        }
        if(page===1){
            return $('.question').val(allQuestionAndAnswer[1].question);
        }
        if(page===2){
            return $('.question').val(allQuestionAndAnswer[2].question);
        }
        if(page===3){
            return $('.question').val(allQuestionAndAnswer[3].question);
        }
        if(page===4){
            return $('.question').val(allQuestionAndAnswer[4].question);
        }
    }
    
}

jQuery.displayContent=function(){
    jQuery.updateAnswer();
    jQuery.updateQuestion();
}
jQuery.updateAnswer=function(){
    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
           return $('.numberOne').html(allQuestionAndAnswer[0].answerNumberOne),
           $('.numberTwo').html(allQuestionAndAnswer[0].answerNumberTwo),
           $('.numberThree').html(allQuestionAndAnswer[0].answerNumberThree),
           $('.numberFour').html(allQuestionAndAnswer[0].answerNumberFour);        
        }
        if(page===1){
            return $('.numberOne').html(allQuestionAndAnswer[1].answerNumberOne),
            $('.numberTwo').html(allQuestionAndAnswer[1].answerNumberTwo),
            $('.numberThree').html(allQuestionAndAnswer[1].answerNumberThree),
            $('.numberFour').html(allQuestionAndAnswer[1].answerNumberFour);       
        }
        if(page===2){
            return $('.numberOne').html(allQuestionAndAnswer[2].answerNumberOne),
           $('.numberTwo').html(allQuestionAndAnswer[2].answerNumberTwo),
           $('.numberThree').html(allQuestionAndAnswer[2].answerNumberThree),
           $('.numberFour').html(allQuestionAndAnswer[2].answerNumberFour);        
        }
        if(page===3){
            return $('.numberOne').html(allQuestionAndAnswer[3].answerNumberOne),
           $('.numberTwo').html(allQuestionAndAnswer[3].answerNumberTwo),
           $('.numberThree').html(allQuestionAndAnswer[3].answerNumberThree),
           $('.numberFour').html(allQuestionAndAnswer[3].answerNumberFour);       
        }
        if(page===4){
            return $('.numberOne').html(allQuestionAndAnswer[4].answerNumberOne),
           $('.numberTwo').html(allQuestionAndAnswer[4].answerNumberTwo),
           $('.numberThree').html(allQuestionAndAnswer[4].answerNumberThree),
           $('.numberFour').html(allQuestionAndAnswer[4].answerNumberFour);        
        }
    }
    
}
jQuery.handleAnswer=function(answer){
    for(let i=0;i<allQuestionAndAnswer.length;i++){
        if(page===0){
            if(answer.hasClass("numberOne") ){
                if(allQuestionAndAnswer[0].answerNumberOne===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberTwo") ){
                if(allQuestionAndAnswer[0].answerNumberTwo===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberThree")){
                if(allQuestionAndAnswer[0].answerNumberThree===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberFour")){
                if(allQuestionAndAnswer[0].answerNumberFour===allQuestionAndAnswer[0].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===1){
            if(answer.hasClass("numberOne") ){
                if(allQuestionAndAnswer[1].answerNumberOne===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberTwo") ){
                if(allQuestionAndAnswer[1].answerNumberTwo===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberThree")){
                if(allQuestionAndAnswer[1].answerNumberThree===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberFour")){
                if(allQuestionAndAnswer[1].answerNumberFour===allQuestionAndAnswer[1].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===2){
            if(answer.hasClass("numberOne") ){
                if(allQuestionAndAnswer[2].answerNumberOne===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberTwo") ){
                if(allQuestionAndAnswer[2].answerNumberTwo===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberThree")){
                if(allQuestionAndAnswer[2].answerNumberThree===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberFour")){
                if(allQuestionAndAnswer[2].answerNumberFour===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===3){
            if(answer.hasClass("numberOne") ){
                if(allQuestionAndAnswer[2].answerNumberOne===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberTwo") ){
                if(allQuestionAndAnswer[2].answerNumberTwo===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberThree")){
                if(allQuestionAndAnswer[2].answerNumberThree===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberFour")){
                if(allQuestionAndAnswer[2].answerNumberFour===allQuestionAndAnswer[2].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }else if(page===4){
            if(answer.hasClass("numberOne") ){
                if(allQuestionAndAnswer[4].answerNumberOne===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberTwo") ){
                if(allQuestionAndAnswer[4].answerNumberTwo===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberThree")){
                if(allQuestionAndAnswer[4].answerNumberThree===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
            if(answer.hasClass("numberFour")){
                if(allQuestionAndAnswer[4].answerNumberFour===allQuestionAndAnswer[4].rightAnswer){
                    return rightAnswerPerQuestion++;
                }
            }
        }
        
        
    }
    
};
jQuery.nextPage=function(){
    page++;
    if(page<5){
        jQuery.displayContent();
    }else{
        $('#congratulation').show();
        $('.answer').hide();
        $('.question').hide();
        $('#point').text(rightAnswerPerQuestion+"/5");
    }
}
$.fn.resetPage=function(){
    location.reload();
};
  
$.fn.changeTheme=function(){
    $('html').css('background-image',"url('https://i.imgur.com/yDdtRpB.jpg')");
    $('body').css('background-image',"url('https://i.imgur.com/yDdtRpB.jpg')");
}

$(".answer").click(function(event){
    const target=$(event.target);
    if(target.hasClass("numberOne")){
        jQuery.handleAnswer(target);
        return;
    }
    if(target.hasClass("numberTwo")){
        jQuery.handleAnswer(target);
        return;
    }
    if(target.hasClass("numberThree")){
        jQuery.handleAnswer(target);
        return;
    }
    if(target.hasClass("numberFour")){
        jQuery.handleAnswer(target);
        return;
    }
    if(!target.hasClass("marked")){
        jQuery.nextPage();
        return;
    }
});

$('.reset').click(function(event){
        $('.reset').resetPage();
});
$('.change').click(function(event){
        $('.change').changeTheme();
});






