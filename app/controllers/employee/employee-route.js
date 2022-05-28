import { login, getAllUsers } from "./login.controller.js";
import express from "express";

export const employeeRouter = new express.Router();
employeeRouter.get("/allUsers", getAllUsers).post("/login", login);

export default employeeRouter;
