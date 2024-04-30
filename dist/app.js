"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
const corsFix_1 = require("./middleware/corsFix");
const crons_1 = __importDefault(require("./crons"));
(0, dotenv_1.config)();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(corsFix_1.corsFix);
app.use(routes_1.default);
const server = app.listen(port || 3000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server listening at port ${port}`);
    yield (0, crons_1.default)();
}));
// server.keepAliveTimeout = 1000 * 60;
server.headersTimeout = 1000 * 65;
