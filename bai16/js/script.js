function printTrigangle(n){
    var str='';
    var count=0;
    for (var i = 0; i < n; i ++) {
        count++;
        for (var j = 0; j < count; j++) {
            str+=' * ';
        }
        str+='<br/>';
    }
    return str;
}
function printEmptyRectangle(a, b){
    var str='';
    for(var i=0;i<a;i++){
        for(var j=0;j<b;j++){
            if(i>0 && i<(a-1) && j>0 && j<(b-1)){
                str+=' .. ';
            }else{
                str+=' * ';
            }
        }
        str+='<br/>';
    }
    return str;
}
function printSpecialTrigangle(n){
    var str='';
    var count=n;
    var count1=0;   
    for (var i = n; i >= 0; i--) {
        for(var z=0;z<count1;z++){
            str+=' .. ';
        }
        for(var j=0;j<count+i-1;j++){
            str+=' * ';
        }
        if(count1===n-1){
            break;
        }else{
            count1++;
        }
        count-=1;
        str+='<br/>';
    }
    return str;
}
function printX(n){
    var str='';
    var count=0;
    var count1=0;
    var count2=n;
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(i===count && j===count){
                str+=' * ';
            }else if(i===count1 && j===count2-1){
                str+=' * ';
            }
            else{
                str+=' .. ';
            }
        }
        count1++;
        count2--;
        count++;
        str+='<br/>';
    }
    return str;
}
function printButterfly(n){
    var str='';
    var count01=0;
    var count1=n;
    var count02=n/2-1;
    var count2= n;
    var count3=1;
    // ma trận chỉ ra hình đúng với đầu vào là giá trị từ 3->10000
    for(var i=3;i<10000;i+=2){
        if(n===i){
            count2=n-count3;
            break;
        }
        count3++;
    }
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(i>=0 && i<n/2-1 && j>count01 && j<count1-1 ){
                str+=' .. ';
            }else if(i>n/2 && i<n && j>count02 && j<count2){
                str+=' .. ';
            }else{
                str+=' * ';
            }
            }
            
        if(i>n/2){
            count02--;
            count2++;
        }
            count01++;
            count1--;
            str+='<br/>';
    }
    return str;
}