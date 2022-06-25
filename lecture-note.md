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

<span style="color:#FF7F50">[Node-JS]</span> </br>
