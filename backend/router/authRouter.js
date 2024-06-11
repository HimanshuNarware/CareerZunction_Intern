import express from 'express';
import { login, logout, signup , getMe} from '../controller/authController.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get('/me', protectRoute, getMe);


export default router;