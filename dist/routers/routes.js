"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var criarPessoas_1 = require("../controllers/criarPessoas");
var router = (0, express_1.Router)();
exports.router = router;
var criarPessoa = new criarPessoas_1.criarPessoas();
router.post("/criarpessoas", criarPessoa.handle);
//# sourceMappingURL=routes.js.map