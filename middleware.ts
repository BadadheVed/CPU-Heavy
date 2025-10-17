import { Request, Response, NextFunction } from "express";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const time = Date.now();
  next();
  console.log(
    `CPU Intensive Task Completed time taken by it is ${Date.now() - time} ms`
  );
}
