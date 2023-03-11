import { Router } from "express";

export const boardsRouter = Router();

boardsRouter.get("/", (req, res) => {
  res.json([]);
});
