function changeFontSize(x){
    var x1= x + "px";
    var elements= document.querySelectorAll("p");
    for(var i=0;i< elements.length;i++){
        elements[i].style.fontSize=x1;
    }
}
function increaseFontSize(paragraph){
    var variable=document.getElementById(paragraph);
    var compStyles= window.getComputedStyle(variable,null).getPropertyValue("font-size");
    var compStylesToNumber= parseInt(compStyles);
    if(compStylesToNumber<30){
        variable.style['font-size']=compStylesToNumber+1+'px';
    }else{
        console.log("Please decrease your font size to below 30 px");
    }
}
function decreaseFontSize(paragraph){
    var variable=document.getElementById(paragraph);
    var compStyles= window.getComputedStyle(variable,null).getPropertyValue("font-size");
    var compStylesToNumber= parseInt(compStyles);
    if(compStylesToNumber>10){
        variable.style['font-size']=compStylesToNumber-1+'px';
    }else{
        console.log("Please increase your font size greater than 10 px");
    }
}
function changeColor(){
    var x=["blue","yellow","red"];
    var elements= document.querySelectorAll("p");
    for(var i=0;i< elements.length;i++){
        for(var j=0;j<x.length;j++){
            if(i==j){
                elements[i].style.color=x[j];
            }
        }
    }
}
function changeBgColor(color){
    var x=["blue","yellow","red"];
    var y="white";
    var elements= document.querySelectorAll("p");
    for(var i=0;i< elements.length;i++){
        for(var j=0;j<x.length;j++){
            if(i==j){
                elements[i].style.color=y;
                elements[i].style.backgroundColor=x[j];
            }
        }
    }
}
function copyContent(paragraph1, paragraph2){
    var variable2=document.getElementById(paragraph2).innerHTML;
    return document.getElementById(paragraph1).innerHTML=variable2;
}
