import { Request, Response, RequestHandler, NextFunction } from "express";
import { getToken } from "../Helpers/authHelper";

export const isRoleUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authData = await getToken(req, res, next);

    req.user = authData;

    next();
  } catch (e) {
    return res
      .status(400)
      .json({ error: true, msg: "Please login again to continue" });
  }
};
