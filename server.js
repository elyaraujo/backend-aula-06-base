import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js"

// Arquivos de rotas
import { openRouter } from "./routes/open_routes.js";
import { protectedRouter } from "./routes/protected_routes.js";

const app = express();
const port = process.env.PORT;

// Middlewares -  FUNÇÕES QUE SÃO EXECUTADAS SEMPRE ANTES DE CHEGAR NO ENDPOINT/ROTA
app.use(express.json());
app.use(cors()); //não façam isso em produção

app.use("/auth", openRouter);
app.use("/dashboard", protectedRouter);

app.use((request, response)=>{
    response.status(404).json({message: "Page not found"});
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
