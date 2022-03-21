import { Router, Request, Response, NextFunction } from "express";
import { buffer } from "stream/consumers";
import forbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post("/token", (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.header("authorization");

    try {
        if(!authorizationHeader) throw new forbiddenError("Credencial não informada");

        const [authType, token] = authorizationHeader.split(' ');
        
        if(authorizationHeader != "Basic" || !token){
            throw new forbiddenError("Tipo de autenticação inválida");
        }

        const tokenContent = Buffer.from(token, "base64").toString("utf-8");

        const [username, password] = tokenContent.split(":");
        if (!username || !password) throw new forbiddenError("Credenciais nãos preenchidas");


    } catch(error) {
        next(error);
    }


});

export default authorizationRoute;