var http = require('http');
var querystring = require('querystring');
//json转换为字符串
var data = querystring.stringify({
    ID: "5",
    DZ: "南京"
});
var options = {
    host: '127.0.0.1',
    //    host:'localhost',
    port: 1088,
    path: '/?type=dl&act=getHYB',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};



for (var i = 0; i < 999; i++) {

    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
        res.on('end', function (chunk) {
            console.log("body: " + chunk);
        })
    });



    req.write(data);
    req.end();

    console.log("----");
    console.log(i);
}