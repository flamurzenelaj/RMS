import express from "express";
import user from "../Controllers/user.js";
// import checkIfAuthenticated from "../middlewares/checkIfAuthenticated"

const userRouter = express.Router();
// userRouter.use(checkIfAuthenticated);

userRouter.post('/register',user.register ); 
userRouter.post('/msg',user.addmsg ); 

export default userRouter; 