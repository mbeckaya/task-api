import { Request, Response, NextFunction } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).send({ message: "Invalid id" });
  }

  res.locals.id = id;
  next();
};