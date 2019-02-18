cards=['img/2D__57497.1440113502.480.480.png',
'img/3C__99122.1440113509.480.480.png',
'img/4H__83243.1440113515.480.480.png',
'img/5S__90574.1440113521.480.480.png',
'img/KH__01216.1440113580.480.480.png'];

var current = null;
var count=0;
var remainingTime =30;
var Page=0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}
function flip(card){
    $(card).toggleClass('clicked');
    $(card).css('pointer-events', 'none');
    if(!current){
        current=$(card);
    }else{
       
        if(current.attr('data-name') !== $(card).attr('data-name')){
            $('.card').css('pointer-events', 'none');
            setTimeout(function(){
                current.toggleClass('clicked');
                $(card).toggleClass('clicked');
                $('.card').css('pointer-events', 'auto');
                current=null;
                document.getElementById('lose').play();
            },500);
            
        }else{
           
            $('.card').css('pointer-events', 'none');
            setTimeout(function(){
                $(card).css('opacity','0');
                current.css('opacity','0');
                $('.card').css('pointer-events', 'auto');
                current=null;
                document.getElementById('win').play();
                count++;
                if(count===5){
                    $('.wrap').hide();
                    $('#progressBar').hide();
                    $('.congratulation').show();
                    $('.reset').click(function(event){
                    $('.reset').resetPage();
                    });
                }
            },200);
        }
    }
}
function progress(timeLeft,timeTotal,$element){
    var progressBarWidth=timeLeft*$element.width()/timeTotal;
    $element.find('div').animate({width:progressBarWidth},timeLeft==timeTotal?0:1000, 'linear');
    if(timeLeft>=0){
        setTimeout(function(){
            progress(timeLeft -1,timeTotal,$element);
        },1000);
    }else{
        $('.wrap').hide();
        $('#progressBar').hide();
        $('.congratulation').show();
        $('.reset').click(function(event){
        $('.reset').resetPage();
        });
    }
};
function easyPage(){
        progress(remainingTime,remainingTime, $('#progressBar'));
        $('.wrap').show();
        $('#progressBar').show();
}
function hardPage(){
    remainingTimeOfhardPage=10;
    progress(remainingTimeOfhardPage,remainingTimeOfhardPage, $('#progressBar'));
    $('.wrap').show();
    $('#progressBar').show();
}
$.fn.resetPage=function(){
    location.reload();
};
$(function(){
    cards=cards.concat(cards);
    cards= shuffle(cards);

    for(var i=0;i<cards.length;i++){
        $('.wrap').append('<div class="grid">' +
        '<div class="card" data-name="' + cards[i] +'" onclick="flip(this)">'+
        '<div class="front"><img src="'+cards[i]+'"></div>'+
        '<div class="back"><img src="img/green_back__74704.1441134974.480.480.png"></div>'+
        '</div></div>'); 
    };
    
    if(Page===0){
        $('.wrap').hide();
        $('#progressBar').hide();
        $('.congratulation').hide();
        $('.easy').click(function(){
            Page++;
            $('.startingPage').hide();
            $('.congratulation').hide();
            easyPage();
        });
        $('.hard').click(function(){
            Page++;
            $('.startingPage').hide();
            $('.congratulation').hide();
            hardPage();
        });
    }
});
