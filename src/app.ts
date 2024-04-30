import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { config as dotenvConfig } from "dotenv";

import routes from "./routes";
import { corsFix } from "./middleware/corsFix";
import cronScheduler from "./crons";
import registerGameHandlers from "./socketHandlers/gameHandlers";

dotenvConfig();

const port = process.env.PORT;
const nodeEnv = process.env.NODE_ENV;

const app = express();
const server = createServer(app);

const io = new Server(server, {
	cors: {
		origin: nodeEnv === "PRODUCTION" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
	}
})

const onConnection = (socket: Socket) => {
	registerGameHandlers(io, socket);
}

io.on("connection", onConnection);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(corsFix);

app.use(routes);

server.listen(port || 3000, async () => {
	console.log(`Server listening at port ${port}`);
	await cronScheduler();
});