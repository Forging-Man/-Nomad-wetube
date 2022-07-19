색깔 표기 정리 </br>
<span style="color:red">[HTML]</span>
<span style="color:skyblue">[CSS]</span>
<span style="color:yellow">[JS]</span>
<span style="color:#FF7F50">[Node-JS]</span>
<span style="color:#00FFFF">[EXPRESS]</span>
<span style="color:#7FFF00">[PUG]</span>
<span style="color:#D9F8C4">[MONGO-DB]</span>

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

## #6.0 Array Datebase P1

<span style="color:#7FFF00">[PUG]</span> </br>
