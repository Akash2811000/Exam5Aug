import express, { Express, Request, Response } from 'express';

import { LoginDomain } from '../domain/login_domain';

var router = express.Router();

class LoginController {
    static async login(req: Request, res: Response) {
     const userDomain: LoginDomain = new LoginDomain();
        await userDomain.login(req, res);
    }

}



router.post("/", LoginController.login);


export { router };