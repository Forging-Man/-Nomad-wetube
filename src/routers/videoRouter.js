import express from "express";
import {
  getEdit,
  deleteVideo,
  upload,
  watch,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

// 추가 연습 get, post
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
