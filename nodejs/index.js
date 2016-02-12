/**
 * Created by K.Yao on 2016/1/24.
 */

var server = require('./server.js');
var router = require('./router.js');
var requestHandler = require('./requestHandler.js')

handle = {}
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/show'] = requestHandler.show;
server.start(router.route, handle);