
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class buscarTodasPessoas {
    async handle(req: Request, res: Response) {

        const pessoas = await prismaClient.pessoas.findMany();
        
        if(pessoas.length == 0){res.status(404).json({message: "Nenhuma pessoa encontrada!"})}

        return res.json(pessoas);
    }
}

