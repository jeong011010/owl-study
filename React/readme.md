# [React](https://www.youtube.com/watch?v=y4Pd3M1ZIXk&list=PLB7CpjPWqHOuf62H44TMkMIsqfkIzcEcX&index=6)

코지 코더 님의 React 강의 수강

------------------------

```
cd C:\git\owl-study\React\my-app
npm start
```

## Event Handling

__Event란__ 어떠한 사건이 일어났을 때를 말한다.<br>
ex) 버튼을 클릭하거나 페이지를 이동할 때<br><br>

- 배운 코드
```js
onKeyUp={함수} 
const 함수 = (event) => {}

/*
onKeyUp 속성은 key 가 올라올 때 함수를 실행하며
매개변수로 해당 event를 받아올 수 있음.
event 객체의 key를 이용하여 눌린 key를 받아올 수 있다!!!
*/

onClick={함수}

//onClick 속성 또한 마찬가지이다.
```

<br>
event를 다루는 것은 굉장히 중요한 부분이다!!!<br>
