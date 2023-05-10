"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routers/routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(3306, function () { return console.log("Server is running on PORT 3306"); });
//# sourceMappingURL=server.js.map