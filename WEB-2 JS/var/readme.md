# Variable

## data type

- Number
- String
- Boolean
- Null
- Undefined
- BigInt
- Symbol

## JS 명령어

- "".length : 문자 개수 반환
- "".toUpperCase() : 대문자로 변환
- "".indexOf('문자') : 해당 문자의 시작 위치 반환

## 변수

변수 선언 방법

```
var 변수이름 = '초기값';
```

- 변수를 이용해서 중복된 값을 한번에 처리할 수 있음.  

문자열 같은 경우 중복된 값에 변수를 넣어, 수정할 때 변수 하나만 수정하면 됨.

<details>
<summary>ex)</summary>
```
var tmp = "잘 가라 구름아 널 닮은 구름아 난 같은 자리에 있지만 온 세상 돌아라 그 위에 하늘과 난 같은 자리에 있지만";
alert("음 저 구름들은 다 어디로 가는지 정말 궁금해 어쩌면 너도 같은 곳을 보고는 있지 않을까 하늘엔 널 닮은 구름만 가득해 바라보다 나 바란다면 너와 마주할 수는 없는 걸까 텅 빈 거리 서걱이는 맘 바래진 기억만이 남아 " + tmp + " 텅 빈 거리 서걱이는 맘 저무는 기억만이 남아 " + tmp + " 우 바라볼 수밖에 없는 나 저 구름을 타고 날 데려가 " + tmp + " 음");
```
</details>

## Boolean data

비교연산자를 이용하여 나타낼 수 있는 타입

<br>

true, false로 이루어져 있으며 비교 연산자의 결과에 따라 참 또는 거짓을 반환한다.<br><br>
'>', '<', '==' 을 통해 a와 b를 비교하여 결과를 나타낸다.<br><br>

이러한 과정과 반환값을 통해 if, while 과 같은 조건문을 사용할 수 있다.<br>

<details>
<summary>== 와 == 의 차이</summary>
a == b 와 a === b 의 결과는 다르다.<br><br>
== 는 보기에 같은지. === 는 데이터 타입까지 같은지를 보는 것 같다. <br><br>

ex)

```
null == undefined // true
null === undefined // false

true == 1 // true
true === 1 // false

0 == "0" // true
0 === "0" // false
```

위와 같이 데이터 타입까지 비교하는 것이 ==와 ===의 차이점이다.


## Array

배열

```
var arr(배열 이름) = ['','',,,]; 
위와 같이 배열을 선언할 수 있다.

arr.push('');
push 명령어를 통해 배열에 값을 추가할 수 있다.

배열의 순서에 따라 값에 0부터 번호가 주어진다.
document.write(arr[0]);
```


</details>

## 특징

<details>
<summary>1+1과 '1'+'1'</summary>
웬만한 다른 언어 syntex에서도 통일되는 것 처럼 JS에서도 Data Type이 있음.<br><br>
문자열과 숫자가 다르며, 더할수 있음<br><br>

- 1+1 은 num+num 이므로 2가 반환됨<br>
- '1'+'1'은 string+string 이므로 11이 반환됨<br>
</details>