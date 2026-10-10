import type { FastifyInstance } from "fastify";

export default async function testRoutes(app: FastifyInstance) {
    app.get('/api/test', async (request, response) => {
        return "Hello World";
    });
}