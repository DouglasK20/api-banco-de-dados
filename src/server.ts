import express from "express";
import { router } from "./routers/routes";

const app = express();

app.use(express.json());
app.use(router);

// Informa se o servidor está rodando.
app.listen(8080, () => {console.log("Server is running on PORT 8080")});