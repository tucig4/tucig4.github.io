
var slider_content = document.getElementById('box');
var image=['img/lemonade1.jpg','img/Lunch-2-1080x300.png','img/Pho2_Slide.jpg'];
var link=['#','#','#'];
var text=['NƯỚC CHANH','BÁNH MỲ','PHỞ BÒ'];
var i=image.length;
var j=link.length;
var k=text.length;
function nextImage(){
    if(i<image.length&&j<link.length&&k<text.length){
        i++;
        j++;
        k++;
    }else{
        j=1;
        i=1;
        k=1;
    }
    slider_content.innerHTML="<img class='image' src="+image[i-1]+">"+
    "<span class='word'>"+text[i-1]+"</span>"+
    "<button class='btn-details'><a href="+link[i-1]+">XEM CHI TIẾT</a></button>";
}
function prewImage(){
    if((i<image.length+1 && i>1)&&(j<link.length+1 && j>1)&&(k<text.length+1 && k>1)){
        i--;
        j--;
        k--;
    }else{
        i=image.length;
        j=link.length;
        k=text.length;
    }
    slider_content.innerHTML="<img class='image' src="+image[i-1]+">"+
    "<span class='word'>"+text[i-1]+"</span>"+
    "<button class='btn-details'><a href="+link[i-1]+">XEM CHI TIẾT</a></button>";
}
setInterval(nextImage,6000);

