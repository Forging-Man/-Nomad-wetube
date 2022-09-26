import express from "express";
import { registerView, createComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:od:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:od:id([0-9a-f]{24})/comment", createComment);

export default apiRouter;
