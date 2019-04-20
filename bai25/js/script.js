/// <reference path="../typings/globals/jquery/index.d.ts" />
$('#LogIn').on('submit',function(){
    let isValid=true;
    if($('#name').val().trim()===''){
        $('#name').next('span').text('Name is empty');
        isValid=false;
    }else{
        $('#name').next('span').text('');
    }
    
    if($('#gender').val().trim()==='male' || $('#gender').val().trim()==='female'){
        $('#gender').next('span').text('');
    }else{
        
        $('#gender').next('span').text('Gender is invalid');
        isValid=false;
    }

    const facebookRegex=/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
    if(facebookRegex.test($('#facebook').val())===false){
        $('#facebook').next('span').text('FaceBook is invalid');
        isValid=false;
    }else{
        $('#facebook').next('span').text('');
    }


    const phoneRegex=/^[0]{1}[19]{1}[0-9]{8,9}$/;
    if(phoneRegex.test($('#phone').val())===false){
        $('#phone').next('span').text('Phone is invalid');
        isValid=false;
    }else{
        $('#phone').next('span').text('');
    }

   

    if($('#organisation').val().trim()===''){
        $('#organisation').next('span').text('Organisation is empty');
        isValid=false;
    }else{
        $('#organisation').next('span').text('');
    }
    console.log(isValid);
    return isValid;
    
});