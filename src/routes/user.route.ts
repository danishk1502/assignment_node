import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/user.controller';
const userRoute: Router = express.Router();

// Define routes
userRoute.get('/:id',async (req : Request, res : Response)=>{res.json(await UserController.findById(req.params.id))});
userRoute.get('/',(req,res)=>{
  res.send('user here ')
})

// route.use('/user', )

// Export the router to be used in the main application file
export default userRoute;
