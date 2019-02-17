var check=false;
$('.f1_container').click(function () {
   
    if(check===false){
        $(this).toggleClass('active');
        check=true;
    }
});
function checkClassActive(){
    if(check===true){
        $('.f1_container').click(function () {
            $(this).toggleClass('active');
        });
    }
}
var arrayOfImage=[];
arrayOfImage.push("img/2D__57497.1440113502.480.480.png");
arrayOfImage.push("img/3C__99122.1440113509.480.480.png");
arrayOfImage.push("img/4H__83243.1440113515.480.480.png");
arrayOfImage.push("img/5S__90574.1440113521.480.480.png");
arrayOfImage.push("img/KH__01216.1440113580.480.480.png");
arrayOfImage.push("img/2D__57497.1440113502.480.480.png");
arrayOfImage.push("img/3C__99122.1440113509.480.480.png");
arrayOfImage.push("img/4H__83243.1440113515.480.480.png");
arrayOfImage.push("img/5S__90574.1440113521.480.480.png");
arrayOfImage.push("img/KH__01216.1440113580.480.480.png");
function replaceAllImageSrc(){
    shuffle(arrayOfImage);
    $("#one").attr("src",arrayOfImage[0]);
    $("#two").attr("src",arrayOfImage[1]);
    $("#three").attr("src",arrayOfImage[2]);
    $("#four").attr("src",arrayOfImage[3]);
    $("#five").attr("src",arrayOfImage[4]);
    $("#six").attr("src",arrayOfImage[5]);
    $("#seven").attr("src",arrayOfImage[6]);
    $("#eight").attr("src",arrayOfImage[7]);
    $("#nine").attr("src",arrayOfImage[8]);
    $("#ten").attr("src",arrayOfImage[9]);
}
replaceAllImageSrc();
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
