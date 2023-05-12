import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { UnprocessableEntityError } from '../helpers/api-erros';

export class DeletarPessoa {
    async handle(req: Request, res: Response) {
        const {id} = req.body;
        
        // Verifica se o ID foi inserido, se não informa uma mensagem de erro.
        if(id == undefined)
            {throw new UnprocessableEntityError("Está faltando o ID!")}

        // Faz a comparação do ID informado com o que existe na tabela, se sim exclui a pessoa da tabela.
        const pessoas = await prismaClient.pessoas.delete({
            where: {
                id: id
            }
        })

        // Retorna a pessoa que foi excluida da tabela.
        return res.json(pessoas);
    }
}