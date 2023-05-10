import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class buscarPessoa {
    async handle(req: Request, res: Response) {
        const {id} = req.body;
        
        if(id == undefined){res.status(422).json({message: "Está faltando o ID!"})}
        
        const pessoas = await prismaClient.pessoas.findMany({
            where: {
                id: id
            }
        })

        if(pessoas.length == 0){res.status(404).json({message: "O ID não foi encontrado!"})}

        return res.json(pessoas);
    }
}