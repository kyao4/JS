/**
 * Created by K.Yao on 2016/2/10.
 */

var querystring = require('querystring');
var formidable = require('formidable');
var fs = require('fs');
function start(response, request) {
    console.log('handler start was called.');
    var body =
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>';


    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}


function upload(response, request) {
    console.log('handler upload was called.');
    var form = new formidable.IncomingForm();
    console.log('about to parse.');
    form.parse(request, function (error, fields, files) {
        console.log('parse done.');
        fs.renameSync(files.upload.path, '/temp/test.png');
        response.writeHead(200, {"Content-Type":"text/html"})
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    })
}

function show(response, request) {
    console.log('handler show was called.')
    fs.readFile('/temp/test.png','binary', function (error, file) {
        if(error){
            response.writeHead(500,{"Content-Type":"text/plain"});
            response.write(error +"\n");
            response.end();
        }else{
            response.writeHead(200,{"Content-Type":"image/png"});
            response.write(file,"binary");
            response.end();
        }
    })
}


exports.start = start;
exports.upload = upload;
exports.show = show;