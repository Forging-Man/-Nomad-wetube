색깔 표기 정리 </br>
<span style="color:red">[HTML]</span>
<span style="color:skyblue">[CSS]</span>
<span style="color:yellow">[JS]</span>
<span style="color:#FF7F50">[Node-JS]</span>
<span style="color:#00FFFF">[EXPRESS]</span>
<span style="color:#7FFF00">[MONGO-DB]</span>

# #2 Set Up

## #2.1 Installing Express

<span style="color:#FF7F50">[Node-JS]</span> node 실행법 / npm 파일 만들기 </br>

- npm 파일 : Node JS와 연결되어 있는 패키지 파일 </br>
  npm install 등을 작동시킬때는 반드시 package.json 파일을 닫고 하라.

```js
// 프로젝트 폴더 안의 터미널에서
> npm init // npm을 통해 package.json 파일 생성
> npm run script_name // npm을 통해 pacjage.json 내부의 script 실행

// node 실행법
// 터미널에서 이를 직접 입력해도 되고, npm에 해당 문구를 넣어서 npm을 통해 실행시켜도 된다.
> node js_file_name
```

</br>

---

## #2.3 Understanding Dependencies

<span style="color:#FF7F50">[Node-JS]</span> package.json 안의 dependencies 설명 </br>

- dependencies 안의 설명들은 이 프로젝트의 Node를 실행하기 위해 필요한 패키지 리스트
- denpendencies 정보가 들은 package.json만 있다면, 누구나 npm i 를 통해 해당하는 모든 패키지를 한 방에 인스톨 가능
- package.json 이 매우 중요한 이유

</br>

---

## #2.4 The Tower of Babel

<span style="color:#FF7F50">[Node-JS]</span> devdependencies 란? </br>

- "개발자"들을 위한 의존성 패키지
- "유저" 입장에서는 필요없는 것
- 단순히 "누구를 위한 의존성인가"를 명시하기 위해 구분할 뿐, 큰 의미는 없다.
- 어차피 설치할때는 알아서 전부 다 설치된다.

```js
> npm install --save-dev package_name // --save-dev가 추가됨
```

<span style="color:#FF7F50">[Node-JS]</span> Bable 이란? </br>

- Node는 최신 js문법까지 적용할 수 있는 건 아니다.
- Bable은 최신 js문법을 자동으로 Node에 알맞게 바꿔주는 패키지

```js
// 설치 방법
> npm install --save-dev @bable/core
> npm install @babel/preset-env --save-dev // preset 설치
```

</br>

---

## #2.5 Nodemon

<span style="color:#FF7F50">[Node-JS]</span> Nodemon 이란? </br>

> NODE 서버를 이용하면서 코드를 변경하게 될 경우, 변경한 코드를 웹 상에서 확인하려면 서버를 껐다가 다시 켜야 변화를 감지할 수 있다. NODEMON은 서버를 내리고 올리지 않아도 소스를 변경할 때 바로 감지해서 자동으로 서버를 재시작 해주는 TOOL이다.

```js
// 설치 방법
> npm install @babel/core @babel/node --save-dev
```

```js
// package.json 에서 사용방법
  "scripts": {
    "dev": "nodemon --exec babel-node index.js"
  },

// 터미널 사용법
> npm run dev // nodemon이 켜져있으므로 js파일이 변경될때마다 자동 재실행 (서버용)
```

</br>

---

# #3 Introduction to Express

## #3.0 Your First Server

<span style="color:#00FFFF">[EXPRESS]</span> express란?</br>

> express란 NodeJS를 사용하여 쉽게 서버를 구성할 수 있게 만든 클래스와 라이브러리의 집합체

```js
// express application 만드는법
// 여기서 말하는 application : express 메소드를 쓰기 위해 정의시켜두는 app 변수
import express from "express";

const app = express();
```

```js
// 서버를 만들고 포트 4000을 listening하는 법
app.listen(4000, callback_func); // 포트번호, 콜백함수
```

- 서버 상황을 보고 싶다면, 웹 주소에 localhost:4000 입력
- 서버가 아예 열리지 않았다면, 페이지 자체가 안열릴거임.

</br>

---

## #3.1 GET Request P1

<span style="color:#00FFFF">[EXPRESS]</span> HTTP GET method 의미</br>

```js
// 서버에 처음 접속하면 아래와 같은 에러메세지가 뜬다. 그 의미를 생각해보자
cannot GET /
// GET : HTTP method로 뒤의 주소를 서버로부터 가져와서 표시해준다.
// /... : GET의 대상물에 해당하는 주소.

/*
해당 에러메세지는 "/의 주소를 가져올 수가 없다"라는 뜻이다.
서버를 처음 접속하면 자동으로 HTTP에서 GET method를 실행한다.
따라서 서버측에서는 해당 GET method에 맞는 무언가를 준비해둬야 한다.
*/
```

</br>

---

## #3.2 GET Request P2

<span style="color:#00FFFF">[EXPRESS]</span> GET을 처리하는 방법</br>

```js
app.get("처리할 대상물", callback_func); // app.get("/", handleHome); 수업 중 코드
```

</br>

---

## #3.3 Responses

<span style="color:#00FFFF">[EXPRESS]</span> response에는 항상 req, res 두 개체가 생성된다. </br>

- addEventListner의 callback함수의 event 객체처럼, </br>
  express의 각종 callback함수는 requese, response의 두 객체를 생성한다.

```js
const handleHome = (req, res) => console.log(req); // or res
app.get("/", handleHome); // 서버 로딩 시 req 객체 확인
```

```js
const handleHome = (req, res) => {
  return res.end(); // res의 end()함수 이용
};
app.get("/", handleHome); // 서버 로딩 시 res가 end()를 작동시켜 request를 끝내버림
```

```js
// res 함수들
res.end() : request를 바로 종료
res.send("메세지") : 화면에 띄울 메세지를 입력
// 메세지 이외에도 JSON 등을 기입할 수도 있음
```

</br>

---

## #3.5 Middlewares P1

<span style="color:#00FFFF">[EXPRESS]</span> Middleware란? </br>

- request를 처리해서 response하기 위해 중간에서 일하는 함수들
- 여태까지 handle..라고 썼던 함수들이 모두 Middleware에 속한다. </br>
  (handle.. 을 이제부터 controller라고 총칭한다.)
- next객체와 next함수를 이용해서 다음 미들웨어(함수)를 호출할 수 있다.

```js
// next 객체를 포함한 middleware
const gossipMiddleware = (req, res, next) => {
  console.log("this is middle");
  // return res.send("End Line!");
  // ↑ return을 포함하므로, 여기서 함수 실행을 종료시킴. next()안 할거임
  next();
};

// 또 다른 moddleware지만, 더 이상 next가 없음
const handleHome = (req, res) => {
  return res.send("Hello!");
};

// gossipMiddleware 실행 후, next를 만나면 handleHome 실행
app.get("/", gossipMiddleware, handleHome);
```

- 유명한 미들웨어들은 이미 만들어져 있으므로, 불러와서 실행도 가능하다. </br>
  실습에서 해 볼 예정

</br>

---

## #3.6 Middlewares P2

<span style="color:#00FFFF">[EXPRESS]</span> app.use( ) 사용법 </br>

- app.use(callback_func) 은 global middleware라고 생각하면 된다.
- next( ) 등에 따른 순서가 매우 중요하므로, 필요한 app 호출 구간 위에 위치시키자
- app.use( )를 여러개 불러올 수도 있다.

```js
// gossipMiddleware을 먼저 실행 후, get 조건에 일치하면 handleHome 실행
app.use(gossipMiddleware);
app.get("/", handleHome);
```

<span style="color:#00FFFF">[EXPRESS]</span> request </br>

</br>

---

## #3.11 External Middlewares

<span style="color:#00FFFF">[EXPRESS]</span> Morgan </br>

- logging에 도움을 주는 외부 middleware
- tiny, combine, dev 등의 옵션으로 현재 HTTP가 어떤 명령을 실행했는지 보여준다.

```js
> npm i morgan // morgan 설치

import morgan from "morgan" // 임포트 후
app.use(morgan("dev")); // dev 형식 로깅 사용 (색깔 표시되서 보기좋음)
```

</br>

---

# #4 ROUTERS

## #4.0 What are Routers?

<span style="color:#00FFFF">[EXPRESS]</span> router란? </br>

- Express에서 router란, middleware와 같이 독립된 "미니-어플리케이션"이다.
- 즉, middleware처럼 app.use( )에서도 사용 가능하다.

> router의 본래 의미는 각 url들이 쉽게 구분될 수 있도록 분배하는 역할이다. </br>
> user/join, user/delete 처럼 user 를 각각의 페이지(역할)에 따라 구분 짓는다. </br>
> 이 과정을 router라고 한다. -니콜라스-
