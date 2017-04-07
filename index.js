var http = require('http');
var querystring = require('querystring');
//json转换为字符串
var data = querystring.stringify({
    XM: "5",
    XB:"女人",
    DZ: "南京"
});
var options = {
    host: '115.29.103.128',
    //    host:'localhost',
    port: 1088,
    path: '/?type=dl&act=user.InsertHYXX',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};


function PostTask() {
    for (var i = 0; i < 500; i++) {
        var req = http.request(options, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log("body: " + chunk);
            });
            res.on('end', function (chunk) {
                console.log("body: " + chunk);
            })
        });
        req.on('error', function (e) {
            console.log(e.message);
        });
        req.write(data);
        req.end();
    }
}

var TimerTick = 1000 * 5;
setInterval(function () {
    console.log('start post...');
    PostTask();
}, TimerTick);




