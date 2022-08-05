import jwt from 'jsonwebtoken';
import { secreateKey } from './global_config'

function verifyUserWithToken(req: any, res: any, next: Function) {

    
    var token = req.headers["token"];
    
    jwt.verify(
        token,
        secreateKey,
        {
            algorithms: ["HS256"]
        },
        function (err
            , decoded) {
            if (err) {
                let errordata = {
                    message: err.message
                };
                console.log(errordata);
                return res.status(401).json({
                    message: "Unauthorized Access",
                });
            }
            decoded = req.decoded;
            next();
        }
    );
}

export { verifyUserWithToken }

