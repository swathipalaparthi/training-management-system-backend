import { login, getAllUsers, signUp } from "./login.controller.js";
import express from "express";

export const employeeRouter = new express.Router();
employeeRouter
  .get("/allUsers", getAllUsers)
  .post("/login", login)
  .post("/sign-up", signUp);

export default employeeRouter;
