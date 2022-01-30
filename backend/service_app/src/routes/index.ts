import { Router, Request, Response } from "express";

const router = Router();

// default route
router.use("/", (req: Request, res: Response) => {
  res.send("Service-app is up and running...!");
});

export default router;
