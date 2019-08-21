$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$('.hero').hover(function(){
    $(this).find(".hover-sth").css("display","block");
},function(){
    $(this).find(".hover-sth").css("display","none");
})
$('.latest-works-container-1').hover(function(){
    $(this).find(".plus").css("display","block");
},function(){
    $(this).find(".plus").css("display","none");
})
$('.mask-container').hover(function(){
    $(this).find(".plus-1").css("display","block");
},function(){
    $(this).find(".plus-1").css("display","none");
})
$('.mask-container-2').hover(function(){
    $(this).find(".plus").css("display","block");
},function(){
    $(this).find(".plus").css("display","none");
})
$('.next').hover(function(){
    $(this).find(".word-footer-2").css("color","#00bc9c");
    $(this).find(".fa-arrow-right").css("color","#00bc9c");
},function(){
    $(this).find(".word-footer-2").css("color","#98a6b4");
    $(this).find(".fa-arrow-right").css("color","#98a6b4");
})
$(document).ready(function() {
    
       var stickyNavTop = $('.header-2').offset().top;
     
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop > stickyNavTop) { 
            $('.header-2').addClass('stick');
        } else {
            $('.header-2').removeClass('stick'); 
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
var arr=[];
    var image={
        id:1,
        url: 'img/background.png',
    }
    var image2={
        id:2,
        url:'img/bg-1.jpg',
    }
    var image3={
        id:3,
        url:'img/bg-3.jpg',
    }
    var image4={
        id:4,
        url:'img/bg-4.jpg',
    }
    var image5={
        id:5,
        url:'img/bg-5.jpg',
    }
    arr.push(image,image2,image3,image4,image5);
function changeImage(n){
    for(let i=0;i<arr.length;i++){
        if(n===arr[i].id){
            $('.hero').css('background-image','url("'+ arr[i].url+'")');
        }
    }
}
function currentIndex(m){
    
    for(let i=0;i<arr.length;i++){
        if(m>0){
            var currentURL=$(".hero").css("backgroundImage").split(/\//).slice(-2).join("/").slice(0, -1).slice(0,length-1);
            if(currentURL===arr[i].url){
                if((arr[i].id+1) ===6){
                    changeImage(1);
                }else{
                    changeImage(arr[i].id+1);
                    break;
                }
            }
        }
        if(m<0){
            var currentURL=$(".hero").css("backgroundImage").split(/\//).slice(-2).join("/").slice(0, -1).slice(0,length-1);
            if(currentURL===arr[i].url){
                if((arr[i].id-1) ===0){
                    changeImage(5);
                }else{
                    changeImage(arr[i].id-1);
                    break;
                }
            }
        }
    }
}

    // $('.button-search-container, button-search-container-1').click(function(e){
    //     e.preventDefault();
    //     $('.search-form, .button-search-container').toggle();
    // });  

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }