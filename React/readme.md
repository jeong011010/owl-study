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

useState는 현재의 __state 값__ 과 __이 값을 업데이트하는 함수__ 를 쌍으로 제공한다.<br>
```js
const [변수이름, 업데이트변수이름] = useState(값);
```
위와 같이 작성하여 사용하면, 
- 변수이름을 가져와 사용할 수 있으며
- 변수의 값이 바꼈을 때, reload되지 않으면 화면에 적용되지 않는 점을 보완하여 __업데이트 함수__ 를 사용하여 값을 바꿀 시 자동으로 reload를 해주어 화면에 적용이 되도록 해준다.
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