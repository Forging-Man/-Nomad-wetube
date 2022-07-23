import "./db";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 4000; // 백엔드 관습 포트 4000

app.set("view engine", "pug"); // express초기 값으로 views폴더의 pug파일을 바라볼 것
app.set("views", process.cwd() + "/src/views"); // pug 저장위치 가르키기
app.use(morgan("dev")); // 로깅을 리턴해주는 morgan 호출
app.use(express.urlencoded({ extended: true })); // express에서 html from 제출 인식
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
// 서버 맨 마지막에 들어가야하는 코드 (GET등을 미리 정의한 후에..)
app.listen(PORT, handleListening);
