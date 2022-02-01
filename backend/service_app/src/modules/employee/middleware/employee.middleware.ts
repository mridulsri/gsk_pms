import { Request, Response, NextFunction } from "express";

class UsersMiddleware {
  async validateRequiredFields(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (req.body && req.body.id && req.body.name) {
      next();
    } else {
      res.status(400).send({ message: `Required id and name field` });
    }
  }
}

export default new UsersMiddleware();
