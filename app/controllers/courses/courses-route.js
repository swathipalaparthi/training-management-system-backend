import express from "express";
import { getAllCourses, getAssignedCourses } from "./courses-controller.js";

export const coursesRouter = new express.Router();

coursesRouter
  .get("/all", getAllCourses)
  .get("/assigned/:empId", getAssignedCourses);
