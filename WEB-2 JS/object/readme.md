# Object 객체

배열이 순서대로 정보를 저장하는 것이라면<br>
객체는 순서 없이 정보를 저장할 수 있음.<br><br>

__객체 생성 방법__<br>
```
var 객체이름 = {
    'key값' : 'value값',
    'key값' : 'value값',,,
};
```

<br>

객체는 __key__ 와 __value__ 로 구성되어 있다.(c++에 hash나 class와 같은 느낌)<br><br>

__객체 데이터 불러오는 법__<br>
```
document.write(객체이름.key값);
```

<br>

객체를 참조할 때는 '.'을 사용하여 속으로 들어간다.<br>
또는 배열과 같이 대괄호를 사용하여 참조할 수 있다.<br>
```
document.write(객체이름[key값]);
```

<br><br>

__객체 데이터 삽입__<br>

```
객체이름.key값 = "value";
객체이름[key값] = "value;
```

<br>

그냥 변수 생성처럼 하면 됨.<br><br>

__객체 반복문__<br>

for 문을 사용해준다.<br>

```
for (var key in 객체이름) 
    {
        document.write(key + ' : ' + 객체이름[key] + '<br>');
    }
```

<br><br>


__객체 함수__<br>

다양한 내장 라이브러리 함수도 이렇게 만들어진 듯 하다.

```
var 객체이름 {
    함수이름:function (매개변수){
        실행내용;
    }
}
```

<br><br>


## 특징

<details>
<summary>document.querySelector('')</summary>
객체를 배우면서 보다 보니 이것도 객체의 한 종류이다?!<br>
document라는 객체의 querySelector, write 와 같은 메소드를 사용하는 것이었다.
</details>