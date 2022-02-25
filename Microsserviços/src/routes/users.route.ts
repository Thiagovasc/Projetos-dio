import { Request, Response, NextFunction, Router } from "express";
import { request } from "http";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

const usersRoute = Router();

// Read all
usersRoute.get("/users", async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.searchUsers();
    res.status(StatusCodes.OK).send(users);
});

// Read only
usersRoute.get("/users/:uuid", async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = await userRepository.searchById(uuid);
    res.status(StatusCodes.OK).send({user});
});

// Create 
usersRoute.post("/users", async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.createUser(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
});

// Update
usersRoute.put("users/:uuid", async (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updatedUser = req.body;
    updatedUser.uuid = uuid;

    await userRepository.update(updatedUser);

    res.status(StatusCodes.OK).send(updatedUser);
});

// Delete
usersRoute.delete("users/:uuid", async (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.removeUser(uuid)
    res.status(StatusCodes.OK);
})

export default usersRoute;