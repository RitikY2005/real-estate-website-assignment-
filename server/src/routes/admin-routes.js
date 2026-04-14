import { Router } from "express";
import { login, updateContent,logout } from "../controllers/admin-controller.js";
import { isLoggedIn } from "../middlewares/auth-middlware.js";

const router=Router();

router.post('/login',login);
router.post('/logout',logout);
router.put('/content',isLoggedIn,updateContent);


export default router;