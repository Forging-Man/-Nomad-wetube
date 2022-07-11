import express from "express";
import { edit, deleteVideo, upload, see } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/remove", deleteVideo);
videoRouter.get("/:id", see);

export default videoRouter;
