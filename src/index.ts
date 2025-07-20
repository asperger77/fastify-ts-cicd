import Fastify from "fastify";

const server = Fastify();

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
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
