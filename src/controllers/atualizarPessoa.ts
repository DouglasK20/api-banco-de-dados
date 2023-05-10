import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class atualizarPessoa {
    async handle(req: Request, res: Response) {
        const {id, nome, sobrenome, idade, dataNascimento} = req.body;

        if(id == undefined){res.status(422).json({message: "Está faltando o ID!"})}

        const pessoas = await prismaClient.pessoas.findUnique({
            where: {
                id: id,
            },
        });

        if(!pessoas){res.status(404).json({message: "O ID não foi encontrado!"})}

        const pessoaAtualizada = await prismaClient.pessoas.update({
            data: {
                nome,
                sobrenome,
                idade,
                dataNascimento,
            },
            where: {
                id: id
            }
        })

        return res.json(pessoaAtualizada);
    }
}