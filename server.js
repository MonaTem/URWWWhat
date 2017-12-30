var http = require('http'),
    queryString = require('querystring');

http.createServer(function (oRequest, oResponse) {

    var oQueryParams;

    // get query params as object
    if (oRequest.url.indexOf('?') >= 0) {
        oQueryParams = queryString.parse(oRequest.url.replace(/^.*\?/, ''));

        // do stuff
        console.log(oQueryParams);
    }

    oResponse.writeHead(200, {'Content-Type': 'text/plain'});
    oResponse.end('Hello world.');

}).listen(8000);
