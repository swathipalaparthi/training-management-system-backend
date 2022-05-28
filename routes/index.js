import express from "express";
import { coursesRouter } from "../app/controllers/courses/courses-route.js";
import employeeRouter from "../app/controllers/employee/employee-route.js";
import eventsRouter from "../app/controllers/events/events-route.js";

export const route = new express.Router();

// ------------------------------ LOGIN
route.use("/employee", employeeRouter);
route.use("/events", eventsRouter);
route.use("/courses", coursesRouter);
