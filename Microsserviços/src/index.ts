import express, {Request, Response, NextFunction} from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

// Config. da aplicação 
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// Config. das rotas
app.use(usersRoute);

// Config. rota de status
app.use(statusRoute);

// Inicialização do servidor na porta determinada
app.listen(3000, () => {
    console.log("Aplicação online na porta 3000");
});