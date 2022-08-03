import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000; // 백엔드 관습 포트 4000

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
// 서버 맨 마지막에 들어가야하는 코드 (GET등을 미리 정의한 후에..)
app.listen(PORT, handleListening);
