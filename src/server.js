import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

// 서버가 만들어지고, 포트 4000을 listen하고 있음
app.listen(PORT, handleListening);
