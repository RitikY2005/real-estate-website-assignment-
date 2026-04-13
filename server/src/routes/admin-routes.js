import { Router } from "express";
import { login, updateContent } from "../controllers/admin-controller.js";
import { isLoggedIn } from "../middlewares/auth-middlware.js";

const router=Router();

router.post('/login',login);

router.put('/content',isLoggedIn,updateContent);


export default router;