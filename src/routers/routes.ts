import { Router } from "express";
import { criarPessoas } from "../controllers/criarPessoas";
import { buscarPessoa } from "../controllers/buscarPessoa";
import { buscarTodasPessoas } from "../controllers/buscarTodasPessoas"
import { deletarPessoa } from "../controllers/deletarPessoa";
import { atualizarPessoa } from "../controllers/atualizarPessoa";

const router = Router();

const criarPessoa = new criarPessoas();
const buscarUmaPessoa = new buscarPessoa();
const buscarPessoas = new buscarTodasPessoas();
const deletarPessoas = new deletarPessoa();
const atualizarPessoas = new atualizarPessoa();

router.post("/criarpessoas", criarPessoa.handle)
router.get("/buscarpessoa", buscarUmaPessoa.handle)
router.get("/buscarpessoas", buscarPessoas.handle)
router.delete("/deletarpessoa", deletarPessoas.handle)
router.put("/atualizarpessoa", atualizarPessoas.handle)

export { router };