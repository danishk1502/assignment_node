import express, { Router, Request, Response } from 'express';
import userRoute from './user.route';

// Create a new Router instance
const route: Router = express.Router();

// Define routes
route.get('/', (req: Request, res: Response) => {
  res.send('Application is running Successfully');
});

route.use('/user', userRoute)

// Export the router to be used in the main application file
export default route;
