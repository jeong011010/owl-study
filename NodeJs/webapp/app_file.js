var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.locals.pretty=true;
app.use(bodyParser.urlencoded({extended:false}));
app.set('views','./views_file');
app.set('view engine','pug');

app.get('/topic/new', function(req,res){
    fs.readdir('data',function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error'); // send 다음 코드는 실행이 되지 않는다.
        }
        res.render('new', {topics:files});
    });
});

app.get(['/topic', '/topic/:id'], function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error'); // send 다음 코드는 실행이 되지 않는다.
        }
        var id = req.params.id;
        if(id){
            fs.readFile('data/'+id,'utf8',function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error'); // send 다음 코드는 실행이 되지 않는다.
                }
                res.render('view', {topics:files, title:id, description: data});
            })
        } else {
            res.render('view', {topics:files, title:'Welcome', description:'Hello, JavaScript for server.'});
        }
    })
})

app.post('/topic', function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){ // ('주소', '내용') 주소+(제목)에 해당내용이 담긴 파일을 작성한다. 
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error'); // send 다음 코드는 실행이 되지 않는다.
        }
        res.redirect('/topic/'+title);
    });
})

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
})