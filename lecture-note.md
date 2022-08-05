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

## #6.23 Middlewareㄴ

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

<span style="color:#D9F8C4">[MONGOOSE]</span> DB 찾아서 delete 하기 </br>

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

## #7.12

<span style="color:#D9F8C4">[MONGOOSE]</span> </br>
