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


## HOOK

Hook이란 React에서 지원하는 기능으로, 다양한 함수, 문법이 추가되었다.<br>
그 중 가장 중요한 기능은 바로 __useState__ 이다.<br><br>

__참고__<br>
> js에서 html 안에서 변수를 사용하고 싶을 때는  
> 중괄호 {}를 이용하여 변수를 사용할 수 있다.  

<br><br>

### useState

useState는 현재의 __state 값__ 과 __이 값을 업데이트하는 함수__ 를 쌍으로 제공한다.<br>
```js
const [변수이름, 업데이트변수이름] = useState(값);
```
위와 같이 작성하여 사용하면, 
- 변수이름을 가져와 사용할 수 있으며
- 변수의 값이 바꼈을 때, 렌더링되지 않으면 화면에 적용되지 않는 점을 보완하여 
- __업데이트 함수__ 를 사용하여 값을 바꿀 시 자동으로 렌더링을 해주어 화면에 적용이 되도록 해준다.
<br><br>

form 태그를 사용하여 useState를 응용할 수 있다.<br>
```js
const [username, setUsername] = useState('');
const onSubmit = (event)=>{
    console.log(username);
};

<form onSubmit={onSubmit}>
    <input type="text" onChange={(e)=>setUsername(e.target.value)}/> <br/> 
    <button type="submit">Login</button>
</form>

// form태그는 onSubmit 속성의 값으로 type="submit" 버튼을 통해 이동 및 제출을 할 수 있다.
// 위 코드에서는 input type="text" 에서 값이 바뀔 때 마다 useState의 변경 변수를 이용하여 계속해서 초기화 해줬다.
```

### useEffect

useEffect 는 페이지가 __렌더링이 될 때 마다 실행__ 이 되는 함수이다.<br>

```js
useEffect(()=>{ // 렌더링이 될때마다 함수가 실행
    함수
},[state]) // state가 바뀔 때만 함수가 실행!!!
```
위에 설명한것 처럼 두번째 배열 인자에 넣은 state 값이 변경될 때만 실행하도록 설정할 수 있다.<br>
그렇지 않으면 불필요하게 모든 state가 변경될 때 마다 저 useEffect는 실행되기 때문이다.<br><br>

## Component

__Component__ 는 리액트로 만들어진 앱을 이루는 최소한의 단위이다.<br>
즉 다양한 기능의 컴포넌트들로 이루어진 것이 리액트 웹 앱 인것이다<br><br>
컴포넌트의 활용방법은 다양한데, 함수처럼 중복 제거에 사용할 수 있다.
- 반복되는 JS 파일 태그 및 state를 개별적인 JS파일에 만들어 export를 해준 뒤, APP.JS 에서 해당 파일을 import 해오기만 하면 된다.
- 그럼 해당 태그만 사용하면 해당 JS 파일에서 구현한 기능을 태그 하나만 작성해서 사용할 수 있다.

<br><br>

컴포넌트의 중요성은 __재활용성__ 에 있다.<br>
아무리 적은 중복의 활용이더라도, 수정에 용이하며 언제 다시 쓰일지 모르기 때문이다.<br>
중복이 조금이라도 있으면 최대한 컴포넌트로 만들어 사용하는 것이 좋다고 느꼈다.<br>
특히 이후 기술할 props을 사용하면 같은 컴포넌트 라도 충분히 다르게 활용할 수 있다.<br><br>

또한 컴포넌트를 만들 때, return 값으로 하나의 태그로 감싸줘야지 에러가 나지 않는다.<br>
여러개의 태그가 retunr이 되어야 하는 경우에, 하나의 div 태그로만 return이 되고 그 안에 여러 태그들이 있어야 에러가 없다.<br><br>

<details>
<summary>React-Router-DOM v6 관련 에러</summary>

[에러가 발생한 과정 Youtube 링크](https://www.youtube.com/watch?v=6wIPEfL1mWM&list=PLB7CpjPWqHOuf62H44TMkMIsqfkIzcEcX&index=20)<br>

위 강의에서는 React-Router-Dom V5로 진행을 하고 있다.<br>
현재 나의 버전은 v6이며 동시에 변경사항이 있다.<br><br>
- Switch -> routes
- Components -> elements
[도움받은 참고자료](https://velog.io/@nemo/react-error-routes)<br>
</details>

### props

함수의 매개변수처럼 컴포넌트에서도 값을 전달할 수 있다.<br>
여기서는 인자를 __props__ 라고 한다.<br>
```JS
const 함수 = (props) => {
    실행내용
    <h1> {props.이름} </h1>
};
// 함수.js

function App(){
    return(
        <함수 이름="값" />
    )
}
// App.js
```
위 처럼 상위 JS 파일에서 원하는 이름으로 인자를 지정한 뒤, 하위 JS 파일에서 해당 이름으로 데이터를 받아올 수 있다.<br><br>

조건에 따라서 html을 표시할 수 있다.<br>
삼항연산자를 사용하여 함수에 조건에 따라 다른 값을 넣어, 해당 변수를 {}로 넣어주면 충분히 가능하다.<br>

## loop

JS에서 React의 hook을 이용한 반복문을 작성할 수 있다.<br>
```JS
const 함수이름 = 배열이름.map(대충이름 => {
    return(
        <div>{대충이름.데이터}</div>
    )
})
return(
    <div className="App">
        {함수이름}
    </div>
)
```

위와 같이 배열에 여러 값이 들어있을 때, 모든 값을 조회하고 싶다면 __map__ 을 사용하여 편하게 반복해줄 수 있다.<br><br>

## filter

__filter__ 는 state 배열에서 특정 값만 지우고 싶을 때 사용하는 함수이다.<br>

```js
배열이름.filter(이름 => {
    return (배열에 남길 것);
})

// ex) return movie.id !== id 라면
// id 값과 일치하는 것만 제외하고 나머지 값은 다시 배열에 돌려주는 것.
```

<br>
filter 함수를 이용하여 db에서 삭제 기능을 구현할 수 있다.<br><br>

## React-Router

Web-app 의 특징인 렌더링을 통해 새로고침되지 않고 페이지가 바뀌는 기능을 구현할 때 사용한다.<br><br>
원래 주소가 바뀔 때, 페이지가 서버에 해당 주소를 요청하면, html 및 js 파일로 변환하여 해당 페이지를 불러오는 과정을 통해 페이지가 이동한다.<br>
__React-Router__ 를 사용하게 되면, 중간의 요청 과정에서 해당 Route를 가로채고, 요청하는 주소에 해당하는 Route로 갈아끼워준다.<br>
이를 통해 부드러운 웹앱의 특징을 가질 수 있다.<br>
