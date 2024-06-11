import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
// import { getUserforNavbar } from '../controller/userController.js';
import { getUserProfile, updateUserProfile } from '../controller/userController.js';

const router = express.Router();

// router.get("/", protectRoute, getUserforNavbar);

router.route('/profile')
    .get(protectRoute, getUserProfile)
    .put(protectRoute, updateUserProfile);


export default router;