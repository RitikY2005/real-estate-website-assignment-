import { Router } from "express";
import { getWebsiteContent } from "../controllers/website-controller.js";

const router=Router();

router.get('/',getWebsiteContent);

export default router;