import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
  return res.send("Hello!");
};

function handleLogin(req, res) {
  return res.send("This is Login Screen!");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
// 서버 맨 마지막에 들어가야하는 코드 (GET등을 미리 정의한 후에..)
app.listen(PORT, handleListening);
