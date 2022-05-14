var express = require('express');
var app = express(); // express 사용 형식

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/template', function(req,res){
    res.render('temp');
})

app.get('/', function(req, res){ //get 방식으로 접속한 유저가 '/'에 접속했다면 콜백함수 실행
    res.send('Hello home page'); // res(response)의 send method 인자로 출력하고 싶은 메세지
});
app.get('/login',function(req,res){
    res.send('Login please');
})
app.get('/dynamic', function(req, res){
    var output =`
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title></title>
    </head>

    <body>
        Hello, Static!
    </body>

    </html>
    `
    res.send(output);
})

app.listen(3000, function(){ //port 번호와, 연결 성공여부에 따라 실행되는 콜백함수
    console.log('Connected 3000 port');
});