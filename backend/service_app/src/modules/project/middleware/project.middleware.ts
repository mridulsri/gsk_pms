import { Request, Response, NextFunction } from "express";

class ProjectMiddleware {
  async validateRequiredFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (
      req.body &&
      req.body.name &&
      req.body.description &&
      req.body.startDate
    ) {
      next();
    } else {
      res
        .status(400)
        .send({ message: `Required name, description and startDate field` });
    }
  }
}

export default new ProjectMiddleware();
