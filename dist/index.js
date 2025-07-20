"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get("/", async (request, reply) => {
    return { message: "Hola mundo desde Fastify + TypeScript 🚀" };
});
const start = async () => {
    try {
        await server.listen({
            port: parseInt(process.env.PORT || "3000"),
            host: "0.0.0.0",
        });
        console.log("Servidor corriendo en http://localhost:3000");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();
