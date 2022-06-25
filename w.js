var xxyy
function getXYbyIP(){
    var url="https://api.map.baidu.com/location/ip?ak=HQi0eHpVOLlRuIFlsTZNGlYvqLO56un3&coor=bd09ll";
    $.ajax({
        url:url,
        type: 'POST',
        dataType: 'JSONP',
        cache: true,
        async: false,
        success: function (data) {
            console.log(data)
            var xx=data.content.point.x;
            var yy=data.content.point.y;
            console.log(xx)
            console.log(yy)
            var xxyy=xx+","+yy;
            console.log(xxyy)
            console.log(typeof xxyy)
        },
        error: function (data) {
        }
    });
}
var xyxy=getXYbyIP()
console.log(xxyy)

$.ajax({
    url:"https://api.caiyunapp.com/v2.6/7nwG8eAghJaL85G8/"+"113.27143134,23.13533631"+"/realtime",
    // url:"https://api.caiyunapp.com/v2.6/7nwG8eAghJaL85G8/"+xyxy+"/realtime",
    type:'get',
    async:false,
    dataType:'jsonp',
    jsonp:'callback',
    jsonpCallback : 'data',
    success:function(data){
        console.log(data)
        if(data.status==='ok'){
            var skycon=data.result.realtime.skycon
            temperature=data.result.realtime.temperature
            console.log(skycon)
            document.getElementById("weather").innerHTML="<div class='weather'>"+skycon+"</div>"
            document.getElementById("weather_t").innerHTML="<div class='weather'>"+temperature+"℃</div>"
        }
    }
})