import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { BadRequestError } from '../helpers/api-erros';

export class CriarPessoas {
    async handle(req: Request, res: Response) {
        const {nome, sobrenome, idade, dataNascimento} = req.body;

        // Faz a validação se todos os dados foram informados corretamente, se não informa uma mensagem de erro.
        if(typeof nome != "string" || typeof sobrenome != "string" || typeof idade != "number" || typeof dataNascimento != "string") {
            throw new BadRequestError("Tipo dos dados inválidos")}

        // Faz a criação de cada pessoa dentro da tabela.
        const pessoas = await prismaClient.pessoas.create({
            data: {
                nome,
                sobrenome,
                idade,
                dataNascimento,
            }
        })

        // Retorna as informações que você inseriu junto com o ID.
        return res.json(pessoas);
    }
}