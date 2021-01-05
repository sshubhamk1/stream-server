import { NextFunction, RequestHandler, Request, Response } from "express";
import JWT from "jsonwebtoken";
import { config } from "../Config/constant";

export const generateToken = async (payload: any) => {
  return JWT.sign(payload, `${config.JWT_SECRET_KEY}`, {
    expiresIn: `${config.JWT_TOKEN_EXPIRY_IN_HRS}h`,
  });
};

export const getToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth_token = req.header("Authorization");

    if (!auth_token) {
      throw "Please provide a token";
    }

    const verifiedToken = JWT.verify(auth_token, `${config.JWT_SECRET_KEY}`);

    return verifiedToken;
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};
