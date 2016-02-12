/**
 * Created by K.Yao on 2016/2/9.
 */


var http = require('http');
var url = require('url')

function start(route, handle) {
    function onRequest(request, response) {
        //console.log('get a request');
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + " recived.");

        route(pathname, handle, response, request);
        //route(pathname, handle, response);
    }

    http.createServer(onRequest).listen(8888);

    //console.log('event-driven');
}

exports.start = start;