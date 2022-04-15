import { Router } from "express";
import * as videosCtrl from "./videos.controller";
const router = Router();

router.get("/videos", videosCtrl.getVideos);

router.get("/videos/:id", videosCtrl.getVideo);

router.post("/videos", videosCtrl.createVideo);

router.delete("/videos/:id", videosCtrl.deleteVideo);

router.put("/videos/:id", videosCtrl.updateVideo);

export default router;
