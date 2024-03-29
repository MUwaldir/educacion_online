import { Router } from "express";
import loginController from "../controllers/login.controller.js";
import registerController from "../controllers/register.controller.js";
import getUsersController from "../controllers/getUsers.controller.js";

const router = Router()

router.post('/login',loginController )
router.post('/register', registerController)


router.get('/users', getUsersController)


export default router;