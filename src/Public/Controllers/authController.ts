import { Request, Response, RequestHandler } from "express";
import { Users, UsersAttributes } from "../../Engine/Models/users";
import { v4 as uuidv4 } from "uuid";
import bcrpyt from "bcryptjs";
import { generateToken } from "../../Engine/Helpers/authHelper";

export const postSignIn: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });

    if (!user) throw "Invalid credentials";

    const isMatch: Boolean = await bcrpyt.compare(password, user.password);

    if (!isMatch) throw "Invalid credentials";

    const auth_token: any = await generateToken({
      id: user.guid,
      first_name: user.first_name,
    });

    return res.status(200).json({ error: false, auth_token });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};

// signup controller
export const postSignup: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const userData: UsersAttributes = {
      first_name,
      last_name,
      email,
      password: await bcrpyt.hash(password, 10),
      guid: uuidv4(),
    };

    const user = await Users.create(userData);

    const user_data: UsersAttributes = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: password,
      guid: user.guid,
    };

    return res.status(200).json({ error: false, user_data });
  } catch (e) {
    return res.status(400).json({ error: true, msg: String(e) });
  }
};
