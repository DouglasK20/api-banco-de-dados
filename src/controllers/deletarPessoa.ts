import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class deletarPessoa {
    async handle(req: Request, res: Response) {
        const {id} = req.body;
        
        if(id == undefined){res.status(422).json({message: "Está faltando o ID!"})}
        const pessoas = await prismaClient.pessoas.delete({
            where: {
                id: id
            }
        })
        console.log(pessoas)

        return res.json(pessoas);
    }
}