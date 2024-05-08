import express from "express"
import { signup, login ,logout} from '../controllers/auth.controller.js'

const router = express.Router();
// router.get('/signup',(req,res)=>{
//     res.json({
//         data: "You hit the signup hitPoint",
//     });
// })
router.get("/signup" ,  signup);
router.get("/login" ,  login);
router.get("/logout" ,  logout);

export default router;