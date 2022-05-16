var express = require('express');
var app = express(); // express 사용 형식

app.locals.pretty = true; // pug code pretty

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/form', function(req,res){
    res.render('form');
})

app.get('/form_receiver', function(req,res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
})

app.get('/topic', function(req, res){
    //query string의 값은 req로 들어온다
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];

    var output=`
        <a href="/topic?id=0">JavaScript</a><br>
        <a href="/topic?id=1">NodeJS</a><br>
        <a href="/topic?id=2">Express</a><br>
        ${topics[req.query.id]}
    `

    res.send(output);
})

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