# JS

__Java Script__   
JAVA 언어를 사용하여 HTML, CSS로만 이루어진 정적인 페이지에 동적인 기능을 추가해주는 역할.

<br>

사용자와 상호작용하기 위해 만들어진 언어  
그러므로 프로그래밍 언어라고 할 수 있음

## JS 명령어

__기본 틀__

```
<script>  
    명령어  
</script>  
```

위와 같이 JS를 사용할 수 있다.

<br>

- document.write("내용") 
> JS 출력문이다.  
> 따옴표로 감싸면 안의 내용이 출력된다.  
> 감싸지 않으면 안의 내용이 실행되어 결과가 출력된다.  

<br>

- alert("내용")
> JS 경고창 출력

<br>

- document.querySelector('태그')
> 특정 태그를 선택

<br>

- document.querySelector('태그').style.속성='변경내용'
> 특정 태그의 속성 style을 변경내용대로 변경

<br>

- if(조건) {script}
- else if(조건) {script}
- else {script}
> 조건에 따라 script 내용을 실행하거나 하지 않는다.

<br>

- 반복문
> while(조건){실행 내용;}  
> 조건에 부합하지 않을 때 까지 계속 실행 내용을 실행한다.

<br>

- document.querySelector('태그');
> 입력한 태그에 해당하는 태그의 정보를 가져온다. 
- document.querySelectorAll('태그');
> 입력한 태그에 해당하는 모든 태그의 정보를 배열로 가져온다. 

<br>

- function 함수이름(){실행내용;}
- 함수이름 = function(){실행내용;} (이렇게도 가능)
> 함수 선언  
> 아직 배우진 않았지만 괄호 안에 매개변수가 들어갈 듯  
> 매개변수를 넣을 수 있음. ex) function(self);

<br>

- script src="파일 주소"
> 여러 html에서 사용하는 코드를 하나의 파일에 모듈로 만들어 위 한줄로 사용할 수 있도록 함.
> 코드도 간단해지고 수정사항이 있을 때, 일일이 수정할 필요 없이 해당 파일만 수정하면 됨.
> 이것이 모듈화의 장점

<br>


## 속성값

- onclick = "" : 클릭될 때 이벤트 실행
- onchange = "" : 바꼈을 때 이벤트 실행
- onkeydown = "" : 눌릴 때 이벤트 실행

## 특징

<details>
<summary>JS와 HTML 차이</summary>

- HTML은 정적(static)
- JS는 동적(dynamic)

```
<html>
<script>
    documnet.write(1+1)
</script>
1+1
<html>
```

결과

```
2
1+1
```

위와 같이 HTML과 다르게 JS는 동적으로 실행된다는 특징이 있다.

</details>

<details>
<summary>이벤트</summary>
브라우저는 이벤트를 감지하고 알려줄 수 있음.<br>
이를 통해 사용자와 웹페이지가 상호 작용이 가능하도록 함.
<br><br>
다양한 event handler와 event type을 통해 여러가지 동작으로 상호작용 할 수 있음
</details>

<details>
<summary>리펙토링</summary>
중복되거나 자기 자신을 가르키는 긴 문장을 짧게 고쳐 보기 쉽게 만드는 과정<br><br>

- this : 자기 자신을 가르키는 syntex

```
ex) var target = document.querySelector('body');
위와 같이 함으로써 body를 가르키는 긴 문장을 target 하나로 대체할 수 있음.
```
</details>

<details>
<summary>함수의 필요성</summary>

보통 함수를 사용하는 이유는 __중복되는 코드를 리팩토링 하기 위해서__ 이다.<br>
그리고 보통 중복되는 코드는 길고 매개변수가 포함될 때 빛을 발한다<br><br>
__하지만!!__ 한줄짜리 코드라도 이후 전체 코드가 길어지고 오래되었을 때, 해당 코드의 의미를 까먹을 수 있다.(주석처리도 도움이 됨)<br>
그럴 때 함수의 이름을 통해 해당 코드의 역할을 유추할 수 있도록 하는 것 또한 __함수의 역할__ 이다.

</details>

<details>
<summary>함수 정의 방법</summary>

함수 선언 방법에는 여러가지가 있다.<br>
1. 함수 선언식
function 키워드를 이용한다.
```
function 함수이름(매개변수){
    실행내용;
}
```

2. 함수 표현식
함수 리터럴을 이용한다.<br>
JS 엔진에 의해 리터럴 방식으로 선언한 코드는 자동으로 객체방식으로 변환되어 실행된다.<br><br>
```
var 함수이름 = function(매개변수){
    실행내용;
};
```

3. Funtion 객체 이용
```
var 함수이름 = new Function(매개변수, 실행내용);
```

4. 익명 함수
다른 함수간의 충돌을 막기 위해 사용<br>
```
(function(매개변수){
    실행내용;
})(인자);
```
</details>

<details>
<summary>라이브러리와 프레임워크</summary>

라이브러리 : 부품들이 잘 정리된 곳<br>
ex) C++ - STL(vector, stack, algorithm ...)<br><br>

프레임워크 : 어느정도 베이스를 제공하고 추가적인 부분을 사용<br>
ex) sprint, Django, jQuery, React.js ...<br><br>

</details>

<details>
<summary>UI, API</summary>

User Interface : 사용자가 시스템을 이용하기 위해 사용하는 것<br>
ex) 모니터에 출력되는 화면, 키보드...<br><br>

Application Programming Interface : 어플을 만들기 위해 프로그래밍하여 만든 조작장치들<br>
ex) 함수 alert(), echo()...<br><br>

</details>