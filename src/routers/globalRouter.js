import express from "express";
// 각각의 export된 변수를 불러올때는 { object } 식으로 불러옴
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
