//bai1
function bai1(f){
    var S=1;
    for(var i=1;i<=f;i++){
        S*=i;
    }
    return S;
}
//bai2
function bai2(z){
    var newstr="";
    for(var i=z.length-1;i>=0;i--){
        newstr+=z[i];
    }
    return newstr;
}
//bai3
function duplicate(e){
    var w= "";
    for(var i=0;i<10;i++){
       w+=e+"-";    
    }
    console.log(w.slice(0,w.length-1));
}
//bai4
function bai4(q){
    q.sort();
    console.log(q);
    for(var i=0;i<q.length;i++){
        document.write("<p>"+i+" "+q[i]+"</p>");    
    }
}
//bai5
function bai5(u){
    var w="";
    for(var i=0;i<u.length;i++){
        w+=u[i]*2;    
    }
    console.log(w);
}
function bai6(p){
    var w="";
    for(var i=0;i<p.length;i++){
        w+=p[i]%2;
    }
    console.log(w);
}
