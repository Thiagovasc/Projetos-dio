import { Request, Response, NextFunction, Router } from "express";
import { request } from "http";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();

// Read all
usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{name: "Thiago"}];
    res.status(StatusCodes.OK).send(users);
});

// Read only
usersRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

// Create
usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

// Update
usersRoute.put("users/:uuid", (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updatedUser = req.body;
    updatedUser.uuid = uuid;

    res.status(StatusCodes.OK).send(updatedUser);
});

// Delete
usersRoute.delete("users/:uuid", (req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK);
})

export default usersRoute;