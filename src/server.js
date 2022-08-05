import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug"); // express초기 값으로 views폴더의 pug파일을 바라볼 것
app.set("views", process.cwd() + "/src/views"); // pug 저장위치 가르키기
app.use(morgan("dev")); // 로깅을 리턴해주는 morgan 호출
app.use(express.urlencoded({ extended: true })); // express에서 html from 제출 인식

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
