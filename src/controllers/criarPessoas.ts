import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class criarPessoas {
    async handle(req: Request, res: Response) {
        const {nome, sobrenome, idade, dataNascimento} = req.body;

        console.log(nome, sobrenome, idade, dataNascimento)
        if ( typeof nome != "string" || typeof sobrenome != "string" || typeof idade != "number" || typeof dataNascimento != "string") {
            res.status(400).json({message: "Tipo dos dados inválidos"}) 
            }

        const pessoas = await prismaClient.pessoas.create({
            data: {
                nome,
                sobrenome,
                idade,
                dataNascimento,
            }
        })

        return res.json(pessoas);
    }
}