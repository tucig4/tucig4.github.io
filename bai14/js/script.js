//bai1
function bai1(x,y){
    if(typeof x==="number" && typeof y==="number"){
        console.log("True");
    }else{
        console.log("False");
    }
    if(x>y){
        console.log("x is the bigger than y");
    }else{
        console.log("y is the bigger than x");
    }
}
//bai2
function bai2(u){
    var S=1;
    if(u>=0){
        for(var i= 1;i<=u;i++){
            S*=i;
        }
        console.log(S);
    }else{
        console.log("Please type again!");
    }
}
//bai3
function bai3(l){
    var w="";
        for(var i=0;i<l.length;i++){
            if(l[i]%2==0){
                w+=l[i];
            }
        }
    console.log(w);   
}
//bai4

var user={
    acc:"qwertyuiopasdfghjklzx",
    pass:"12345",
    confirm:"123456"
}
var user1={
    acc:"qwertyuiopasdfghjkl",
    pass:"12345678",
    confirm:"12345678"
}
var user2={
    acc:"zxcvbnmasdfghjkl",
    pass:"123456789qwertyuiopasdfghjklzxcvb",
    confirm:"123456789qwertyuiopasdfghjklzxcvbttttt"
}
var user3={
    acc:"",
    pass:"",
    confirm:""
}
var user4={
    acc:"ffffffffff",
    pass:"",
    confirm:"www"
}
function check(obj){
    if(obj.acc.length>=0 &&  obj.acc.length<=20){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
    if(obj.acc!==''&&obj.pass!==''){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
    if(obj.pass.length>=6 && obj.pass.length<=32){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
    if(obj.pass===obj.confirm){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}