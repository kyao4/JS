/**
 * Created by K.Yao on 2016/2/12.
 */

var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('hello, world!');
});

app.listen(3000, function () {
    console.log('server has started at port 3000');
});
