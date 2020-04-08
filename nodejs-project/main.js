var os = require('os')
var http = require('http');
var versions_server = http.createServer( (request, response) => {
  response.end('Versions: ' + JSON.stringify(process.versions));
});
versions_server.listen(3000);

const info = {
    time: new Date(),
    cpus: os.cpus(),
    os_homedir: os.homedir(),
    os_platform: os.platform(),
    tmpdir: os.tmpdir(),
    platform: process.platform,
    version: process.versions
}

console.log('>>>> system info: ', JSON.stringify(info))

const _ = require('lodash')
console.log('>>>> use loadsh: ', _.add(1, 2))
