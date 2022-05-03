## Server, Client

인터넷이 동작하기 위한 2대의 컴퓨터.  
__웹 브라우저__ 와 __웹 서버__ 를 이용하여 인터넷이 동작하게 할 수 있다.  
<br>

__웹 브라우저__
정보를 요청한다.
고객. (Client)
<br>

__웹 서버__
정보를 응답한다.
사업자. (server)

<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7752.jpeg">


## 호스팅

- HTML은 웹브라우저만으로 해석이 가능함. 이런 것을 정적(static)이라고 함.
- 정적 파일은 서버에서 해줄 일이 없음.
- 호스팅을 하여 동적(dynamic)파일을 보내면 서버에서 다양한 기능을 사용할 수 있음.


### github page

- github의 page 기능을 이용하여 page 배포
<br>

1. github에 html 파일을 업로드하여 github의 서버 컴퓨터에 웹서버가 켜진다.
2. 웹 주소를 배포한다.
3. 방문자로서 github의 컴퓨터에 설치된 웹서버에 접속한다.

<img srv="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3135/7778.jpeg">


## 파일 찾기와 웹서버의 차이점

- chrome web server 기능을 이용하여 웹서버를 열어본다.  

![캡처](https://user-images.githubusercontent.com/28985560/166479184-76e8a125-fc8f-4178-8870-5615237a93f7.PNG)

- 파일탐색기에서 직접 열어본다.  

![캡처](https://user-images.githubusercontent.com/28985560/166479348-8a5df33b-060a-463f-a55c-19bb2a58d152.PNG)

웹 서버에서 열었을 때는 '127.0.0.1:8887' 이라는 ip와 port가 붙는다는 것이다.  
<br>
__Web browser__ 에서 Internet Protocol Address와 Port를 통해 하나의 __Web Server__ 를 가르키고, 서버 안에 있는 __Web__ 파일을 여는 것이다.