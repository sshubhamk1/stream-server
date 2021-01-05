import { Request, Response, RequestHandler } from "express";
import { Users } from "../../Engine/Models/users";

// get all user page
export const getAllUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await Users.findAll({
      attributes: ["first_name", "last_name", "email", ["guid", "id"]],
    });

    return res
      .status(200)
      .json({
        error: false,
        data: { current_users: req.user, all_user: users },
      });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};
