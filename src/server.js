import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000; // 백엔드 관습 포트 4000

const handleHome = (req, res) => {
  // 사실 arrow func는 return을 내장하고있음
  return res.send("This is handleHome!");
};

// app 호출 구간
app.use(morgan("dev")); // 로깅을 리턴해주는 morgan 호출
app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
// 서버 맨 마지막에 들어가야하는 코드 (GET등을 미리 정의한 후에..)
app.listen(PORT, handleListening);
