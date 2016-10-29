/**
 * Created by K.Yao on 2016/2/10.
 */

function route(pathname, handle, response, request) {
    console.log('About to route a request for' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log('No request handler for ' + pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("404 error");
        response.end();
    }

}

exports.route = route;