// require("dotenv").config();
import express from 'express';
const app = express();
import route from './src/routes/route';
import { Mongoose } from "mongoose";

app.use(express.json());

// Defining routes
app.use("/api", route);

//server Port setup
app.listen(3001, () => {
  console.log("app listen at port :" + 3001);
});