import 'express-async-errors'
import { Router } from "express";
import { CriarPessoas } from "../controllers/criarPessoas";
import { BuscarPessoa } from "../controllers/buscarPessoa";
import { BuscarTodasPessoas } from "../controllers/buscarTodasPessoas"
import { DeletarPessoa } from "../controllers/deletarPessoa";
import { AtualizarPessoa } from "../controllers/atualizarPessoa";

const router = Router();

// Transforma as classes em funções.
const criarPessoa = new CriarPessoas();
const buscarUmaPessoa = new BuscarPessoa();
const buscarPessoas = new BuscarTodasPessoas();
const deletarPessoas = new DeletarPessoa();
const atualizarPessoas = new AtualizarPessoa();

// Cria as Rotas.
router.post("/criarpessoas", criarPessoa.handle)
router.get("/buscarpessoa", buscarUmaPessoa.handle)
router.get("/buscarpessoas", buscarPessoas.handle)
router.delete("/deletarpessoa", deletarPessoas.handle)
router.put("/atualizarpessoa", atualizarPessoas.handle)

export { router };