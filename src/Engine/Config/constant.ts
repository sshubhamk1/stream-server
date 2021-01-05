import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname + "../../../../.env") });

export const config = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "iamshubham",
  JWT_TOKEN_EXPIRY_IN_HRS: process.env.JWT_TOKEN_EXPIRY_IN_HRS || "1",
  HOST: process.env.HOST || "localhost",
  ENV: process.env.ENV || "ts",
};
