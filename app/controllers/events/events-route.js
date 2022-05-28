import express from "express";
import { getEvents } from "./events.controller.js";

export const eventsRouter = new express.Router();
eventsRouter.get("/", getEvents);

export default eventsRouter;
