function bai1(){
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    document.write("<p>"+"This: "+ date+"/"+month+"/"+year+"</p>");
    if(month>=3 &&  month<=5){
        document.write("Spring");
    }
    else if(month>=6 &&  month<=8){
        document.write("Summer");
    }
    else if(month>=9 &&  month<=11){
        document.write("Autumn");
    }
    else if(month===12 || month===1 || month===2){
        document.write("Winter");
    }
}

function bai2(f){
    if(typeof f === "string"){
        checkString(f);
    }else{
        convertString(f);
        checkString(f);
    }
}
function convertString(t){
    var newString="";
    return newString=t.toString();
}
function checkString(z){
    if(z.length<10){
        document.write(z);
    }else{
        document.write(z.slice(0,10)+"...");
    }
}

function bai3(a){
    if(0<=a && a<=3.9){
        document.write("F");
    }
    
    if(4<=a && a<=5.4){
        document.write("D");
    }

    if(5.5<=a && a<=6.9){
        document.write("C");
    }
    if(7<=a && a<=8.4){
        document.write("B");
    }
    if(8.5<=a && a<=10){
        document.write("A");
    }
}

function translate(b){
    switch(b){
        case "+1":{
            document.write("German: Hallo");
            break;
        }
        case "+2":{
            document.write("English: Hello");
            break;
        }
        default:{
            document.write("Vietnamese: Xin Chao");
            break;
        }
    }
}

function bai5(c){
    var count=0;
    for(var i=0;i<c.length;i++){
        if(c[i]==="true"){
            document.write("Location: "+i);
            break;
        }
    }
    
}
function bai6(){
    for(var i=1;i<100;i++){
        if(i%2===0){
            document.write("<p style='color:blue'> "+i+"</p>");
        }
    }
    for(var i=1;i<100;i++){
        if(i%2!==0){
            document.write(`<p style="color:red"> ${i}</p>`);
        }
    }
}
bai6();
