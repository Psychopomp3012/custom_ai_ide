import Fastify from 'fastify';
import cors from '@fastify/cors';

// Routes Import
import readCurrentDirectory from './routes/explorer.js';

const app = Fastify({
    logger: true
});

app.register(cors, {
    origin: true
})

// Routes
app.register(readCurrentDirectory);

const start = async () => {
    try {
        await app.listen({
            port: 8001
        })
        console.log("Server started on Port: 8001");
    } catch (error) {
        app.log.error(error);
        console.log("Server start Failed");
        process.exit(1);
    }
}

start();