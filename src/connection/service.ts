import { v4 as uuid } from "uuid";

export function generateGameId(){
    const gameId = (uuid()).split("-")[0];
    return gameId;        
}