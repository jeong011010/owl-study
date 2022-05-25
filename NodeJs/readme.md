# [NodeJs](https://www.inflearn.com/course/nodejs-%EA%B0%95%EC%A2%8C-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#curriculum)

생활코딩 egoing 님의 Node JS 강의 수강

------------------------

```
cd C:\git\owl-study\NodeJs\js
```

# node js

__노드를 통해 다양한 자바스크립트 애플리케이션을 실행할 수 있는 javaScript 런타임__

<br><br>

## 인터넷 동작방법

인터넷에 접속하기 위해 주소를 입력할 때,<br> 

~~.com 이라고 기억하기 쉽도록 하는 이것은 __도메인__<br>

실제 해당 주소 정보를 가지고 있는 것은 __IP__<br><br>

__PORT__<br>
port는 배의 항구라는 뜻을 따온 것으로, 해당 주소 속의 여러개의 항구가 있음<br>
해당 항구에 따라 주소는 같지만 내용이 달라짐<br><br>
기본 port는 80이다.<br>
이 외에도 사람들이 정의해둔 다양한 Port 번호가 존재한다. ex) 404 - 에러 포트<br>

<br><br>

## 모듈

다양한 기능을 사용하기 위해 미리 만들어둔 __모듈__ 을 사용한다!

```
const 변수이름 = require(모듈이름);
ex) const http = require('http');
```

위의 문법을 사용하여 해당 모듈을 변수에 받아올 수 있음<br>
var 을 사용해도 되지만, 모듈을 한번 받아오면 변할 일이 없으므로 주로 const를 사용<br>
require 함수를 사용하여 모듈을 받아올 수 있음<br><br>

## NPM

__Node Package Manager__<br><br>
Node 계의 앱스토어와 같은 느낌<br>
다양한 모듈을 설치, 삭제, 업그레이드, 의존성 관리 등을 관리해준다.<br><br>

npm을 이용하여 모듈 및 패키지를 설치하는 방법<br>
```
npm install (모듈, 패키지 이름) -(옵션)
```

옵션에 따라서 해당 패키지를 설치하는 위치가 달라진다.<br>
이에 따라 해당 패키지를 사용할 수 있는 범위가 다르다.<br>
- -g : global (전역)
- 없음 : local (지역)
- --save : dependencies(의존성) 추가

```
npm init
```

위 명령어를 사용하여 패키지를 사용하기 전 초기화를 해준다.<br>
이를 통해 package.json 파일을 생성해준다.<br>
해당 파일에서 설치된 모듈들을 관리할 수 있다.<br><br>
--save를 사용하면 항상 해당 모듈이 적용되며 package.json 파일의 dependencies 목록에 추가된다.<br><br>

이후 모듈을 사용할 때 js 파일에서 
```var 변수이름 = require('모듈이름');```
을 사용하여 해당 변수에 모듈을 넣어 사용할 수 있다.<br><br>

## CallBack

CallBack : __나중에 호출 당할 함수__<br><br>
함수의 매개변수로 함수를 넣는다면, 함수가 실행되며 담겨있는 함수가 먼저 실행이 되고, 해당 함수의 return 값에 따라 함수가 실행이 된다.<br>
함수에 담긴 함수는 해당 함수가 실행될 때 자동으로 호출이 되기 때문에 CallBack 이라고 부른다.<br><br>
```
arr = [3,1,2];
function f(a,b){return a-b;}
arr.sort(f);
console.log(arr);
```
sort라는 함수에서 __callback함수 f()__ 를 사용한다.
<br>

## 동기와 비동기


NodeJs에서 추구하는 것이 __비동기적인 일처리__ 이다.<br><br>

__동기__ : 절차적으로 일을 처리하며, 하나의 일을 끝내야 다른 일을 할 수 있음
__비동기__ : 절차적이지만 일들을 함수로 선언하여 절차적으로 호출만 해준다. 다음 일을 호출할 때 이미 이전에 호출한 일은 뒤에서 진행이 되고 있는 상태.
<br><br>

논리적으로 생각해보면 __비동기가 효율적__ 이죠^^<br><br>

내장함수 뒤에 'Sync'가 붙어있다면 동기, 안붙어있다면 비동기 방식이다.<br>
비동기 방식의 함수는 매개변수로 callback 함수를 받을 수 있다.<br><br>

__비동기 방식의 특징__ 은 아래와 같다.<br>
- 비동기적 함수가 호출되는 동시에 백그라운드에서 함수가 실행된다.
- 호출만 절차적으로 될 뿐, 안의 실행내용은 함수 아래의 절차가 끝난 뒤 전달된다.
<br>
아래는 예시이다.

```
console.log(2); //1번 실행
비동기함수(매개변수, 콜백함수-> function(err,data){ //2번 호출
    console.log(3);//2번에서 백그라운드에서 실행후 대기중
})
console.log(4);//3번 실행
//4번 2번의 콜백함수 전달

결과

2
4
3
```

보통 콜백함수는 실행시 시간이 걸리는 것들이다.<br><br>

# Express

접속 위치 [localhost:port번호/router](localhost:3000)<br><br>

localhost 뒤에 붙는 port 번호에 따라 채널이 달라짐<br>
또한, '/' 뒤에 붙는 페이지 이름에 따라 다름<br>
이를 통해 페이지를 구분지어줄 수 있다.<br><br>

__Router__ 란<br><br>
사용자가 웹페이지를 접속하면 아래와 같은 일이 벌어진다.<br><br>
1. 사용자가 루트('/' 또는 '/login')로 들어온다.  
2. get 함수의 첫번째 인자를 통해 인자와 get함수의 일치 여부에 따라 두번째 익명함수(콜백함수)를 실행시킨다.  
3. 익명함수는 페이지에 출력되는 함수로 이루어져있다.  
<br>

여기서 루트에 따라 다른 페이지로 이동하는데, 이것을 해주는 것이 __라우터__ 이다.<br><br>

```
http://a.com/login
http://a.com/home
http://a.com/topic
```
/ 뒤에 따라오는 것을 __path__ 라고 한다.<br>

```
app.get('', function(req, res){
    ;
})
get 메소드를 사용하여 '/' 와 같은 루트를 호출하여 이러한 구조로 라우팅을 구현한다.
```
<br>

```
app.use(.static(''));
'' 위치에 있는 정적 파일을 서비스한다.
이미지와 같은 정적인 파일을 서비스 할 때 사용한다.
```

<br>

보통 정적 html 파일을 public 폴더에 만든 뒤, app.use를 이용하여 불러와서 웹페이지를 구성함.<br>
img 뿐만 아니라 정적인 html 파일 또한 정적 파일로 서비스 한다.<br><br>
app.get을 사용하여 콜백 함수안에 html을 표시해도 되지만, 지저분하다. app.use를 사용하여 정적인 html 파일을 호출하자.<br><br>
또한, app.get을 사용한다면 ` 표시를 사용한다. (~표시 shift)<br>
저걸 쓰면 안에 있는 것에 ${}를 사용하여 변수를 집어넣을 수 있다.<br>

## Template engine

굉장히 짧은 코드로 HTML 코드를 짤 수 있음.<br>
약간 암호 인코딩 느낌 생각하면 편함.<br><br>
해당 탬플릿 엔진을 사용하면<br>
- 규모있는 사이트의 용량을 줄일 수 있음
- 코드 작성 시간을 줄일 수 있음
- 재사용성이 높다
- 유지보수에 용이

<br>
위 수업에서는 'jade'를 사용함<br>
-> 오류 발생해서 찾아보니 라이센스 문제로 'pug'로 바꿔야 함<br><br>

### pug

HTML 코드를 간편하게 짜는 템플릿 엔진 중 하나.<br>
태그를 사용하지 않고, 탭을 사용하여 이전 태그에 포함시킬 수 있다.<br><br>
javascript를 사용할 때, '-' 기호를 앞에 붙여 화면에 표시되는 코드가 아님을 알려준다.<br>
```
html
    head
        title= title
    body
        h1 Hello Jade
        ul
            -for(var i=0;i<5;i++)
                li coding
        div = time
```

만약 pug파일에서 render에서 받아오고 싶은 것이 있다면 render의 인자로 {이름:매개변수} 로 받아올 수 있다.<br>

```
app.redner('temp',{time:Date(), title:'Jade'});
```

__템플릿 엔진과 Express를 결합하기 위해서는 views 폴더에 담긴 pug 파일을 render을 통해 불러온다.__ <br><br>


## query string

사이트 주소 구성 중 __path__ 에 따라서 다양한 페이지를 구성할 수 있다.<br>
그런데 만약 profile path를 제작한다면 어떨까?<br>
하나의 path에 모든 사람의 정보를 담을 수 없고, path1, path2,, 하기도 힘들다.<br>
이 때 사용하는 것이 __쿼리 스트링__ 이다.<br><br>

__쿼리스트링__ 이란 웹앱에 정보를 전달할 때 URL에 약속되어 담겨있는 국제적인 표준<br>

```
http://a.com/topic?id=1
http://a.com/topic?id=2
http://a.com/topic?id=3
'?' 뒤 부터 쿼리 스트링에 해당한다
```

id 값에 따라 같은 페이지에 다른 정보를 불러올 수 있다는 것이다.<br><br>

app.get 에서 콜백 함수의 req에서 query string 정보를 받아올 수 있다.<br>
req.query.(쿼리 아이디) 로 해당 데이터를 받아올 수 있다.<br><br>

즉 사용자가 쿼리스트링으로 접속할 때 전달한 정보를 사용할 수 있다.<br><br>

__시멘틱 URL__<br>
쿼리 스트링에서 path 방식으로 바꿔 깔끔하게 바꿀 수 있다.<br>

```
query string : localhost:3000/topic?id=1
symentic URL : localhost:3000/topic/1
```

시멘틱 URL을 사용할 때, id=1처럼 표시해주는 쿼리스트링과 달리 해당 값의 이름을 알 수 없으므로<br>
app.get 에서 주소를 받을 때, 값의 이름을 같이 받아준다.<br>
```app.get('/topic/:id',function(req,res){})```
<br>
그리고 req.query.id 와 다르게 req.params.id 로 정보를 받아온다.<br>

query 라는 객체 대신 __params__ 객체를 통해 받아오는 것이다.

## POST

__POST__ : 사용자의 정보를 서버로 전송하는 방식<br>

__GET__ : 어떠한 정보를 서버에 요청해서 가져오는 방식<br><br>

데이터를 받아 서버로 전송할 때 __form__ 태그를 사용하여 전송할 수 있다.<br>
```
<form action="/form_receiver">
      <p>
        <input type="text" name="title">
      </p>
      <p>
        <textarea name="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
```

<br>

form 태그에 __action__ 속성을 통해 form태그 안에서 받은 데이터를 해당 주소로 가져갈 수 있다.<br>
또한, 데이터를 받을 때 name="데이터이름" 을 지정하여 데이터 이름 안에 데이터를 저장할 수 있다.<br>
- 위의 경우 title과 description에 정보를 저장하여 form_receiver에 전송
- 전송시 ```http://localhost:3000/form_receiver?title=d&description=dd``` 로 query string을 통해 정보 전송
<br><br>

form 태그의 __method__ 속성은 __get__ 으로 설정되어 있음.<br>
__method__ 속성을 __post__ 로 설정한다면 POST 방식으로 데이터를 전송할 수 있다.<br>
POST 방식 전송을 하는 이유는??<br>
-> query string으로 정보를 전송하지 않아 정보를 숨길 수 있음.<br>
-> 정보를 담을 URL 길이가 제한이 없음.<br>
-> 브라우저 히스토리에 파라미터와 캐시가 남지 않아 보안적 면에서 유리함.<br><br><br>

Get 에서 req 데이터를 받을 때는 req.query.데이터이름 이다.<br>
Post 에서 req 데이터를 받을 때는 __req.body.데이터이름__ 으로 받는다.<br><br>

기본적으로 post 방식으로 전달된 데이터는 정의되어 있지 않다. 그렇기에 body-parser 또는 multer와 같은 __middleware__ 을 사용하여 받을 수 있다.<br>
우리는 body-parser 모듈을 사용했다.<br>
- 모든 요청은 body-parser을 먼저 거치며 해당 객체가 가지고 있지 않았던 'body'를 추가해준다.<br>

## Mongo DB

[Mongo DB 설치 강좌](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8/lecture/37065) - [Mongo DB 사이트](https://cloud.mongodb.com)<br><br>