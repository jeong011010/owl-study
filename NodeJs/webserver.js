const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;
 
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

/* 위와 같은 코드
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n');
});
server라는 변수에 위 함수를 담음.
req는 request 받은거
res는 response 보내는거

server.listen(port, hostname, function(){ 콜백함수
    console.log(`Server running at http://${hostname}:${port}/`);
});
server에 listen 비동기 함수를 호출
*/