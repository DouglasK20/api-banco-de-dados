import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class buscarPessoa {
    async handle(req: Request, res: Response) {
        const {id} = req.body;
        
        // Verifica se o ID foi inserido, se não informa uma mensagem de erro.
        if(id == undefined){res.status(422).json({message: "Está faltando o ID!"})}
        
        // Faz a comparação do ID informado com o que existe na tabela.
        const pessoas = await prismaClient.pessoas.findMany({
            where: {
                id: id
            }
        })

        // Se o ID inserido não é igual a nenhum ID dentro da tabela, retorna uma mensagem de erro.
        if(pessoas.length == 0){res.status(404).json({message: "O ID não foi encontrado!"})}

        // Se o ID confere, retorna as informações correspondentes com aquele ID dentro da tabela.
        return res.json(pessoas);
    }
}