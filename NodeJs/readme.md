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

__동기__ : 절차적으로 일을 처리하며, 하나의 일을 끝내야 다른 일을 할 수 있음
__비동기__ : 절차적이지만 일들을 함수로 선언하여 절차적으로 호출만 해준다. 다음 일을 호출할 때 이미 이전에 호출한 일은 뒤에서 진행이 되고 있는 상태.
<br><br>

논리적으로 생각해보면 __비동기가 효율적__ 이죠^^<br><br>

