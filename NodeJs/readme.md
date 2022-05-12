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