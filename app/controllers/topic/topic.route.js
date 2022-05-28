import express from "express";
import { getTopics } from "./topic.controller.js";

export const topicRouter = new express.Router();

topicRouter.get("/:courseId", getTopics);

export default topicRouter;
