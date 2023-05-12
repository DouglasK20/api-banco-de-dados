
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { NotFoundError } from "../helpers/api-erros";

export class BuscarTodasPessoas {
    async handle(req: Request, res: Response) {

        // Procura toda as pessoas que existe na tabela.
        const pessoas = await prismaClient.pessoas.findMany();
        
        // Se não encontrar nada na tabela, informa uma mensagem de erro.
        if(pessoas.length == 0){
            throw new NotFoundError("Nenhuma pessoa encontrada!")}

        // Retorna todas as pessoas encontrada.
        return res.json(pessoas);
    }
}

