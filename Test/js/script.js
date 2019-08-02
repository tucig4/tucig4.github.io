var arr=[];
var soChinhPhuongArr=[];
var tatCaCacDaySoChinhPhuong1=[];
function InraKQ(){
    let input=$('.textInput').val();
    arr= input.split(' ').map(Number);
    for(let i=0;i<arr.length;i++){
        object={
            index:'',
            value:'',
        };
        if((Math.abs(Math.sqrt(arr[i]))-Math.abs(Math.floor(Math.sqrt(arr[i]))))===0){
            object.index=i;
            object.value=arr[i];
            soChinhPhuongArr.push(object);
        }
    }
    inDaySoChinhPhuong(soChinhPhuongArr);
    InKQ();
}
function InKQ(){
    $('.display').append('<div>')
}
function inDaySoChinhPhuong(soChinhPhuongArr){
    console.log(soChinhPhuongArr);
    let phanTuDauTienCuaDayHienTai=0;
    for(let i=0;i<soChinhPhuongArr.length;i++){
        let tatCaCacDaySoChinhPhuong=[];
        for(let j=phanTuDauTienCuaDayHienTai;j<soChinhPhuongArr.length;j++){
            if(soChinhPhuongArr[j].value < soChinhPhuongArr[j+1].value){
                tatCaCacDaySoChinhPhuong[phanTuDauTienCuaDayHienTai]++;
            }
            if(soChinhPhuongArr[j].value>soChinhPhuongArr[j+1].value){
                tatCaCacDaySoChinhPhuong[phanTuDauTienCuaDayHienTai]++;
                phanTuDauTienCuaDayHienTai=i+1;
            }
        }
    }
    tatCaCacDaySoChinhPhuong1=phanTuDauTienCuaDayHienTai;
    console.log(tatCaCacDaySoChinhPhuong1);
}
