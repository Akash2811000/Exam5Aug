import express, { Express, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secreateKey, algorithm } from '../authentication/global_config'

class LoginDomain {
    async login(req: Request, res: Response) {
        let LoginData = {
            username: req.body.username,
            password: req.body.password,
        };

        let token = jwt.sign(LoginData, secreateKey, {
            algorithm: "HS256",
            expiresIn: "1d"
        })

        if (LoginData.username == "Akash" && LoginData.password == "1234") {
            res.status(200).json(
                {
                    message: "Login Successful",
                    Token: token
                }
            );
        }
        else if (LoginData.username == "Akash") {
            res.status(401).json(
                {
                    message: "Invalid Password",
                }
            )
        }
        else {
            res.status(401).json(
                {
                    message: "Can not find user with this username",
                }
            )
        }
    }
}

export { LoginDomain }

