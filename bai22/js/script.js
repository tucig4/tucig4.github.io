cards=['img/2D__57497.1440113502.480.480.png',
'img/3C__99122.1440113509.480.480.png',
'img/4H__83243.1440113515.480.480.png',
'img/5S__90574.1440113521.480.480.png',
'img/KH__01216.1440113580.480.480.png'];

var current = null;

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
            },200);
        }
    }
}

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
});
