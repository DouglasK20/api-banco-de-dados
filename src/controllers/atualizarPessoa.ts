import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { NotFoundError, UnprocessableEntityError } from '../helpers/api-erros';

export class AtualizarPessoa {
    // O "async" serve para dar um retorno por baixo dos panos.
    async handle(req: Request, res: Response) {
        const {id, nome, sobrenome, idade, dataNascimento} = req.body;

        // Verifica se o ID foi inserido, se não informa uma mensagem de erro.
        if(id == undefined){
            throw new UnprocessableEntityError("Está faltando o ID!")}

        // O "await" aguarda o "handle" finalizar e após isso confere se o ID existe.
        const pessoas = await prismaClient.pessoas.findUnique({
            where: {
                id: id,
            },
        });

        // Após a conferencia, se o ID não existe, informa uma mensagem de erro.
        if(!pessoas){
            throw new NotFoundError("O ID não foi encontrado!")}

        // Faz a alteração de algum item do ID correspondente
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
        
        // Retorna a lista já atualizada
        return res.json(pessoaAtualizada);
    }
}