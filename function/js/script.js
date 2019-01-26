function bai1(n){
    return n*n;
}
function bai2(a,b,c){
    return bai1(3*a + 2*b - c);
}
function bai3(z){
    return z.slice(0,10)+ "...";
}
function bai4(f){
    return f[0].toUpperCase()+ f.slice(1,21).toLowerCase();
}
function bai5(d){
    d.sort(function(a,b){ return a-b});
    return d[0];
}
function bai6(e){
    return e.sort();
}
var teacher = {
    firstName: "Kim",
    lastName: "Dung",
    age: 30,
    say: function(){}
}
var student = {
    firstName: "Yes",
    lastName: "No",
    age: 1,
    say: function(){}
}
var parent = {
    firstName: "Ok",
    lastName: "Tim",
    age: 80,
    say: function(){}
}
var aboutMe=function(){
    console.log("Xin chào, tôi là"+" "+this.firstName+" "+this.lastName+". Năm nay tôi "+this.age+" tuổi.");
}
student.say=aboutMe;
student.say();
parent.say=aboutMe;
parent.say();
teacher.say=aboutMe;
teacher.say();