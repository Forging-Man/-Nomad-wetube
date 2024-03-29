색깔 표기 정리 </br>
<span style="color:red">[HTML]</span>
<span style="color:skyblue">[CSS]</span>
<span style="color:yellow">[JS]</span>
<span style="color:#FF7F50">[Node-JS]</span>
<span style="color:#00FFFF">[EXPRESS]</span>
<span style="color:#7FFF00">[PUG]</span>
<span style="color:#D9F8C4">[MONGO-DB]</span>
<span style="color:#D9F">[WEBPACK]</span>

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

</br>

---

## #4.1 Making our Routers

<span style="color:#00FFFF">[EXPRESS]</span> router 만들기 </br>

- 라우터 선언을 통해, 각각의 주소들을 어떻게 반응시킬지 관리한다.
- 라우터를 통해 url들을 보다 독립적으로 관리할 수 있게 된다. </br>
  (라우터가 없다면 코드가 복잡해지거나 꼬일거다.)

```js
// 라우터 선언
const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

// 라우터 별 함수 선언
const handleHome = (req, res) => res.send("Home");
// 해당 라우터로 접근 시, 함수 실행
globalRouter.get("/", handleHome);
```

</br>

---

## #4.2 Cleaning the Code

<span style="color:#00FFFF">[EXPRESS]</span> 라우터들은 각각 모듈화 시켜라 </br>

```js
> globalRouter.js 안에..

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);
globalRouter.get("/join", handleHome); // 여러 주소 추가 가능

// server.js에서 import하기 위해, 반드시 export해준다.
export default globalRouter;
```

```js
// export default 된 변수를 다른 JS파일에서 import 하는 법
import globalRouter from "./routers/globalRouter";

// 이 때, globalRouter는 이름변경 가능 (default 라서 변경해도 인식)
```

</br>

---

## #4.3 Exports

<span style="color:#00FFFF">[EXPRESS]</span> Controller들은 별도 폴더에 </br>

- 라우터랑 컨트롤러 코드를 한 js 파일에 넣는 건은 사실 이론상으론 병맛이다.
- 따라서 컨트롤러는 따로 모아서 만드는게 좋다.
- 문제는 이렇게 만든 수 많은 컨트롤러들을 어떻게 export하고 가져올 것인가? </br>
  (export default는 오직 하나의 변수만 export가능)

  ```js
  // 모든 함수(변수)를 export 해야하니까 default가 아닌 각각에 export
  export const trending = (req, res) => res.send("Home Page Videos");
  export const watch = (req, res) => res.send("Watch");
  export const edit = (req, res) => res.send("Edit");export const
  ```

  ```js
  // 각각의 export된 변수를 불러올때는 { object } 식으로 불러옴
  // default때와 달리, 변수 이름은 변경 불가능
  // 경로 보충 설명 : .(현재폴더) ..(상위폴더)
  import { join } from "../controllers/userController";
  import { trending } from "../controllers/videoController";
  ```

</br>

---

## #4.7 URL Parameters P1

<span style="color:#00FFFF">[EXPRESS]</span> /:id 의미</br>

- :(콜론) 뒤에 있는 것을 변수로 취급한다는 뜻
- 수 많은 비디오들을 일일히 라우터 지정할 수가 없으니, 그것들을 변수로 지정해 넣어준단 뜻이다.

```js
// :id가 불가능 하다면.. id별로 라우터를 지정
app.use("/1", userRouter);
app.use("/2", userRouter);
app.use("/3", userRouter);

// :id가 가능하다면..한줄로 변수화
app.use("/:id", userRouter);
```

<span style="color:#00FFFF">[EXPRESS]</span> req.params, req.query 차이</br>

- params : 파라미터 값을 리턴
- query : 질문에 대한 답 값을 리턴

```js
// 입력주소 : https://www.test.com/여기가파람스위치?쿼리위치1=1&쿼리위치2=2

app.get("/:id", (req, res) => {
  console.log("req.params : ", req.params);
  /* output ==>> req.params : { id : '여기가파람스위치'}*/

  console.log("req.query : ", req.query);
  /* output ==>> req.query : { 쿼리위치1: '1', 쿼리위치2: '2'}*/
});
```

<span style="color:#00FFFF">[EXPRESS]</span> /:id 배치 순서는 중요 </br>

```js
// :id 배치는 /upload 밑으로 와야 upload페이지가 제대로 읽힌다.
videoRouter.get("/upload", upload); // upload는 id로 착각당하지 않기 위해 맨 위로 와야함
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/remove", deleteVideo);
```

</br>

---

## #4.8 URL Parameters P2

<span style="color:#00FFFF">[EXPRESS]</span> express url path 방식 </br>

```js
// b가 선택사항
app.get('/ab?cd', (req, res) => res.send('ab?cd'); // acd, abcd

// b의 숫자가 선택사항
app.get('/ab+cd', (req, res) => res.send('ab+cd'); // abcd, abbcd, abbbcd..

// b와 c 사이의 문자열이 선택사항
app.get('/ab*cd', (req, res) => res.send('ab*cd'); // abRANDOMcd, abseoHEAcd..

// 괄호안이 선택사항
app.get('/ab(cd)?e', (req, res) => res.send('ab(cd)?e'); // abe, abcde

// 정규표현식 (아래 따로 후술)
app.get(/.*fly$/, (req, res) => res.send('/.*fly$/'); // butterfly, dragonfly..
```

<span style="color:#00FFFF">[EXPRESS]</span> 정규표현식 예제 </br>

|    표현식    | 의미                                                                                                        |
| :----------: | :---------------------------------------------------------------------------------------------------------- |
|      ^x      | 문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다.                                                        |
|      x$      | 문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다.                                                        |
|      .x      | 임의의 한 문자의 자리수를 표현하며 문자열이 x 로 끝난다는 것을 의미한다.                                    |
|      x+      | 반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다.                                                       |
|      x?      | 존재여부를 표현하며 x 문자가 존재할 수도, 존재하지 않을 수도 있음을 의미한다.                               |
|     x\*      | 반복여부를 표현하며 x 문자가 0번 또는 그 이상 반복됨을 의미한다.                                            |
| x{y (or기호) | or 를 표현하며 x 또는 y 문자가 존재함을 의미한다.                                                           |
|     (x)      | 그룹을 표현하며 x 를 그룹으로 처리함을 의미한다.                                                            |
|    (x)(y)    | 그룹들의 집합을 표현하며 앞에서 부터 순서대로 번호를 부여하여 관리하고 x, y 는 각 그룹의 데이터로 관리된다. |
|   (x)(?:y)   | 그룹들의 집합에 대한 예외를 표현하며 그룹 집합으로 관리되지 않음을 의미한다.                                |
|     x{n}     | 반복을 표현하며 x 문자가 n번 반복됨을 의미한다.                                                             |
|    x{n,}     | 반복을 표현하며 x 문자가 n번 이상 반복됨을 의미한다.                                                        |
|    x{n,m}    | 반복을 표현하며 x 문자가 최소 n번 이상 최대 m 번 이하로 반복됨을 의미한다.                                  |
|     [xy]     | 문자 선택을 표현하며 x 와 y 중에 하나를 의미한다.                                                           |
|    [^xy]     | not 을 표현하며  x 및 y 를 제외한 문자를 의미한다.                                                          |
|    [x-z]     | range를 표현하며 x ~ z 사이의 문자를 의미한다.                                                              |
|      \^      | escape 를 표현하며 ^ 를 문자로 사용함을 의미한다.                                                           |
|      \b      | word boundary를 표현하며 문자와 공백사이의 문자를 의미한다.                                                 |
|      \B      | non word boundary를 표현하며 문자와 공백사이가 아닌 문자를 의미한다.                                        |
|      \d      | digit 를 표현하며 숫자를 의미한다.                                                                          |
|      \D      | non digit 를 표현하며 숫자가 아닌 것을 의미한다.                                                            |
|      \s      | space 를 표현하며 공백 문자를 의미한다.                                                                     |
|      \S      | non space를 표현하며 공백 문자가 아닌 것을 의미한다.                                                        |
|      \t      | tab 을 표현하며 탭 문자를 의미한다.                                                                         |
|      \v      | vertical tab을 표현하며 수직 탭(?) 문자를 의미한다.                                                         |
|      \w      | word 를 표현하며 알파벳 + 숫자 + \_ 중의 한 문자임을 의미한다.                                              |
|      \W      | non word를 표현하며 알파벳 + 숫자 + \_ 가 아닌 문자를 의미한다.                                             |

> 예제 </br>

1. 전화번호 - /^\d{3}-\d{3,4}-\d{4}$/ </br>
   시작을 숫자 3개로하며 /   중간에 하이픈 -  하나 존재 /  숫자가 3~4개 존재하며 /  하이픈 하나 존재 /  숫자 4개로 끝남

2. 핸드폰 번호 - /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/ </br>
   시작을 숫자 01로 시작하며 그 후에 0,1,6,7,8,9 중에 하나가 나올수도 있으며 /  하이픈 - 하나 존재할수도 있으며 /  숫자 3~4개 이어지고 / 또 하이픈 - 하나 존재할수도 있으며 / 숫자 4개가 이어짐

3. nico를 포함한 모든 문자열 선택 - (nico\w+)

4. 숫자만 선택 - \d+

```js
// JS에서는 괄호를 덮고 \를 두번 쳐야 한다. (url에 regex를 넘기기위한 규칙)
videoRouter.get("/:id(\\d+)", see); // 이걸로 id는 숫자만 인식한다.

// 이 경우, 어차피 id는 숫자만 인식하므로 /upload를 밑으로 보내도 작동한다.
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", deleteVideo);
videoRouter.get("/upload", upload); // id는 숫자만 인식하므로 upload는 밑으로와도 무방
```

</br>

---

# #5 TEMPLATES

## #5.1 Configuring Pug

<span style="color:#7FFF00">[PUG]</span> PUG란? </br>

- html view template engine으로, 주로 express에서 res.send 대신 html을 표시하기 위해 사용된다.
- html을 직접 쓰는 것 보다 코드가 깔끔하다는 장점이있다.
- cocoatalk처럼 미리 만들어둔 HTML 파일을 연동시킬 수도 있지만, 정적인 페이지만 보낼 수 있다.
- req의 요청에 따른 서로 다른 대응을 위해서는 pug등의 템플릿 엔진이 필요하다.
- <BUT!! react같은 프레임워크를 이용하면 사실 템플릿 엔진 조차도 필요없어지긴 한다.>

```js
// pug 사용법
// 1. pug 인스톨
> npm i pug

// 2. server.js에 app.set으로 view engine설정
app.set("view engine", "pug");

// 3. 프로젝트에 src/views 폴더 만들고 그 안에 *.pug파일 생성
> .views/home.pug

// 4. 라우터(컨트롤러) 함수에 res.render("pug_fime_name") 입력
export const trending = (req, res) => res.render("home");

// 5. pug 실행 위치를 현재 디렉토리가 아니라 src/views로 변경 (server.js에서)
app.set("views", process.cwd() + "/src/views");
// **현재 node.js가 실행되는 경로를 알아보는 함수**
console.log(process.cwd());
```

</br>

---

## #5.2 Partials

<span style="color:#7FFF00">[PUG]</span> PUG 기본 사용법 </br>

- 기본적으로 파이썬과 같이 들여쓰기로 각 태그 범위를 판단한다.
- 내부에 JS문법을 쓸 경우 #{ JS_CODE }를 사용한다. </br>
  (유저측 입장에선 JS코드가 자동으로 html으로 컴파일 되기때문에 알 수 없다.)

```js
doctype html
html(lang="kr")
    head
        title Wetube
    body
        h1 Watch Video!!
        footer &copy; #{new Date().getFullYear()} Wetube
```

<span style="color:#7FFF00">[PUG]</span> PUG의 Partial 기능 </br>

- 부분 상속의 개념
- 다른 pug파일을 include함으로써, 그 안의 html코드를 가져올 수 있다.
- 해당 html코드를 변경시킬때는 include한 파일 내부만 변경시키면 된다.

```js
// .partials/footer.pug 내용물
footer &copy; #{new Date().getFullYear()} Wetube

// home.pug 안에 추가시킬 코드
...
include partials/footer.pug
```

</br>

---

## #5.3 Extending Templates

<span style="color:#7FFF00">[PUG]</span> inheritance (파일)상속 </br>

- 특정 pug(주로 베이스파일)파일을 가져와, 특정 부분만 수정하는 방법
- include와의 차이점 : include 수정이고 뭐고 그냥 그대로 가져와서 붙여넣음

```js
// base.pug
doctype html
html(lang="kr")
    head
        block head // 바꾸고 싶은 부분을 block 변수명 지정
    body
        block content // 바꾸고 싶은 부분을 block 변수명 지정
    include partials/footer.pug
```

```js
// home.pug
// base.pug를 상속해서 h1 부분만 수정하기
extends base.pug

block head
    title Home | Wetube // base.pug의 block head가 title Home | Wetube로 교체되어 home.pug에 들어옴

block content
    h1 Home! // base.pug의 block content가 h1 Hello!로 교체되어 home.pug에 들어옴
```

</br>

---

## #5.4 Variables to Templates

<span style="color:#7FFF00">[PUG]</span> PUG에서 JS variable을 쓰는 법</br>

- 각 pug파일을 호출하는 controller에 들어간다.
- res.render("pug_file_name", { variable_name: "내용물"} ); 을 작성한다.
- res.render(view [, locals] [, callback]) 순서임을 참고하자. (express 공식문서)

```js
// base.pug
doctype html
html(lang="kr")
    head
        title #{pageTitle} | WeTube // pageTitle이라는 JS변수를 전해줘야한다.
```

```js
// base.pug 는 videoController에서 호출하고 있으므로
// videoController.js

export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
// pageTitle에 대한 변수를 정의해서 base.pug에 건네준다.
```

</br>

---

## #5.6 MVP Stlyes

<span style="color:skyblue">[CSS]</span> MVP style이란

- 밋밋한 HTML에 기본적인 style을 적용시키는 기본 템플릿
- HTML에 link코드만 추가하면 된다.
- 홈피 : https://andybrewer.github.io/mvp/

```html
<!-- HTML -->
<link rel="stylesheet" href="https://unpkg.com/mvp.css" />
```

```js
// PUG
link(rel="stylesheet" href="https://unpkg.com/mvp.css")
```

</br>

---

## #5.7 Conditionals

<span style="color:#7FFF00">[PUG]</span> variable을 쓰는 다른 방법</br>

- variable만 단독으로 쓸 경우, 태그명=variable을 사용한다.
- 다른 텍스트, 혹은 여러 variable과 혼용할 경우 #{variable}을 쓴다.

```js
// PUG에서 사용시
head
  title #{pageTitle} | WeTube // variable 혼용 사용
header
  h1=pageTitle // variable 단독 사용
```

<span style="color:#7FFF00">[PUG]</span> PUG내에서 if/else 쓰는 법</br>

- JS의 구조보다 더욱 간결하면서도 비슷하게 사용가능하다.

```js
// videoController
export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
//fakeUser가 추가된 상태
```

```js
// PUG
 ul
    if fakeUser.loggedIn
    // fakeUser.loggedIn을 감별 (이때, HTML이 아닌 JS구문이라 #{}, = 등이 필요없다.)
        li
            a(href="/logout") Log out
    else
        li
            a(href="/login") Login
```

</br>

---

## #5.8 Iteration

<span style="color:#7FFF00">[PUG]</span> pug에서 반복(iteration)하기</br>

- array 또는 object가 지정되어 있어야 함
- array(obj)가 없을 때를 대비한 문법도 존재

```js
// videoController
export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array 존재
  return res.render("home", { pageTitle: "Home", videos });
};
```

```js
// pug : array
ul
  each video in videos // videos라는 array를 참조해서 item 리턴
      li=video // item 수 만큼 li 작성
  else // pug만의 문법으로, array가 존재하지 않을 때 작동
      li Nothing found.
```

```js
// pug : obj
ul
  each val, key in {1: 'one', 2: 'two', 3: 'three'} // obj로 삽입
    li= key + ': ' + val
```

</br>

---

## #5.9 Mixins

<span style="color:#7FFF00">[PUG]</span> mixin 이란?</br>

- partial처럼 HTML을 반복해서 사용할 수 있는 일종의 함수 (=재사용가능한 component)
- partial과의 차이점은 JS함수마냥 다른 데이터를 불러와서 처리할 수 있다는거다. </br>
  (partial은 그냥 그대로 HTML을 불러오는거밖에 못함)
- PUG에서 mixin이란 선언문을 지원하고, 이를 통해 사용가능
- partial처럼 include를 통해 mixin파일을 불러온 후, 해당 파일의 내부 함수명을 통해 사용가능

```js
// mixin이 선언된 pug파일
mixin video(info)
    div
        h4=info.title
        ul
            li #{info.rating}/5.
            li #{info.comments} comments.
            li Posted #{info.createdAt}
            li #{info.views} views.
```

```js
// 다른 pug파일에서 mixin파일을 불러온 후 사용 방법
include mixins/video

block content
        each potato in videos
            +video(potato) //+를 통해 함수명을 호출한다.
```

</br>

---

# #6 MONGODB AND MONGOOSE

## #6.0 Array Datebase P1

<span style="color:#7FFF00">[PUG]</span> PUG attribute에 string + JS variable 같이쓰기</br>

- PUG 각 태그에는 여턔까지 그냥 string #{JS var} 로 함께 쓸 수 있었다.
- 근데 h1(id=..), a(href=..) 등의 attribute에는 안먹힌다.
- PUG의 attribute에는 JS string 규칙을 적용시킨다. (``(백틱)괄호로 덮는거)

```js
// pug
  h4
      a(href=`/videos/${video.id}`)=video.title // 백틱``기호 사용
```

</br>

---

## #6.1 Array Datebase P1

<span style="color:#7FFF00">[PUG]</span> ternary operator 삼항연산자</br>

- 단어가 어렵게 들리지만, 결국 한 문장으로 이루어진 if문
- 조건문에쓰는 a, true일때 반환할 b, false일때 반환할 c를 합쳐서 삼항이다.

```js
/// pug
block content
    h1 #{video.views} #{video.views === 1 ? "view" : "views"}
    // 1이면 view반환, 아니면 views반환
```

<span style="color:#7FFF00">[PUG]</span> href의 절대주소, 상대주소</br>

- href="add" : 상대주소 (현 주소 마지막을 add로 교체)
- href="/add" : 절대주소 (루트 바로 뒤를 add로 교체)

```js
// pug
> localhost:4000/profile/edit-profile/seo 가 있다고 가정

a(href="potato") // 상대주소
=> localhost:4000/profile/edit-profile/potato

a(href="/potato") // 절대주소
=> localhost:4000/potato
```

</br>

---

## #6.2 Eidt Video P2

<span style="color:#00FFFF">[EXPRESS]</span> POST 하는 법 </br>

- GET / POST 차이 </br>
  GET : back-end의 데이터를 받기만 한다 </br>
  POST : back-end의 데이터를 수정하거나 업뎃, 삭제한다.
- Router에 app.post를 따로 작성해야 HTML의 post를 인식한다.
- get과 post를 동시에 처리하는 함수로 route가 있다.

```js
// pug
form((method = "get")); // 초기값
form((method = "post"), (action = "/videos/url")); // post를 action주소에 보내고 라우터의 post 액션 실행
```

```js
// router.js
videoRouter.get("/:id(\\d+)/edit", getEdit); // get감지
videoRouter.post("/:id(\\d+)/edit", postEdit); // post감지

// get, post를 한줄로
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
```

<span style="color:#00FFFF">[EXPRESS]</span> res.redirec("add") </br>

- 다른 주소로 이동시키는 메소드

```js
// router.js 에서
export const postEdit = (req, res) => {
  const id = req.params.id;
  return res.redirect(`/videos/${id}`);
};
```

</br>

---

## #6.2 Eidt Video P3

<span style="color:#00FFFF">[EXPRESS]</span> express에서 form 제출 인식하는 법 </br>

- form 형식은 req.body를 통해 key-value 값을 가져온다. </br>
  (이 때, input을 썼다면 input에 name attribute가 있어야 인식한다.)
- server.js 에 middleware로 아래 코드가 필요 </br>
  app.use(express.urlencoded({ extended: true }));

```js
// server.js 에서
// express에서 html from 제출 인식하는 middleware
app.use(express.urlencoded({ extended: true }));
```

```js
// videoController 에서
export const postEdit = (req, res) => {
  const title = req.body.title; // req.body 사용가능
};
```

<span style="color:#00FFFF">[EXPRESS]</span> 변수 범위 알기 </br>

- 외부에서 정의된 obj 배열내부 값을 바꾸려면, obj 배열에 직접 접근해서 바꿔야한다.

```js
// videoController
let videos[{obj...}] // 외부에 videos obj가 있는 상태

export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  videos[id - 1].title = title; // videos 배열 객체에 직접 접근해서 값을 바꾼다.
```

```js
// 잘못된 예
export const postEdit = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  // 이 경우, 이 함수 내부에서만 video객체가 있는 상태이므로 원래의(밖의) videos의 객체 title은 바뀌지 않는다.
  const video = videos[id -1];
  video.title = title; // 결국 title은 바뀌지않음
```

</br>

---

## #6.8 Connecting to Mongo

<span style="color:#D9F8C4">[MONGO-DB]</span> mongodb 윈도우 설치 주의사항 </br>

- 최신버전은 제대로 안먹히는 의혹이 있다. 그 전 버전을 설치하자.
- 만약 경로를 틀려서 삭제했다면, 반드시 재부팅해줄 것
- compass는 어차피 사용하지 않는다. 설치안해도 무방

<span style="color:#D9F8C4">[MONGOOSE]</span> Node랑 MongoDB 연결하는 법 </br>

- Mongoose는 Node에서 MongoDB를 실행할 수 있도록 하는 연결고리다.

```js
> npm i mongoose // 몽구스 설치
```

```js
// db.js 만들고 아래 템플릿 입력
import mongoose from "mongoose"; // 몽구스 임포트

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  // cmd mongo 실행시 연결된 shell에 표기된 ip주소 + 내가 원하는 db사이트 주소
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // server측에서 추가로 인식할 obj들
});

const db = mongoose.connection;

const handleOpen = () => console.log("👍 Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError); // on : addEvent처럼, error가 발생할 때 마다 항상 실행
db.once("open", handleOpen); // once : 단 한번만 실행
```

```js
// server.js 에서..
import "./db"; // db.js파일을 직접 명시해서 임포트

// db 임포트를 맨 윗줄에써도, 맨 마지막에 (서버가 다 실행되고 나서) 실행된다.
// 이는 db가 더 느리기때문
```

</br>

---

## #6.9 CRUD Introduction

<span style="color:#D9F8C4">[MONGO-DB]</span> CRUD 의미 </br>

- C : Create
- R : Remove
- U : Update
- D : Delete
- DB의 기본 원칙들

<span style="color:#D9F8C4">[MONGOOSE]</span> DB 데이터를 저장하는 몽구스 관습 </br>

- models 폴더안 Video.js처럼 대문자시작 파일안에 DB정의

</br>

---

## #6.10 Video Model

<span style="color:#D9F8C4">[MONGOOSE]</span> 몽구스 schema란 ? </br>

- DB 모델의 생김새를 정의
- mongoose.Schema({안에 각 항목의 타입만을 정의})
- 이 후 mongoose.model("모델이름," 스키마함수명) 로 모델 정의
- 이 후 해당 모델변수를 default export

```js
// .models/Video.js 에서..

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  // 각 항목의 타입만을 정의 (디테일을 적는게 아니라)
  // 여기서 미리 지정된 타입만 입력 가능하다. (벗어날 경우 DB저장 자체가 안됨)
  title: String,
  descriptione: String,
  CreatedAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// 모델 작성 후 익스포트
const Video = mongoose.model("Video", videoSchema);
export default Video;
```

</br>

---

## #6.11 Our First Query

<span style="color:#D9F8C4">[MONGOOSE]</span> server와 init 분리 </br>

- server는 serve역할에만 충실하도록 초기화단계(DB포함)는 init으로 분리 </br>
  (분리항목은 코드 참조)
- 이 때, init.js를 인식할 수 있도록 package.json 의 실행파일을 init.js로 변경

```js
// init.JS에 적을(server.js에서 가져올) 항목들..

import "./db";
import "./models/Video";
// 추후 추가될 DB들도 여기 작성
import app from "./server";

const PORT = 4000; // 백엔드 관습 포트 4000

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
// 서버 맨 마지막에 들어가야하는 코드 (GET등을 미리 정의한 후에..)
app.listen(PORT, handleListening);
```

</br>

---

## #6.12-13 Our First Query P2 / Async Await

<span style="color:#D9F8C4">[MONGOOSE]</span> DB 쿼리에 접근하는 방법 </br>

- callback 방법과 promise 방법, 두 가지가 있다.
- 둘 다 DB로부터 반응이 오기까지 기다릴 수 있다는 특징이 있다.

1. callback 방법 (비추)

- addEventListner 처럼 callback 함수를 호출한다.
- 단, 실행순서를 고려해서 함수안에 함수안에 함수..같은 식으로 코드가 복잡해진다.

```js
// videoController.js 에서..

import Video from "../models/Video";

export const home = (req, res) => {
  // Video.js의 DB에 접근, {}을 기준(빈칸이니까 모든 것을 검색)으로 검색 시작
  // DB의 callback통신이라 제일 느리게 실행될 것
  Video.find({}, (error, videos) => {
    return res.render("home", { pageTitle: "Home", videos: [] }); // DB를 가져온 후 render하기 위해 DB callback 안으로 해당 코드 이동
    console.log("This is final"); // 코드상 맨 윗줄이지만, DB callback을 거치므로 맨 마지막에 실행
  });
  console.log("This is first"); // 오히려 이게 맨 처음 실행
};
```

2. promise 방법 (추천)

- callback의 최신버전이라고 보면 된다.
- DB 통신을 기다려주기(async, await)때문에, 코드 순서대로 실행되고 가독성도 좋다.
- 단, error를 잡기위해선 try, catch 구문을 써야한다.

```js
// videoController.js 에서..

import Video from "../models/Video";

export const home = async (req, res) => {
  // async : 비동기 (async function)
  // await는 async 함수 안에서만 실행가능하다.
  // Video.js의 DB에 접근, {}을 기준(빈칸이니까 모든 것을 검색)으로 검색 시작
  // DB의 promise 통신이라 순서대로 실행될 것
  try {
    // error를 잡기위해 따로 추가한 try, catch 구문
    // await중 잡히는 모든 error를 검출한다.
    // error발생시, await 아래에있는 코드는 실행되지 않는다.
    console.log("First");
    const videos = await Video.find({}); // await를 보고 자동으로 DB에서 video를 할당
    console.log("Final");
    return res.render("home", { pageTitle: "Home", videos: [] });
  } catch {
    return res.render("server-error");
  }
};
```

</br>

---

## #6.14 Returns and Renders

<span style="color:#00FFFF">[EXPRESS]</span> render시, return 있고 없고의 차이 </br>

- return은 해당 범위의 함수를 확실히 종료시키기 위해 사용된다.
- render만으로도 페이지 표시하는데에는 문제가 없다. </br>
  그러나, render이후에 또 다시 render나 sentstatus 등의 함수를 쓸 경우 에러가 발생한다.
- 이러한 경우를 방지하고자 return을 쓰는 거다.
- 그러니 render 두번 금지 같은 각 메소드의 쓰임새를 잘 이해하고 있는 편이 더 중요하다.

```js
// error의 예
Video.find({}, (error, videos) => {
  res.render("home", { pageTitle: "Home", videos: [] });
  res.render("home", { pageTitle: "Home", videos: [] }); // render는 연속해서 불가능
});

// 아래와 같은 error 발생
> ERROR [ERR_HTTP_HEADER_SENT]: Cannot set headers after they are sent to the client
```

</br>

---

## #6.15 Creating a Video P1

<span style="color:#D9F8C4">[MONGOOSE]</span> hashtags 같은 "," 가 들어있는 string을 배열화 하는 법 </br>

- JS 고유의 split("구분자")를 사용
- 분리된 단어에 무언가를 추가하고자 할 경우 map(function) 사용

```js
"hello,food,today".split(","); // 구분자 (,) comma
// [0:hello, 1:food, 2:today] obj 변환

"hello,food,today".split(",").map((word) => `#${word}`); // 앞글자에 # 추가
// [0:#hello, 1:#food, 2:#today] obj 변환
```

</br>

---

## #6.16 Creating a Video P2

<span style="color:#D9F8C4">[MONGOOSE]</span> DB를 실제로 저장하는 법 </br>

- 두 가지 방법이 존재

1. new, object, save 방식

```js
export const postUpload = async (req, res) => {
  // 객체 작성
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  // DB는 쓰기까지 시간이 걸리므로 await 필수
  await video.save(); // 객체 실제 DB에 저장
  return res.redirect("/");
};
```

2. create 방식 (추천)

- 당연히 try, catch 구문으로 error를 잡아줘야한다.

```js
export const postUpload = async (req, res) => {
  // 객체 작성
  const { title, description, hashtags } = req.body;
  await video.create({
    title: title,
    description: description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
```

<span style="color:#D9F8C4">[MONGOOSE]</span> cmd에서 DB 확인하는 방법 </br>

```js
// 기본적인 명령어는 help로 확인가능

> mongo // mongoDB 커맨드 쉘 오픈
> show dbs // wetube 항목이 있는지 확인
> use wetube
> show collections // 커다란 덩어리의 데이터들 확인
> db.videos.find() // 해당 컬렉션 안의 정보 표시
```

</br>

---

## #6.17 Exceptions and Validation

<span style="color:#D9F8C4">[MONGOOSE]</span> 모델(스키마)에 required / default 주기 </br>

- 반드시 들어가야할 항목에는 스키마 단계에서 required: true 속성을 주자
- default 속성을 주면 유저가 따로 입력하지 않아도 자동 생성된다.
- default 속성에 함수를 줄 때, ()를 같이 주지 않도록 한다. </br>
  (같이 줄 경우 해당 스키마가 저장되는 시점(모델이 생성되는 시점이 아니라)에 함수가 실행된다.)

```js
// models/Video.js 에서..

const videoSchema = new mongoose.Schema({
  // 각 항목의 타입만을 정의 (디테일을 적는게 아니라)
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }, // Date.now()가 아님에 유의
  hashtags: [{ type: String }],
  // meta를 스키마에 줌으로써, post에 쓸 함수 길이가 짧아짐.
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});
```

<span style="color:#D9F8C4">[MONGOOSE]</span> error 받아서 올리기 </br>

- try, catch 구문으로 error를 검출한다.
- 이 때, try, catch 각각에 반드시 return 이 들어가야 제대로 종료시킬 수 있다.

```js
// videoController.js 에서..

export const postUpload = async (req, res) => {
  // 추가로 올라갈 비디오 obj가 여기 서술됨
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect("/"); // try에 return 포함
  } catch (error) {
    return res.render("upload", {
      // catch에도 return 있음
      pageTitle: "Upload Video",
      errorMessage: error._message, // pug와 연결될 error 변수
    });
  }
};
```

```js
// upload.pug에서..

extends base.pug

block content
    if errorMessage // 위에서 넘긴 error 변수를 불러옴
        span=errorMessage
        ..
```

</br>

---

## #6.18 More Schema

<span style="color:yellow">[JS]</span> string.trim( ) 문법 </br>

- 양 끝 string의 빈 공간을 삭제한다.
- 이 문법은 몽구스에도 적용 가능하다. </br>
  (몽구스의 자세한 string 규칙은 아래 링크 참조) </br>
  https://mongoosejs.com/docs/schematypes.html

```js
"     h  1     ".trim();
// output : "h  1"
```

<span style="color:#D9F8C4">[MONGOOSE]</span> 스키마에 maxLength 제한을 줄때, html도 maxlength를 같이 줘야하는 이유 </br>

- html에 제한을 주면 유저는 정해진 글자수만 들어간다는 걸 알 수 있다.
- 하지만 html은 언제든지 유저가 고칠 수 있다.
- 그렇기에 보다 확실한 규칙을 정하려면 스키마에도 글자수 제한을 걸어야 한다.
- 이것이 둘 다에 제한을 거는 이유다.

```js
// model/Video.js 에서..

const videoSchema = new mongoose.Schema({
  // 스키마 단계에서 글자 수 제한(maxLength, minLength)을 걸어준다.
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
```

```js
// upload.pug에서..

form((method = "POST"));
// 글자수 제한을 maxlength, minlength로 같이 걸어준다.
input(
  (name = "title"),
  (placeholder = "Title"),
  required,
  (type = "text"),
  (maxlength = 80)
);
input(
  (name = "description"),
  (placeholder = "Description"),
  required,
  (type = "text"),
  (minlength = 20)
);
```

</br>

---

## #6.19 Video Detail

<span style="color:#D9F8C4">[MONGOOSE]</span> MongoDB id 특징 </br>

- 16진수로 이루어진 랜덤한 24글자
- 따라서, 정규식으로 라우터도 이를 인식할 수 있으면 된다.

```js
// videoRouter.js 에서..

// 정규식 내용 :  숫자, 소문자 알파벳 24글자
videoRouter.get("/:id([0-9a-f]{24})", watch);
```

<span style="color:#D9F8C4">[MONGOOSE]</span> id로 db찾아서 리턴하기 </br>

- 몽구스 함수 "DB_model.findById(id)" 를 사용

```js
// videoController.js 에서..

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id); // 해당하는 id를 db에서 찾아와 리턴
  return res.render("watch", { pageTitle: video.title, video });
};
```

</br>

---

## #6.20 Edit Video P1

<span style="color:#D9F8C4">[MONGOOSE]</span> 존재하지 않는 id로 접속했을 때의 대처법 </br>

- 아무런 응답이 없으면 무한로딩에 걸린다.
- 따라서 이런 경우를 대비해 "에러전용 페이지"를 따로 만드는게 낫다.

```js
// videoController.js 에서..

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  // if문에 에러 발생시의 조건을 쓰고, else 문에 정상일 때의 조건을 쓴다.
  if (!video) {
    // video가 존재하지 않을 시, 404페이지로 날려버려.
    // 반드시 return 구문을 써서 함수 자체를 종료시켜야 한다.
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};
```

<span style="color:yellow">[JS]</span> array를 다시 string 변환 </br>

- array.join( ) 함수를 쓴다.

```js
["hello", "man", "me"].join();
// output : "hello, man, me"
```

</br>

---

## #6.21 Edit Video P2

<span style="color:#D9F8C4">[MONGOOSE]</span> update 내용을 post 하는 법 (귀찮은 ver: 잘 안씀) </br>

- 하나하나 바뀌는 것들을 다시 새로 대입한다.

```js
// videoController.js 에서..

export const postEdit = async (req, res) => {
  const { id } = req.params;
  // update될 각 항목들을 미리 지정
  const { title, description, hashtags } = req.body;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  // update 항목들을 각각 대입
  video.title = title;
  video.description = description;
  video.hashtags = hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`)); // 처음부터 #이 붙은 단어는 #안붙이도록 한 문장 if문 작성
  await video.save();
  return res.redirect(`/videos/${id}`);
};
```

</br>

---

## #6.22 Edit Video P3

<span style="color:#D9F8C4">[MONGOOSE]</span> update 내용을 post 하는 또 다른 방법 (잘쓰는 ver)</br>

- Model.findByIdAndIpdate(id, {바꿀 변수명들})
- Model.findById 와의 차이점 : <- id만 찾아서 리턴할 뿐. 그래서 바꿀 내용은 모두 수동으로 재설정 해야했음.

```js
// videoController.js 에서..

await Video.findByIdAndUpdate(id, {
  title,
  description,
  hashtags: hashtags
    .split(",")
    .map((word) => (work.startsWith("#") ? word : `#${word}`)),
});
```

<span style="color:#D9F8C4">[MONGOOSE]</span> 찾고 싶은 DB가 존재하는지 조건검색 </br>

- Model.exists({조건검색}) </br>
  (조건 예 : {\_id : id}, {title: "hello"}..)
- 결과값은 true / false

```js
// videoController.js 에서..

const video = await Video.exists({ _id: id });
```

</br>

---

## #6.23 Middleware

<span style="color:#D9F8C4">[MONGOOSE]</span> 몽구스 middleware란? .pre( ) 예제 </br>

- DB 생성이나 업뎃 전에 작동해야할 중간 함수를 지정 가능
- Model.js에서 만들고 model 객체가 만들어지기 전에 관련 함수를 선언한다.
- 모델 객체를 가리키는 this를 주로 쓸거다.
- Model_call_func.pre("save", function() {함수내용}) </br>
  (콜백함수로 arrow func를 쓰면 this대상이 달라지므로 function을 써라.)

```js
// models/Video.js 에서..

// 비디오 객체 생성시(save hook) 해당 함수 실행
videoSchema.pre("save", function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// 모델 객체 선언 전에 미들웨어 선언
const Video = mongoose.model("Video", videoSchema);
```

<span style="color:#D9F8C4">[MONGO-DB]</span> 몽고DB 모든 데이터 삭제 </br>

```js
// 몽고 shell에서..

> show dbs
> use wetube // db 저장소 진입
> db.videos.find({}) // 모든 콜렉션의 db 확인
> db.videos.remove({}) // 모두 삭제 (remove가 레거시 코드라, 아래코드 추천)
> db.videos.deleteMany({}) // 모두 삭제
```

</br>

---

## #6.24 Statics

<span style="color:#D9F8C4">[MONGOOSE]</span> Model.static의 필요성 </br>

- findByIdAndUpdate() 등에는 Model.pre("save") 가 먹히지 않는다. (hook이 안된다.)
- 따라서 Model.findById() 처럼, 몽구스 내부에서 작동하는 또 다른 함수를 정의할 필요가 있다.
- Model.static("함수명", function(val) { 함수내용 }) 을 사용하면, 개발자가 따로 정의한 함수를 호출해서 Model 객체에 적용 가능하다.
- 함수 내용물에는 반드시 return 구문을 사용해야 한다.
- static 결과물을 호출시에는 Model."함수명" 으로 호출한다.

```js
// models/Video.js 에서..

// static으로 모델객체 전용 새로운 함수를 정의
videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
```

```js
// videoController.js 에서..

await Video.create({
  title,
  description,
  hashtags: Video.formatHashtags(hashtags), // static으로 정의한 함수명을 호출
});
```

</br>

---

## #6.25 Delete Video

<span style="color:#D9F8C4">[MONGOOSE]</span> DB 찾아서 삭제 하기 </br>

- Model.findByIdAndDelete(id) 로 해결 가능

```js
// videoController.js 에서..

// 지우기 전용 함수 새로 선언
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id); // id 호출해서 삭제
  return res.redirect("/");
};
```

<span style="color:#D9F8C4">[MONGOOSE]</span> delete, remove 차이 </br>

- remove는 레거시 함수
- 그냥 delete 써라.

</br>

---

## #6.26 Search P1

<span style="color:#D9F8C4">[MONGOOSE]</span> DB 표시 정렬순서 변경 </br>

- Model.find({..}).sort({기준: 오름/내림차순}) 으로 정렬 가능
- 오름차순 : "asc", 1
- 내림차순 : "desc", -1

```js
// 내림차순으로 DB표시
const videos = await Video.find({}).sort({ createdAt: "desc" });
```

<span style="color:#D9F8C4">[MONGOOSE]</span> Search 값을 컨트롤러로 가져오는 법 </br>

- req.query로 input값을 가져올 수 있다.
- 정확히는 input 에서 submit을 통해 변경된 URL값을 가져올 수 있게 된다.

```js
// req.query를 통해, URL 값을 가져올 수 있다.
const { keyword } = req.query;
```

<span style="color:#D9F8C4">[MONGOOSE]</span> req.params / req.body / req.query 차이점 정리 </br>

- req.params : id값을
- req.body : key: value값으로 저장된 값들을 불러 올 수 있다 (즉, form 형태 호출 가능)
- req.query : input으로 제출된 URL값을 픽업할 수 있다.

</br>

---

## #6.27 Search P2

<span style="color:#D9F8C4">[MONGOOSE]</span> 몽고DB 검색시, 정규식(regex)을 받는 법 </br>

- 몽고DB 자체에서 정규식 검색을 제공한다.
- 정규식 검색시 $regex: (정규식 규칙객체) 를 선언한다.
- (정규식 규칙객체) 선언시에는 보통 new RegExp()를 사용한다. </br>
  (이걸 안써도 되지만, 이걸 쓰는게 가독성 측면에서 더 좋아서 추천한다.)

```js
// videoController.js 에서..

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        // 몽고DB에서 정규식을 받을거라 선언하고,
        // RegExp 라는 정규식 객체 선언문에다가
        // (`${keyword}$`, "i") 라는 규칙을 넣는다. (keyword로 문장이 끝난다는 뜻)
        // 즉, 해당 규식을 가진 정규식 객체만을 몽고DB title에서 검색한다.
        $regex: new RegExp(`${keyword}$`, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
```

</br>

---

## #7.0 Create Account P1

<span style="color:#D9F8C4">[MONGOOSE]</span> Schema, unique 속성 </br>

- DB를 만들 때, 해당 값을 유일하게 갖는 객체를 만든다. </br>
  (ex : 이름, 메일주소 등)

```js
// models/User.js 에서..

const userSchema = new mongoose.Schema({ // schema 선언시
  email: { type: String, required: true, unique: true }, // unique 속성 부여
  username: { type: String, required: true, unique: true },..}})
  // email과 username은 DB 객체에서 고유값을 가지게 됨
```

</br>

---

## #7.2 Create Account P3

<span style="color:#D9F8C4">[MONGOOSE]</span> bcrypt 모듈이란? </br>

- 비밀번호를 hash 형식으로 바꾸어주는 JS전용 모듈
- rainbow table 대책도 되어있어 보안성도 높다.
- bycrypt.hash(패스워드대상, saltround 수) </br>
  saltround : 소금을 치는 것 마냥, hash에 대한 hash를 몇번 반복할건지 선택.
- Hash 기술 : 일방향 함수로 역계산이 불가능한 값을 제공.

```js
> npm i bcrypt

// models/User.js 에서..

userSchema.pre("save", async function () {
  // saltRound 5로 hash 비번 생성
  this.password = await bcrypt.hash(this.password, 5);
});
```

</br>

---

## #7.3 Form Validation

<span style="color:#D9F8C4">[MONGOOSE]</span> $or 오퍼레이터 </br>

- DB find 또는 exists 메소드에서 사용가능한 오퍼레이터
- 여러 값 중 하나라도 히트하면 true를 반환

```js
// userController.js 에서..

const exists = await User.exists({ $or: [{ username }, { email }] }); // username 또는 email 중 하나라도 이미 존재한다면 에러 출력
if (exists) {
  return res.render("join", {
    pageTitle,
    errorMessage: "This username/email is already taken.",
  });
}
```

</br>

---

## #7.4 Status Codes

<span style="color:#D9F8C4">[MONGOOSE]</span> status code (상태코드) 보내는 법 </br>

- res.status(400).render("join"...) 식으로 해당 코드가 실행될 시 보낼 상태코드를 미리 지정 가능
- 크롬같은 브라우저는 내용물이 아니라 상태코드를 신호로 받아서 반응하기도 한다.
- 따라서 적절한 상태코드를 리턴시켜야 적절한 반응형 웹을 만들 수 있다.
- 상태코드 리스트는 아래 참조 </br>
  https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C
- 자주쓰는 상태코드 목록 </br>
  200(OK) : 서버가 요청을 제대로 처리했단 뜻. </br>
  400(Bad Request) : 서버가 요청의 구문을 인식하지 못할 때 발생. 클라측에 문제가 있을때 주로 발생 </br>
  404(Not Found) : 서버가 요청한 페이지를 찾을 수 없을 때 발생. 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우, 서버는 이 코드를 제공

```js
// userController.js 에서..

if (exists) {
    // 이미 있는 아이디나 메일주소로 회원가입을 할 경우, 400 상태코드를 보낸다.
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
```

</br>

---

## #7.6 Login P2

<span style="color:#D9F8C4">[MONGOOSE]</span> 로그인시 패스워드 확인방법 : bcrypt.compare(input_pass, hash_pass) </br>

- hash 코드들끼리 비교해서 맞는지 틀린지를 true/false 리턴한다.
- if문과 함께써서 true(or false)가 리턴되었다면 어떤 처리를 할 건지도 명시한다.

```js
// userContorller.js 에서..

const ok = await bcrypt.compare(password, user.password); // 로그인 폼에 입력한 패스워드와, 기존 저장되어있던 패스워드의 hash값을 비교한다.
if (!ok) {
  // 서로의 hash값이 다르다면(false) 에러처리한다.
  return res.status(400).render("login", {
    pageTitle,
    errorMessage: "Wrong password",
  });
}
return res.redirect("/"); // true 처리되면 redirect한다.
```

</br>

---

## #7.7-8 Sessions and Cookies P1, P2

<span style="color:#00FFFF">[EXPRESS]</span> 세션 vs 쿠키 </br>

- express에서 세션/쿠키를 구현하기 위해서는 express-session을 설치해야 한다.
- 둘 다 서버와 클라이언트가 소통하기 위한 데이터 쪼가리.
- 다만, 저장위치 or 라이프사이클에 차이가 있다.
- 쿠키 : 클라이언트 PC에 저장 / 정해진 만료기간이 코드내에 따로 존재
- 세션 : 서버쪽에 저장 / 정해진 만료기간이 있긴 하지만, 브라우저를 닫으면 강제로 삭제 </br>
  모두 다 세션으로 하면 좋겠지만, 그러면 서버 자원이 부족해지기 때문에 모든 사이트가 세션과 쿠키를 병행하는 편이다. </br>
  브라우저마다 세션값이 다르다.
- \*부록 : 캐시란? </br>
  웹 페이지 요소를 저장하기 위한 임시 저장소

```js
> npm i express-session

// server.js에서..

// router 전에 아래 미들웨어 선언
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

// 세션이 만들어졌는지 확인을 위해 아래 코드 입력
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions); // 출력이 된다면 세션 obj가 생긴거다.
    next();
  });
});
```

</br>

---

## #7.9 Logged In User P1

<span style="color:#00FFFF">[EXPRESS]</span> 세션에 로그인 여부 정보 추가하기 </br>

- 세션 obj를 만질 수 있게 되었으므로, 로그인했다는 정보를 그 안에 추가한다.

```js
// userController.js 에서..

export const postLogin = ..
...
// login이 성공했다면, 세션 obj에 아래 항목을 추가
  req.session.loggedIn = true;
  req.session.user = user;
```

</br>

---

## #7.10 Logged In User P2

<span style="color:#00FFFF">[EXPRESS]</span> res.locals 이란? (템플릿 페이지가 로그인을 인식하는 법) </br>

- res 변수가 포함된 모든 템플릿 페이지에서 사용가능한 전역변수가 들어있음 </br>
  (원래는 res.render시에 따로 변수를 건네줬지만, res.local안에 들어있는 것들은 그럴 필요가 없음)
- 즉, res.locals에 로그인 정보를 넣으면 이걸통해 템플릿 페이지가 로그인을 인식할 수 있게 된다.

```js
// middlewares.js 에서..

export const localsMiddleware = (req, res, next) => {
  // 로그인을 위한 정보를 res.locals에 추가
  // 각각의 key 이름(loggedIn, siteName..)은 pug(템플릿)에서 바로 사용 가능
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
```

</br>

---

## #7.12 MongoStore

<span style="color:#D9F8C4">[MONGOOSE]</span> 세션 정보를 db에 저장하는 법 : connect-mongo 모듈 </br>

- connect-mongo 모듈을 설치하고 사용한다.
- https://www.npmjs.com/package/connect-mongo

```js
// connect-mongo 설치
> npm i connect-mongo

// server.js 에서..
import MongoStore from "connect-mongo";

app.use(
  session({..
  // MogoStore를 사용해서 세션을 가져올 주소를 지시
  store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" })
  ..}
```

</br>

---

## #7.13 Uninitialized Sessions

<span style="color:#D9F8C4">[MONGOOSE]</span> 로그인 한 사람의 정보만 세션 저장하기 : session 미들웨어 속성, saveUninitialized </br>

- "초기화되지 않은 값을 저장하겠냐"고 묻는격이다.
- 해당 값을 false로 하면 일반 방문자 정보는 저장안한다.
- 로그인해서 loggedIn 정보 등이 갱신될때만 세션DB를 저장한다.

```js
// server.js 에서..

app.use(
  session({
    ..
    saveUninitialized: false,
```

<span style="color:#D9F8C4">[MONGOOSE]</span> 세션 값을 자동으로 갱신저장하기 : resave </br>

- 새로고침등 req때마다 세션값을 자동저장한다.
- 잦은 저장은 동작 효율을 감소시키므로, 주로 false로 두고 신경끈다.

```js
// server.js 에서..

app.use(
  session({
    ..
    resave: false,
```

</br>

---

## #7.14 Expiration and Secrets

<span style="color:#D9F8C4">[MONGOOSE]</span> session 미들웨어에서 쿠키 유지시간 설정하기 : maxAge </br>

- session 미들웨어 안에서 cookie: {maxAge: number(ms단위로)} 를 입력
- 정한 시간만큼 로그인이 유지될거다.
- 아무값도 입력하지 않는다면, 보통 14일을 부여한다.

```js
// server.js 에서..

app.use(
  session({
    ..
    cookie {
      maxAge: 20000, (20초동안 로그인 유지)
    }
  })
);
```

<span style="color:#D9F8C4">[MONGOOSE]</span> session 미들웨어의 secret 이란? </br>

- 쿠키에 서명하는데 사용되는 비밀번호
- 이게 노출되면 다른 사람이 내 사이트마냥 쿠키를 만질 수 있음
- 보안을 위해 무작위 알파벳이 추천된다.

<span style="color:#D9F8C4">[MONGOOSE]</span> 공개하고 싶지 않은 string 등을 따로 저장하는 법 : .env파일 </br>

- .env 파일을 따로 만들어, 거기다가 저장하고 필요할때마다 import한다.
- import방식은
- .env에는 API key등, 보안을 요하는 정보들을 적는다.
- git에 .env는 올리지 않도록 한다. (gitignore에 .env추가)
- .env에 저장하는 변수명은 관습상 모두 대문자로 쓴다.

```js
// .env에서..

COOKIE_SECRET=dlfkaghdfkljh234kjfdshglkjasdfbvgklja
DB_URL=mongodb://127.0.0.1:27017/wetube
```

</br>

---

## #7.15 Environment Variables

<span style="color:#00FFFF">[EXPRESS]</span> .env 파일 안의 변수명을 인식하기 위한 모듈 : dotenv </br>

- Node.js 는 process.env라는 함수가 기본적으로 내장되어 있음
- dotenv는 .env 파일을 process.env 환경 변수로 로드하는 모듈임
- 두 가지 도입 방법이 있음 </br>
  1. require("dotenv").config() <표현식 방법 : 이 경우 모든 필요한 JS파일 맨 윗라인에 추가해야 함></br>
  2. import "dotenv/config" <호이스팅 방법 : 추천>
- 가장 맨 처음 실행되는 백엔드js 맨 윗라인에 import "dotenv/config"를 추가하는 것 만으로 모든 백엔드 js에서 변수 인식 가능해짐
- require("dotenv").config()가 정의될때까지 .env 변수들은 인식되지 않을거임

```js
> npm i dotenv

// init.js 에서..
import "dotenv/config"; // 모든 JS에서 .env 변수 읽기 가능
```

</br>

---

## #7.16-17 Github Login P1, P2

<span style="color:#00FFFF">[EXPRESS]</span> OAuth : 다른 사이트 계정으로 로그인하는 방식의 총칭 </br>

- 다른 계정 사이트로 github 로그인을 통해 배운다. </br>
  https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
- pug에 링크를 추가하되, 각종 속성을 부여할 수 있다. </br>
  1. client_id : 반드시 필요한 값. github OAuth를 신청하면 받는다. </br>
  2. allow_signup : 우회링크된 github에서 계정을 새로 만들 수 있는 버튼을 추가할지 안할지 선택 </br>
  3. scope : github에게 요구할 추가적인 유저정보를 적을 수 있음. 메일주소나 이름을 넘어 저장소를 삭제할 권한까지 요구할 수 있음. </br>
     반드시 스페이스 공백으로 scope 요소들을 나눠야함. (ex> read:user user:email)
- 각종 속성을 추가하면 URL이 너무 길어지고 관리가 어려워지므로, 따로 함수화하는걸 추천

<span style="color:yellow">[JS]</span> obj를 받아서 URL로 트랜스폼하기 URLSearchParams.toString() </br>

```js
// 각종 속성을 다 넣은 URL의 예
// PUG 에서..

a(href="https://github.com/login/oauth/authorize?client_id=9fac726866be2ff14f36&allow_signup=false") Continue with Github &rarr;
```

```js
// 함수화를 통해 속성들을 관리하기 쉽도록 바꾼 예
// userControll.js 에서..

export const startGithubLogin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: "9dc842e1d17cad15dfb0",
    allow_signup: false,
    scope: "read:user user:email",
  };
  // URLSearchParams 객체화를 통해 URL 뒷부분을 쉽게 정의한다.
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};
```

</br>

---

## #7.18-20 Github Login P3, P4, P5

<span style="color:#00FFFF">[EXPRESS]</span> OAuth 에서 가입승인 후, access token 받기 -> user 정보 얻기 </br>

- token : 세션과 유사하지만, 하나하나 값이 다른 세션과는 달리 "출입증 카드"같은 단 인증된 단 하나의 값을 갖는다. 이는 일회용이라 한번 쓰고나면 반납한다.
- 다소 복잡하지만 아래와 같은 절차로 코드를 작성한다. </br>
- POST 파트 </br>

  1. 깃헙에서 인증 POST와 관련된 주소를 생성한다. (client_id, client_secret, code가 필요)
  2. fetch를 통해 해당 주소를 읽어들이고 거기에 POST 한다. (node-fetch 설치필요) </br>
     그 결과값을 변수에 저장한다. </br>
     - nodeJS는 브라우저와 다르게 몇몇 함수를 지원하지 않는데, fetch가 대표적이다. 따로 모듈 설치가 필요한 이유. (node-fetch는 @2.6.1 버전으로 설치한다. 최신버전은 안됨)
  3. 해당 결과값은 날 것에 가까우므로, fetch시 header 변수를 통해 json을 읽을 수 있도록 한다. (Accept: "application/json" 추가)
  4. 결과값을 .json()으로 바꿔 저장한다. (이제 POST 결과로 access token을 받게될 것)

  </br>

- GET 파트 </br>

  1. fetch를 통해 GET관련 주소와 header로 access token을 넣는다. (Authorization: `token ${access_token}`)
  2. 마찬가지로 이를 .json()로 바꾼다.
  3. 해당 결과값을 출력하면 obj형태로 각종 깃헙과 관련된 각종 유저정보가 들어있게 된다.

  </br>

- GET 파트 anotehr </br>
  scope에 user:email을 추가했는데도 깃헙에서 리턴된 유저정보에 email이 null일때

  - 이는 email이 보이지 않도록 설정했을때 주로 발생한다.
  - 일단 scope에서 email을 허락했으니, 우린 email을 볼 권한이 있다.
  - 이를위해선 깃헙 REST API를 참조해야한다. </br>
    https://docs.github.com/en/rest/reference/users

    1. 깃헙에서 지시한 이메일 전용 url을 통해 fetch하도록 한다.
    2. email이 여러개일 경우, 해당 arr에서 유효한 email만 찾아서 리턴한다.

```js
// userController.js 에서..

// POST를 통해 json으로 토큰을 받아오는 과정
export const finishGithubLogin = async (req, res) => {
  // 깃헙에서 지시한 전용 url로 이동
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    // fetch와 headers 옵션을 통해 해당 url에 POST후 값 json 저장
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
```

```js
// userController.js 에서..

// POST 이후 GET을 통해 user정보를 취득하는 과정
if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    // 깃헙에서 지시한 GET 전용 url
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userData);
    // email이 프라이빗이라 유저정보에서 안 보일경우, 따로 깃헙에서 지시한 email 전용 url로 날라가서 가져오도록 설정
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    // 만약 많은 email을 등록한 상태라면, 현재 유효하고 최우선순위가 true인 email만 찾아서 리턴하도록 한다.
    const email = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!email) {
      return res.redirect("/login");
    }
  } else {
    return res.redirect("/login");
  }
};
```

<span style="color:yellow">[JS]</span> array에서 특정 값 찾기 : find( )</br>

```js
// 기본 문법은 아래와 같다.
arr.find(callback(element, index, array), thisArg);

// 실제 적용은 아래와 같다.
// emailData라는 array가 이미 있다고 가정하고,
const email = emailData.find(
  (email) => email.primary === true && email.verified === true
);
```

</br>

---

## #7.21 Github Login P6

<span style="color:#00FFFF">[EXPRESS]</span> 이전에 깜빡하고 사이트에 회원가입해서 만든 이메일 주소와 OAuth에 사용된 이메일과 가 동일할 때, 로그인 규칙 만드는법 </br>

- 여러가지 옵션이 있을 수 있다.
- 이 강의에서는 같은 email주소라면, 그냥 로그인시키는 방법을 쓸거다.

```js
// userController.js 에서..

export const finishGithubLogin = async (req, res) => {
  ...
  // github 의 유효한 eamil을 불러오고
  const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
  // 해당 github email이 기존 User DB에 있는 email과 충돌하는지 확인한다.
  const existingUser = await User.findOne({ email: emailObj.email });
    // 만약 기존 DB에 있는 email 주소와 같다면 그냥 로그인 시킨다.
    if (existingUser) {
      req.session.loggedIn = true;
      req.session.user = existingUser;
      return res.redirect("/");
    // 만약 기존 DB에 없는 email 이라면, github 유저정보를 토대로 새유저 DB를 생성하고 로그인시킨다.
    } else {
      const user = await User.create({
        name: userData.name,
        username: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true,
        location: userData.location,
      });
      req.session.loggedIn = true;
      req.session.user = user;
      return res.redirect("/");
    }
  ...
```

</br>

---

## #7.22 Log Out

<span style="color:#00FFFF">[EXPRESS]</span> 세션(로그인정보)를 파기하는 방법 = 로그아웃 활성화 </br>

- req.session.destroy(callback) : 세션을 파기하고 콜백을 호출 (콜백에 빈칸 가능)

```js
// userController.js 에서..

export const logout = (req, res) => {
  req.session.destroy(); // 세션파기, 빈 콜백
  return res.redirect("/");
};
```

## <span style="color:#00FFFF"> 7단원은 전체적으로 한 번 더 들어야 할 듯 </span>

</br>

---

## #8.1 Protector and Public Middlewares

<span style="color:#00FFFF">[EXPRESS]</span> 로그인 안한 유저가 /users/edit 을 직접 입력하여 들어올 경우, 우회시키는 방법 </br>

- 미들웨어에서 로그인 여부를 체크한 후, 상황에 따라 우회시킨다.
- 강의에선 로그인을 한 경우와, 하지 않는 경우 각각 따로 미들웨어를 작성했다.

```js
// middlewares.js 에서..

// 로그인을 이미 한 경우, 항상 다음 라우터 콜백 함수로 보냄
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    // 로그인을 하지 않은 경우, 항상 login 페이지로 보냄
    return res.redirect("/login");
  }
};

// 로그인을 하지 않은 경우, 항상 다음 라우터 콜백 함수로 보냄
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    // 로그인을 한 경우, 항상 HOME으로 보냄
    return res.redirect("/");
  }
};
```

<span style="color:#00FFFF">[EXPRESS]</span> 라우터에서 get과 post에 한꺼번에 적용되는 미들웨어 호출하는 방법</br>

- Router_name.route("/").all(midleware_name).get(func_name).post(func_name)
- get과 post 모두에게 적용되는 미들웨어를 추가한다.
- 미들웨어 내부에서 next를 받은 경우, get/post 에 맞춰서 해당 func를 호출한다.

```js
// rootRouter.js 에서..

rootRouter
  .route("/login")
  // 이미 로그인 되있는 경우는 미들웨어에서 캐치 후, HOME으로 돌려버린다.
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
```

</br>

---

## #8.2 Edit Profile POST P1

<span style="color:yellow">[JS]</span> 변수들을 조합해서 한꺼번에 불러오기 </br>

- ES6 기능
- 변수 호출시, {변수 그룹명: {변수명}..} 식으로 호출한다.

```js
// userController.js 에서..

const {
  session: {
    user: { _id },
  },
  body: { name, email, username, location },
} = req;
```

</br>

---

## #8.3 Edit Profile POST P2

<span style="color:#D9F8C4">[MONGOOSE] </span> update 내용을 보존하는 방법 </br>

- DB_Model.findByIdAndUpdate(\_id, {change_values}, {new: true})
- 바뀌고 난 변수들을 저장한 DB객체를 리턴한다.
- 마지막에 option중 하나인 new는 초기값이 default로, 바뀌기전의 DB객체를 리턴한다.
- 바뀌고 난 DB객체를 리턴하기 위해서는 따로 new: true를 지정해야 한다.

```js
// userController.js 에서..

// postEdit 부분 ->
...
const updatedUser = await User.findByIdAndUpdate(
  _id, // _id로 찾은 후,
  { name, email, username, location }, // form의 각 name에 들어있는 value를 업뎃
  { new: true } // 업뎃 후의 DB객체 리턴
);
req.session.user = updatedUser; // 해당 객체를 세션에 덮어씌우기
```

</br>

---

## #8.5 Change Password P2 6분까지들음

<span style="color:#00FFFF">[EXPRESS]</span> pw 변경시, DB와 session 모두를 업뎃하는 방법 </br>

- DB만을 업뎃하게 할 수도 있지만, 만일을 위해 둘 다 업뎃하는게 낫다. </br>
  (만일이란, PW변경 후에도 session 로그아웃을 하지않고 PW와 관련된 작업을 진행할 경우를 말한다.)

```js
// userController.js 에서..

// postChangePassword 함수 부분
...
  // session 에서 현재 로그인한 유저의 패스워드 정보를 가져온다.
  const {
    session: {
      user: { _id },
    },
    body: { oldPassword, newPassword, newPasswordConfirmation },
  } = req;

  user.password = newPassword; // 처음 session으로 로그인한 유저의 패스워드도 바꿔준다. (session을 새로 로그인하지 않고 그대로 작업을 이어나갈 경우, 이렇게 하지 않으면 어디선가 충돌이 일어날 수 있으므로)
  await user.save(); // 몽구스 미들웨어로 만들어둔 save 미들웨어롤 실행시켜, DB의 패스워드를 바꾼다.

```

</br>

---

## #8.6 File Uploads P1

<span style="color:#7FFF00">[PUG]</span> 파일을 업로드 하기위한 form 작성법 </br>

```js
// edit-profile.pug 에서..

form(method="POST", enctype="multipart/form-data") // multer를 받기위한 enctype(인코딩타입)
        label(for="avatar") Avatar
        input(type="file", id="avatar", name="avatar", accept="image/*") // 이미지 파일만을 인식하기위한 accept
```

<span style="color:#00FFFF">[EXPRESS]</span> multer : 서버에 파일 업로드를 위한 미들웨어 </br>

- 사용법은 세 가지 절차를 따른다.

  1. form 의 편집

  - PUG등의 템플릿 안의 form을 enctype="mulpart/form-data"로 설정

  2. 미들웨어 작성

  - multer를 사용한 전용 미들웨어를 만든다.

  ```js
  import multer from "multer";
  export const uploadFiles = multer({ dest: "uploads/" }); // upload폴더를 만들고 거기에 저장

  // dest 옵션 : "파일 저장위치"
  ```

  3. 해당 미들웨어를 라우터(POST부)에 연결

  ```js
  userRouter
    .route("/edit")
    .all(protectorMiddleware)
    .get(getEdit)
    .post(uploadFiles.single("avatar"), postEdit);

  // POST함수 전에 multer 미들웨어를 호출
  // 파일을 하나만 가져올 경우는 .single("file인풋의 name")
  // 미들웨어 배치 순서가 중요하므로, multer 미들웨어는 반드시 post 콜백 함수 앞에 위치시킨다.
  ```

  - 무사히 파일을 업로드하면 req.file이 생성된다. (req.body와는 별도다.)

</br>

---

## #8.7 File Uploads P2

<span style="color:#00FFFF">[EXPRESS]</span> 아바타 사진 바꾸는법과 주의점 </br>

- file을 업로드시, file.path가 생성된다.
- 이 file.path를 항상 avatarUrl에 대입하도록 하면, file이 업로드되지 않았을 때 에러가 발생한다.
- 따라서, file이 업로드 되어있는지부터 확인 후, file.path를 대입시키도록 코드를 짠다.

> 한가지 명심해라 </br>
> DB에 직접 파일을 올리는게 아니다. DB는 URL만 올리는거다.

```js
// userController.js 에서..

// postEdit 부
 const {
    session: {
      // req.session.user부에서 _id랑 avatarUrl을 같이 불러온다.
      user: { _id, avatarUrl },
      ...
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { // update실행시, file 업로드를 통해 file이 존재한다면, 해당 url(file.path)을 새로 대입하고, file이 없다면 기존 url을 그대로 쓰도록한다.
      avatarUrl: file ? file.path : avatarUrl,
```

</br>

---

## #8.8 Static Files and Recap

<span style="color:#00FFFF">[EXPRESS]</span> express.static() : 파일을 서버에 노출시키는 방법 </br>

- /uploads 경로를 라우터에 추가함과 동시에, express.static("/uploads")를 선언한다.
- 이 작업을 빼먹을시, uploads 폴더안의 파일들을 끄집어낼 수 없다.
- https://expressjs.com/ko/api.html#express.static

```js
//server.js 에서..

// uploads 폴더 내부 파일을 열 수 있도록 한다.
app.use("/uploads", express.static("uploads"));
```

</br>

---

## #8.9 Video Upload

<span style="color:#00FFFF">[EXPRESS]</span> multer : 업로드 할 파일 용량 제한하기 </br>

- limit 옵션과 fileSize 옵션을 혼합한다.
- https://www.npmjs.com/package/multer

```js
// middleware.js에서..

export const avatarUPload = multer({
  dest: "uploads/avatars/",
  // limits 옵션 중, fileSize 옵션을 byte로 추가
  limits: {
    fileSize: 3000000, // 3 MB에 해당
  },
});
```

</br>

---

## #8.11 Video Owner P1

<span style="color:#00FFFF">[EXPRESS]</span> video 객체에 user를 연결시키는 법 </br>

- 업로드한 유저의 id가 video애 들어가면 된다.
- 한 유저가 다수의 video를 업로드 하면, 해당 video들은 모두 한명의 유저아이디(owner)를 갖는다.

- Video Model의 owner는 User모델의 objectId를 가져와야 한다. (아래코드참조)

```js
// models/Video에서..

// video schema 부분
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
```

```js
// videoController.js 에서..

export const postUpload = async (req, res) => {
  // 업로드한 유저 세션에서 id를 따오고
  const {
    user: { _id },
  } = req.session;
  ...
    try {
      await Video.create({
        ...
        // 따온 id를 Video 모델에 추가한 owner 변수에 집어넣는다.
        owner: _id,
        ...
```

- 이렇게 넣은 owner 타입은 object이므로, pug에서 session id와 비교시는 String 치환을 해줘야한다.

```js
// watch.pug 에서..

    if String(video.owner) === String(loggedInUser._id)
    // owner와 현재 로그인한 session id가 같다면, 편집과 삭제 버튼을 표시
        a(href=`${video.id}/edit`) Edit Video &rarr;
        br
        a(href=`${video.id}/delete`) Delete Video &rarr;
```

</br>

---

## #8.12 Video Owner P2

<span style="color:#00FFFF">[EXPRESS]</span> populate() : 몽구스, 다른 model 문서를 참조해서 가져오기 </br>

- video와 user를 연결할 때, Video/User 따로따로의 DB 컬렉션을 참조하기보단, Video 내부에서 User 내부 정보도 가져올 수 있게 하는게 효과적이다.
- 이는 몽구스 내부의 populete()를 사용하면 편리하다.

```js
// videoController.js 에서..

export const watch = async (req, res) => {
  const { id } = req.params;
  // Video model에 미리 owner의 ref로 User model을 지정한다.
  // populate로 owner 변수를 불러오면, User 객체를 통째로 불러온다.
  const video = await Video.findById(id).populate("owner");
  ...

// output : User 모델 통째
```

</br>

---

## #8.14 Bug Fig

<span style="color:#D9F8C4">[MONGOOSE] </span> DB값 변경 확인 후 boolean 리턴</br>

- ModelSchema 사용자 함수를 정의할 때 주로 사용된다.
- DB 객체의 특정 값이 변경되었는지 확인한 후에 코드를 실행하고 싶을 때 사용된다.
- this(or Model_Obj).isModified("Schema_Variable") </br>
  (Schema_Variable 이 변경되었다면 true 반환)

```js
// Models/User.js 에서..

userSchema.pre("save", async function () {
  // password 값이 변경되었을 때만 bcrypt 실행
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});
```

<span style="color:#00FFFF">[EXPRESS]</span> status(403): forbidden </br>

- 권한때문에 거절될 경우 리턴하는 에러번호, 403

```js
// videoController.js 에서..

// getEdit 부
  ...
  // session id와 video.owner 값이 일치하지 않으면 403 에러보내고 HOME화면으로 우회
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  ...
```

</br>

---

## #9.1-2 Webpack Configuration P1, P2

<span style="color:#D9F">[WEBPACK]</span> WEBPACK 이란? </br>

- 웹 모듈 번들러
- 모듈 번들러 : 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구
- 주요 목적은 브라우저에서 사용할 JavaScript 파일을 번들로 묶는 것이지만 거의 모든 리소스나 asset을 변환, 번들링 또는 패키징할 수도 있다.

> npm i webpack webpack-cli -D

> webpack.config.js 파일 생성. 여기가 js, css파일 등을 바꿔주는 핵심엔진

```js
// webpack.config.js 에서..

module.exports = {
  // 가져올 파일 경로 입력
  entry: "./src/client/js/main.js",
  // 개발중인지, 디플로이할건지 입력
  mode: "development",
  // 출력 방식에 대한 설정
  output: {
    // 파일명
    filename: "main.js",
    // 파일 출력할 "절대경로"
    // __dirname으로 현재 작업 폴더의 절대경로를 받고
    // path.resolve로 "절대경로/assets/js" 라는 폴더에 배정
    path: path.resolve(__dirname, "assets", "js"),
  },
  // 모듈화시, 어떤 방식을 적용할건지 설정
  module: {
    rules: [
      {
        // 모든 js파일을 대상으로
        test: /\.js$/,
        // babel-loader 라는 전용 로더를 사용한다.
        use: {
          loader: "babel-loader",
          // 로더가 정해지면 옵션방식도 거의 정해짐.
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
```

</br>

---

## #9.3 Webpack Configuration P3

<span style="color:#D9F">[WEBPACK]</span> PUG에서 script src 참조시, 주소 주의사항 </br>

- src js파일이 들어있는 폴더주소가 아닌, 웹에서 표시되는 주소로 써야한다.

```js
// base.pug 에서..

// 실제 파일은 asstest/js/main.js 지만,
// server.js에서 /static주소안의 js/main.js라고 지정했으므로 아래와 같이 쓴다.
script((src = "/static/js/main.js"));
```

</br>

---

## #9.4 SCSS Loader

<span style="color:#D9F">[WEBPACK]</span> SCSS와 관련된 로더 설치 </br>

- sass-loader : scss파일을 읽고, css파일로 컴파일

  > npm i sass-loader sass webpack --save-dev

- css-loader : JS에 import되는 css파일을 해석해서 JS식으로 컴파일

  > npm i --save-dev css-loader

- style-loader : JS식으로 컴파일된 css를 DOM(HTML 인터페이스)에 쏘아주는 로더
  > npm i --save-dev style-loader

<span style="color:#D9F">[WEBPACK]</span> SCSS와 관련된 로더 사용의 주의점 </br>

- babel-loader와 마찬가지로 test-use를 추가한다.
- 여러 loader를 동시 로딩할 시, 배열 순서(LIFO)에 유의한다.

```js
// webpack.config.js 에서..

// scss loader관련 추가시, 순서 주의
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    // use배열 맨 마지막 것부터 실행이 되므로 순서가 중요하다.
    // 1. scss -> css 컴파일 : sass-loader
    // 2. css -> js 코드로 컴파일 : css-loader
    // 3. 해당 js -> DOM 표시가능하도록 컴파일 : style-loader
```

</br>

---

## #9.5 MiniCssExtractPlugin

<span style="color:#D9F">[WEBPACK]</span> MiniCssExtractPlugin : Webpack 이용시, JS와 CSS코드를 분리할 때 </br>

- MiniCssExtractPlugin 를 사용한다.

  > npm install --save-dev mini-css-extract-plugin

- js파일과 css파일을 따로 저장할 땐, 아래 절차를 따른다.
- plugin으로 MiniCssExtractPlugin 넣을때, filename을 따로 지정
- webpack.config.js에서 "style-loader" 대신 MiniCssExtractPlugin.loader를 입력
- js파일만 따로 들어갈 수 있도록 filename을 js/main.js로 변경

```js
// webpack.config.js 에서..

module.exports = {
  ...
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
  },
  module: {
    rules: [
      ...
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
```

</br>

---

## #9.6 Better Developer Experience

<span style="color:#D9F">[WEBPACK]</span> watch 모드 : 실시간 변화 감지 & 컴파일 </br>

- webpack.config.js에 watch: true를 추가

```js
module.exports = {
  entry: "./src/client/js/main.js",
  mode: "development",
  watch: true, // 실시간 webpack관련 변화감지
  ...
```

<span style="color:#FF7F50">[Node-JS]</span> nodemon에서 변화 감지 예외 설정 </br>

- nodemon 파일을 만들어 그 안에 예외를 넣는다.
- 해당 파일을 불러올 때 실행할 변수도 넣으면 좋다. (exec)

```js
// nodemon.json 에서..

{   // 배열에 적한 파일들은 변화 감지 OFF = 백엔드 재시작 안함
    "ignore" : ["webpack.config.js", "src/client/*", "assets/*"],
    // 이 파일이 불려지면 babel-node 실행
    "exec": "babel-node src/init.js"
}
```

</br>

---

## #10.3 Styles Conclusions

- 10.0 - 10.2 는 니코가 css작성하는 timelaps

<span style="color:#00FFFF">[EXPRESS]</span> 더블 populate (deep populate)</br>

- populate안에 populate를 한다.

```js
// userContorller.js 에서..

export const see = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate({
    // 일단 모든 videos 객체들을 populate한다.
    path: "videos",
    populate: {
      // video객체 안의 owner(ref:User)를 다시 populate한다.
      // 이러면 owner와 관련된 정보만을 받아올 수 있다.
      path: "owner",
      model: "User",
    },
  ...
```

</br>

---

## #11.0 Player Setup

<span style="color:#D9F">[WEBPACK]</span> </br>

- 여러 엔트리를 서로 따로따로 저장할 수 있도록 설정

```js
// webpack.config/js 에서..

module.exports = {
  entry: {
    // 서로 다른 입력파일(main, videoPlayer)을 엔트리 한다.
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  ...
  output: {
    // filename을 [name] 행렬로 설정하여, 서로 다른 엔트리가 각자만의 이름으로 저장되도록 한다.
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  ...
```

</br>

---

## #11.1 Play Pause

<span style="color:yellow">[JS]</span> video 관련 event-handler </br>

- HTMLMediaElement : 비디오/오디오 관련 부모 요소 정리 </br>
  https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement
- HTMLVideoElement : 비디오 관련 조작 요소 정리 </br>
  https://developer.mozilla.org/ko/docs/Web/API/HTMLVideoElement

```js
// client/js/videoPlater.js 에서..

video.muted : mute 여부 확인
video.pause : pause 여부 확인
video.play : play 여부 확인
video.volume : volume 값 확인
```

</br>

---

## #11.2-3 Volume

<span style="color:yellow">[JS]</span> range의 event-handle, input / change 차이 </br>

- "change" : 변경 후 마우스를 떼야 적용
- "input" : 실시간 변경 값을 적용
- 그 외 range에 사용 가능한 이벤트 정리 </br>
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

```js
// client/js/videoPlater.js 에서..

volumeRange.addEventListener("input", handleVolumeChange);
```

</br>

---

## #11.4 Duration and Current Time

<span style="color:yellow">[JS]</span> 비디오의 metadata를 로드해서, 전체 길이와 현재 진행 시간 알아오기 </br>

- 정해진 event-handle을 사용한다. </br>
  loadeddata : 미디어의 첫번째 프레임이 로딩 완료된 시점에 발생 </br>
  재생길이 등의 초기 비디오정보를 갱신할 때 사용 </br>
  timeupdate : currentTime 속성이 변경되는 시점에 발생

- video.duration : 비디오 전체 길이를 리턴
- video.currentTime : 비디오 현재 시간을 리턴

```js
// client/js/videoPlayer.js 에서..

const handleLoadedMetadata = () => {
  totalTime.innerText = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTime.innerText = Math.floor(video.currentTime);
};

video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
```

</br>

---

## #11.5 Time Formatting

<span style="color:yellow">[JS]</span> 라이브러리를 사용하지 않고, 손쉽게 00:00:00 포멧으로 시간 표시하는 방법 </br>

- new Date(숫자)를 사용한다.
- new Date(숫자)의 경우, 첫 날짜 1970년 1월 1일 9시를 기준으로 숫자(ms)만큼 시간을 진행시킨다.
- 따라서 진행하고 싶은 초\*1000 이후, 시간 부분만 string을 따와 표시하면 된다.

```js
// client/js/videoPlayer.js 에서..

// 00:00:00 빼오는 함수
const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substring(11, 19);

// 영상 길이에 함수 적용
const handleLoadedMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
};
// 현재 시각에 함수 적용
const handleTimeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
};
```

</br>

---

## #11.7 Fullscreen

<span style="color:yellow">[JS]</span> 풀스크린 API </br>

- Fullscreen API를 이용해 모든 항목(+그 자손까지)에 대해 풀스크린을 적용할 수 있다.
- 관련 메소드는 아래와 같다. </br>
  Element.requestFullscreen() : 풀스크린으로 전환 </br>
  Document.exitFullscreen() : 창모드로 전환 </br>
  Document.fullscreenElement : 현재 풀스크린인지 아닌지 리턴 </br>

```js
// client/js/videoPlayer.js 에서..

const handleFullscreen = () => {
  // 풀스크린 버튼을 눌렀을 때, 먼저 현재 document가 풀스크린인지 확인하고
  const fullScreen = document.fullscreenElement;
  // true일 경우 풀스크린을 종료, 버튼이름 변경
  if (fullScreen) {
    document.exitFullscreen();
    fullScreenBtn.innerText = "Exnter Full Screen";
    // flase일 경우 풀스크린으로 전환, 버튼이름 변경
  } else {
    videoContainer.requestFullscreen();
    fullScreenBtn.innerText = "Exit Full Screen";
  }
};
```

</br>

---

## #11.8 Controls Events P1

<span style="color:yellow">[JS]</span> ms초 뒤에 특정함수 실행 및 취소 </br>

- setTimeout(함수, ms초) : ms초 뒤에 함수 실행
- clearTimeout(timeout id) : 해당 id (setTimeout설정된 id)를 캔슬

```js
// client/js/videoPlayer.js 에서..(코드 약간 변형)

// setTimeout의 id 받을 변수 초기화
let controlsTimeout = null;
// setTimeout의 id 입력
controlsTimeout = setTimeout(() => {
  videoControls.classList.remove("showing");
}, 3000);

// setTimeout 취소
clearTimeout(controlsTimeout);
```

</br>

---

## #11.9 Controls Events P2

<span style="color:yellow">[JS]</span> 비디오 내부에 마우스가 계속 움직일 때 컨트롤러 유지하는 법 </br>

- 움직일때마다 기존 setTimeout을 버리고 새로운 setTimeout을 생성
- 움직임이 멈추면 setTimeout에 따라 컨트롤러 숨기는 함수 작동
- 마우스 이벤트 정리 </br>
  https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

```js
// client/js/videoPlayer.js 에서..(코드 약간 변형)

// setTimeout의 id 받을 변수 초기화
let controlsMovementTimeout = null;
// 이전 setTimeout id가 설정되어 있었다면, 없애고 null 배치
if (controlsMovementTimeout) {
  clearTimeout(controlsMovementTimeout);
  controlsMovementTimeout = null;
}
// 새로운 setTimeout id을 부여
controlsMovementTimeout = setTimeout(hideControls, 3000);
```

</br>

---

## #12.1 Register View Event

<span style="color:yellow">[JS]</span> 비디오 재생이 끝난걸 확인하는 이벤트리스너 </br>

- "ended" 속성
- 비디오 재생이 전부 끝나고 난 다음 액션 실행
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event

```js
// client/js/videoPlayer.js 에서..

video.addEventListener("ended", handleEnded);
```

<span style="color:red">[HTML]</span> HTML Data 속성 </br>

- video \_id같은 요소들을 가져올 때, 백엔드에서는 손쉽게 req.params으로 가져올 수 있었다. </br>
  하지만 프론트의 JS에서는 req를 쓸 수 없으므로 다른 방법이 필요하다.
- 이 때, HTML의 data-\* 속성을 사용 가능하다.
- 페이지에 로드되는 모든 요소값을 data-\*에 지정할 수 있고, 프론트 JS에서는 이 값을 읽어올 수 있다.
- 불러올 때는 JS에서 <요소id.dataset.(data-부분을 제외한)요소명>을 사용한다.
- https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes

```js
// watch.pug 에서..

block content
    // data-id 값으로 video의 _id 대입
    div#videoContainer(data-id=video._id)
    ...
```

```js
// client/js/videoPlayer.js 에서..

const handleEnded = () => {
  // watch.pug에서 지정한 data-id 값을 id로 불러와 지정
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, {
    method: "POST",
  });
};
```

</br>

---

## #12.2 Conclusions

<span style="color:#00FFFF">[EXPRESS]</span> status() 와 sendStatus() 의 차이 </br>

- res.status(404) 는 반드시 뒤에 render 등의 후처리를 필요로한다.
- 후처리가 없는 경우, 계속 후처리를 기다리는 상태(pending)에 돌입한다.

```js
// 200 처리 후, "/" 렌더
return res.status(200).render("/");
```

- res.sendStatus(404) 는 이것만으로 완료처리까지 된다.

```js
// 200 만 처리.
return res.sendStatus(200);
```

</br>

---

## #13.0 Recorder Setup

<span style="color:yellow">[JS]</span> 프론트 JS에서 async, await 비동기 함수 사용하기 </br>

- regenerator-runtime 을 설치해줘야 한다.
  > 1. npm i regenerator-runtime </br>
  > 2. 프론트 JS에서 : import regeneratorRuntime from "regenerator-runtime";

</br>

<span style="color:yellow">[JS]</span> 비디오, 오디오 같은 유저측 미디어 요청을 수락하여 실시간 스트림 하는 방법 </br>

- navigator.mediaDevices.getUserMedia(constraints);
- constraints 내용물에 따라 어떤 미디어 정보를 가져올지 취사선택 </br>
  { audio: true, video: true} : 오디오, 비디오 동시 스트림
- https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia

```js
// client/js/recoder.js 에서..

// regenerator-runtime이 설치된 전제하에
const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  // 스트림 객체를 출력.
  // 객체 정보일 뿐이기때문에, 실시간 비디오 송출은 안됨.
  console.log(stream);
};
```

</br>

---

## #13.1 Video Preview

<span style="color:yellow">[JS]</span> 스트림 객체를 실시간 미디어로 송출하는 방법 : srcObject </br>

- 실시간 송출하기를 원하는 요소(video, audio 등)에 스트림을 배정한다.
- 이 때, video.srcObject = 스트림 같은 방식으로 배정한다.
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
// 따로 video 요소를 만들고
const video = document.createElement("video");
// video 요소의 srcObject에 스트림 배정
// 스트림 내용물이 실시간 video로 출력됨
video.srcObject = mediaStream;
```

</br>

---

## #13.2 Recording Video P1

<span style="color:yellow">[JS]</span> 비디오/오디오 녹화하기 </br>

- 비디오/오디오 관련 장치가 stream 되고있다는 전제하에 </br>
  new MediaRecorder(stream) 객체 생성
- https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder

```js
// stream = getUserMedia video 중이라는 전제하에

const recorder = new MediaRecorder(stream); // 리코더 객체 생성
recorder.start(); // 녹화 시작
recorder.stop(); // 녹화 중지

// .stop()을 호출하면 dataavailable의 event가 발생한다.
// 해당 event안에는 리코더 객체의 각종 정보가 들어있다.
// 관련 설명은 다음 챕터에서
```

</br>

---

## #13.3 Recording Video P2

<span style="color:yellow">[JS]</span> 녹화 종료 후 URL생성하기 </br>

- 녹화를 종료(.stop())하면, dataavailable의 event가 발생한다.
- 해당 event에는 녹화된 객체 정보가 들어있다.
- URL.createObjectURL(event.data) 를 통해 녹화된 객체의 URL을 만들 수 있다.
- https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL

```js
// stream = getUserMedia video 중이라는 전제하에

const recorder = new MediaRecorder(stream); // 리코더 객체 생성
// .stop() 이후 처리할 event를 미리 선언 (이러면 .stop()이 다른 event-handle에서 불려와도 알아서 처리됨)
recorder.ondataavailable = (event) => {
  const videoURL = URL.createObjectURL(event.data); // 녹화된 객체의 URL 생성 (해당 URL은 윈도우가 닫힐때까지만 유효하다.)
  video.srcObject = null; // 촬영 중인 카메라 끄기
  video.src = videoURL; // 대신 재생할 비디오 URL을 대입
  video.play(); // 해당 URL의 비디오를 재생
};

recorder.start(); // 녹화 시작
recorder.stop(); // 녹화 중지
```

</br>

---

## #13.4 Downloading the file

<span style="color:yellow">[JS]</span> HTML 링크(a) 요소 작성 후 자동 클릭하게 만들기 </br>

```js
const handleDownload = () => {
  const a = document.createElement("a");
  a.href = videoFile;
  a.download = "MyRecording.webm";
  document.body.appendChild(a);
  // 해당 함수가 트리거되면 링크 클릭까지 자동화
  a.click();
};
```

</br>

---

## #14.0 FFmpeg 소개

<span style="color:yellow">[JS]</span> FFmpeg란 </br>

- FFmpeg </br>
  오디오 및 비디오를 기록, 변환 및 스트리밍하는 완벽한 크로스 플랫폼 솔루션입니다. FFmpeg는 인간과 기계가 만든 거의 모든 것을 디코딩, 인코딩, 트랜스코딩, mux, demux, 스트리밍, 필터링 및 재생할 수 있는 최고의 멀티미디어 프레임워크입니다. 유튜브도 이걸 씁니다. </br>
  https://www.ffmpeg.org/

- FFmpeg WebAssembly </br>
  ffmpeg.wasm은 FFmpeg의 순수한 Webassembly/Javascript 포트입니다. 그것은 비디오 및 오디오 녹음, 변환, 스트리밍 등을 브라우저 내부에서 할 수 있도록 합니다.
  FFmpeg WebAssembly를 사용하는 이유는 FFmpeg를 사용해서 브라우저로 하여금 비디오 파일을 변환하기 위함입니다. </br>
  https://github.com/ffmpegwasm/ffmpeg.wasm

- WebAssembly </br>
  WebAssembly(Wasm)는 스택 기반 가상 머신을 위한 이진 명령 형식입니다. Wasm은 프로그래밍 언어를 위한 이식 가능한 컴파일 대상으로 설계되어 클라이언트 및 서버 응용 프로그램을 위해 웹에 배포할 수 있습니다.

</br>

---

## #14.1 Transcode Video

<span style="color:yellow">[JS]</span> FFmpeg로 mp4 인코딩하기 </br>

- 아래는 공식과도 같으니, 그대로 적용한다.

```js
// client/js/recoder.js에서..

const handleDownload = async () => {
  const ffmpeg = createFFmpeg({ log: true }); // 처리과정 log를 표시
  await ffmpeg.load(); // 일단 ffmpeg모듈을 로딩 (시간 걸리므로 await)

  // .FS : 가상공간(MEMFS)에 파일을 어떻게 올릴건지 정하는 함수
  // writeFile : 파일을 쓸거다(method)
  // "recording.webm" : MEMFS(MEMory of File System)에 쓸 파일명
  // fetchFile(videoFile) : write를 위한 바이너리(blob)로 이루어진 객체
  ffmpeg.FS("writeFile", "recording.webm", await fetchFile(videoFile));

  // .run : 핵심기능. 영상에 어떤 처리를 할건지 정한다.
  // "-i" : input, 읽어올 파일을 의미
  // "recording.webm" : MEMFS에서 읽어올 파일명
  // "-r" : 프레임레이트 지정
  // "60" : 60 프레임
  // "output.mp4" : 변환 후의 출력 파일명 지정 (mp4 형식)
  await ffmpeg.run("-i", "recording.webm", "-r", "60", "output.mp4");
};
```

</br>

---

## #14.2 Download Transcoded Video

<span style="color:yellow">[JS]</span> MEMFS에서 데이터 읽기</br>

- .FS("readFile") 로 읽을시, Unit8Array로된 ArrayBuffer가 리턴된다.

```js
const mp4File = ffmpeg.FS("readFile", "output.mp4");
// Unit8Array로 이루어진 ArrayBuffer 리턴
console.log(mp4File.buffer);
```

<span style="color:yellow">[JS]</span> Unit8Array란?</br>

- 양의 정수 8비트 배열(unsigned)을 의미
- 음의 정수 8비트 호칭 : signed, 앞의 -가 사인되었다는 뜻

```js
[12, 5, 123, 67, 23 ...]
```

<span style="color:yellow">[JS]</span> ArrayBuffer란?</br>

- raw binary data buffer를 의미
- 주로 이 raw 데이터를 변환시켜서 사용한다.

</br>

---

## #14.3 Thumbnail

<span style="color:yellow">[JS]</span> 특정 프레임에서 썸네일 만들기</br>

- -ss와 -frames:v 를 이용하여 특정 시간&프레임을 결정하고 이를 썸네일로 저장한다.

```js
// -i : 인풋할 대상을 선택
// recording.webm : 인풋할 대상 파일명
// -ss : 특정 시간을 탐색
// 00:00:02 : 2초 시간을 설정
// -frames:v : 특정 프레임을 선택
// 1 : 1프레임 선택
// thumnail.jpg : 해당 프레임을 저장할 파일명
await ffmpeg.run(
  "-i",
  "recording.webm",
  "-ss",
  "00:00:02",
  "-frames:v",
  "1",
  "thumbnail.jpg"
);
```

</br>

---

## #14.4 Recap

<span style="color:yellow">[JS]</span> MEMFS에서 들고있는 링크 해제하기 </br>

- .FS("unlink") 사용
- MEMFS에 내용물이 계속 담겨 있을 경우, 인터넷이 느려진다.

```js
ffmpeg.FS("unlink", "recording.webm");
```

<span style="color:yellow">[JS]</span> URL.createObjectURL 로 만든 링크 해제하기 </br>

- URL.revokeObjectURL() 사용
- MEMFS와 마찬가지로, 계속 들고 있을 경우 인터넷이 느려질 수 있다.

```js
URL.revokeObjectURL(mp4Url);
```

</br>

---

## #15.0-1 Flash Installation ~ Sending Messages

<span style="color:#00FFFF">[EXPRESS]</span> Express Flash </br>

- npm i express-flash
- 플래시 메시지를 정의하고 요청을 리디렉션하지 않고 렌더링할 수 있는 기능이 있는 connect-flash의 확장이다.
- https://www.npmjs.com/package/express-flash

```js
// server.js 에서
import flash from "express-flash";

app.use(flash());
```

```js
// 특정 컨트롤러에서..

// 특정 함수안에서
req.flash("info", "Welcome"); // local.message.info 가 생성됨
```

```js
// PUG 등의 view에서..g

// local.message.info를 이용해서 메세지 표시
if message.info
  span=message.info
```

</br>

---

## #16.0-1 Comment Box

<span style="color:yellow">[JS]</span> addEventListner("submit") 특징 </br>

- form의 경우, submit 핸들러가 적용가능하다.
- submit이 작동하면 기본적으로 새로고침을 하기 때문에 preventDefault를 추가한다. (필요하다면)

```js
form.addEventListener("submit", handleSubmit);
```

</br>

---

## #16.3-4 API Route

<span style="color:#00FFFF">[EXPRESS]</span> fetch를 이용해 JSON 데이터로된 req.body 보내기 </br>

- 서버측에 express.json()을 넣어둔다. </br>
  (JSON.stringify() 실행이 가능해짐)
- API request시, 데이터가 포함된 header와 함께 전송한다.
- 이 때, 보낸 데이터가 JSON인지, string인지 header를 통해 Content-type을 지정해야함.
- https://gomakethings.com/how-to-send-data-to-an-api-with-the-vanilla-js-fetch-method/
- https://gomakethings.com/how-to-send-data-to-an-api-with-the-vanilla-js-fetch-method/#s011ending-data-as-a-json-object
- https://expressjs.com/ko/api.html#express.json
- https://expressjs.com/ko/api.html#express.text

```js
// server.js에서..

app.use(express.json());
```

```js
// client/js/commentSection.js 에서..

...
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { // JSON 파일을 보낼것임을 선언
      "Content-Type": "application/json", // 반드시 이 양식일 것
    },
    body: JSON.stringify({ text }), // JSON으로 치환된 text를 body에 넣음
  });
  ...
```

</br>

---

## #16.7 Realtime Comments

<span style="color:yellow">[JS]</span> appendChild / prepend 차이 </br>

- appendChile("element") : element를 마지막에 추가
- prepend("element") : element를 맨 위에 추가

```js
const videoComments = document.querySelector(".video__comments ul");
const newComment = document.createElement("li");

// videoComments 하위에 newComment를 맨위에 계속 추가
videoComments.prepend(newComment);
```

</br>

---

## #16.8 Comment Ids

<span style="color:#00FFFF">[EXPRESS]</span> res.json([body]) : 백엔드에서 json 문자열 response 반환하는 방법 </br>

- 내부적으로 JSON.stringify()가 존재하여, body 부분을 JSON으로 치환한 뒤 반환한다.
- https://expressjs.com/ko/api.html#res.json

```js
res.json({ user: "tobi" });
res.status(500).json({ error: "message" });
```

<span style="color:#00FFFF">[EXPRESS]</span> response.json() : 백엔드에서 보낸 json 문자열을 프론트에서 표시하는 방법 </br>

- 백엔드에서 보낸 res스트림(문자열)을 가져와 읽는다.
- https://developer.mozilla.org/en-US/docs/Web/API/Response/json

```js
const { newCommentId } = await response.json();
```

</br>

---

## #16.9 Recapn and Challenge

<span style="color:yellow">[JS]</span> element.remove() : 프론트 JS에서 해당 엘리먼트를 제거하는 법 </br>

- removeChild() 로 대용가능
- https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

<span style="color:yellow">[ETC]</span> 그 외 프로젝트 </br>

챌린지 과제

- 댓글 삭제하기 (삭제시 비디오나 유저 도큐먼트에서도 삭제 필요)

추가로 구현해볼 만한 기능들

- 댓글 추가 및 삭제시 실시간으로 댓글 갯수 변경
- 댓글 수정하기
- 좋아요
- 좋아요 취소
- 해시태그 클릭시 비디오 찾기

</br>

---

## #17.0 Building the Backend

<span style="color:#00FFFF">[EXPRESS]</span> babel CLI란? </br>

- npm install --save-dev @babel/cli
- Babel은 명령줄에서 파일을 컴파일하는 데 사용할 수 있는 내장 CLI와 함께 제공됩니다.
- https://babeljs.io/docs/en/babel-cli

<span style="color:#00FFFF">[EXPRESS]</span> regeneratorRuntime : ES5에서 비동기 실행하는 방법 </br>

- regeneratorRuntime
- Regenerator로 컴파일된 생성기 및 비동기 함수를 위한 독립 실행형 런타임입니다.
- https://www.npmjs.com/package/regenerator-runtime

```js
import "regenerator-runtime";
// babel에서 ES5로 바꿔줄때, 비동기 함수들을 실행할 수 있게 된다.
```

</br>

---

## #17.3 Deploying to Heroku

<span style="color:#00FFFF">[EXPRESS]</span> 17.3단원 정리 </br>

- vscode 터미널, 관리자 권한 실행하기

  - vscode 실행파일 자체를 관리자로 실행하면 됨

- Heroku </br>

  - heroku logs --tail: 실시간으로 헤로쿠 로그 보기 </br>
  - https://www.heroku.com

- Heroku로 배포하는 방법 2가지

  1.  Heroku CLI 이용하기 </br>
      heroku login (헤로쿠 로그인) </br>
      heroku git:remote -a : app이름 (헤로쿠 원격 저장소와 연결) </br>
      git push heroku master (헤로쿠에 푸시) </br>

            - +error: src refspec master does not match any 오류 해결 방법 </br>

      git push heroku master대신 git push heroku main 또는 </br>
      git push heroku HEAD:master로 시도해보세요. </br>
      아마 깃 브랜치는 main인데 heroku 브랜치는 main이 아니여서 생기는 오류로 추정됩니다. </br>

  2.  GitHub 이용하기 </br>
      GitHub 리포지토리에 연결

- MongoDB Atlas </br>

  - 몽고DB를 헤로쿠에서 이용하는 방법
  - https://www.mongodb.com/cloud/atlas

  </br>

---

## #17.4 MongoDB Atlas

<span style="color:#00FFFF">[EXPRESS]</span>17.4 단원 정리</br>

- MongoDB 생성 </br>

  1. 새로운 Project 생성
  2. Cluster추가 (Create a database)
     (Atlas-DEPLOYMENT-Databases에서 Build a Database로 변경)
  3. Shared클릭
  4. Cloud Provider & Region 선택 (us-east-1)
  5. Cluster Tier 선택 (Free)
  6. Cluster 생성 </br>

- Connect to DB </br>
  password를 사용자의 암호로 바꿉니다.</br>
  myFirstDatabase를 연결이 기본적으로 사용할 데이터베이스 이름으로 바꿉니다. </br>
  모든 옵션 매개변수가 URL로 인코딩되었는지 확인하십시오.

- .env에서 설정한 환경 변수를 heroku에 setting - Config Vars에 각각 추가

  - 프로젝트에선 DB_URL / COOKIE_SECRET 을 추가함

  </br>

---

## #17.5 Environment Variables

<span style="color:#00FFFF">[EXPRESS]</span> 17.5 단원 정리</br>

- heroku tail 에러시 해결 방법 </br>

  - (내 경우) err 메세지를 하나씩 확인해본 결과, mongo atlas 연결 문제로 보였다.
  - mongo atlas에 접속, network access 들어가 내 현재 ip를 변경했다.
  - 유동 ip의 경우, 이런 일이 발생하는걸로 보임

- 또 다른 한 일 : heroku에 GH_CLIENT/GH_SECRET 추가

  - "깃헙으로 로그인 하기"에 필수적인 두 요소들은 .env파일에 저장되어있다.
  - 따라서, heroku config vars에 따로 추가해줘야한다.

  </br>

---

## #17.6 Github and AWS S3 P1

<span style="color:#00FFFF">[EXPRESS]</span> 17.6 단원 정리</br>

- GitHub Developer settings (깃허브 소셜 로그인 구현시) </br>
  생성한 OAuth Apps의 Authorization callback URL를 최종 배포한 사이트 주소로 변경

  - https://github.com/settings/developers

- heroku dashboard에서 github으로 deploy하는 법
  - heroku -> project -> deploy 탭 -> github connect
  - 이러면 git push origin master만으로 heroku까지 자동갱신된다.
