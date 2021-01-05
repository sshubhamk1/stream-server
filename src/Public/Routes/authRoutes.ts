import { Router } from "express";

// importing all controllers of auths
import * as authController from "../Controllers/authController";

// creating router for auths
const router = Router();

/**
 *
 *  @swagger
 *  definitions:
 *      user_login:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *          example:
 *              email: sshubhamk1@hotmail.com
 *              password: shubham
 *      user_data:
 *          type: object
 *          required:
 *              - first_name
 *              - last_name
 *              - email
 *              - password
 *          properties:
 *              first_name:
 *                  type: string
 *              last_name:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *          example:
 *              first_name: shubham
 *              last_name: kumar
 *              email: sshubhamk1@hotmail.com
 *              password: shubham
 */

// giving routing path for different controllers
/**
 *  @swagger
 *  /api/public/auth/signin:
 *  post:
 *      tags:
 *          - Public
 *      summary: Login
 *      description: login to the system.
 *      parameters:
 *          - in: body
 *            name: user_login
 *            schema:
 *              $ref: '#/definitions/user_login'
 *      responses:
 *          '200':
 *              description: Successful
 *          '400':
 *              description: Failed
 */
router.route("/signin").post(authController.postSignIn);

/**
 *  @swagger
 *  /api/public/auth/signup:
 *  post:
 *      tags:
 *          - Public
 *      summary: Signup
 *      description: sign up to the system.
 *      parameters:
 *          - in: body
 *            name: user_data
 *            schema:
 *              $ref: '#/definitions/user_data'
 *      responses:
 *          '200':
 *              description: Successful
 *          '400':
 *              description: Failed
 */

router.route("/signup").post(authController.postSignup);

export default router;
