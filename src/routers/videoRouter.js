import express from "express";
import { edit, deleteVideo, upload, see } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", deleteVideo);
videoRouter.get("/upload", upload); // id는 숫자만 인식하므로 upload는 밑으로와도 무방

export default videoRouter;
