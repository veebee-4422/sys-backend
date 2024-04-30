import { Server, Socket } from "socket.io";
import { PlayerJoinerPayload } from "./payloadTypes";

function playerJoined(payload: PlayerJoinerPayload) {

}

export default function registerGameHandlers(io: Server, socket: Socket) {

    socket.on("PLAYER_JOINED", playerJoined);
}