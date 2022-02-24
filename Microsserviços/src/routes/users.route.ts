import { Request, Response, NextFunction, Router } from "express";
import { request } from "http";

const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{name: "Thiago"}];
    res.status(200).send(users);
});

usersRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({uuid});
});

export default usersRoute;