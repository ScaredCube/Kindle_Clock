function disptime(){
    var today=new Date();  
    var hh=today.getHours();
    var mm=today.getMinutes();
    var ss=today.getSeconds();
    if (hh<10){
        hh="0"+hh;
    }
    if (mm<10){
        mm="0"+mm;
    }
    /*
    if (ss<10){
        ss="0"+ss;
    }
    */
    
    document.getElementById("myclock").innerHTML="<div class='time'>"+hh+":"+mm+"</div>"
}
var mytime = setInterval("disptime()",1000);