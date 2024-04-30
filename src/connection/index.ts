import { Router } from "express";
import {
    getGameId
} from "./controller";

export default function connectionRoutes(){
    const router = Router();

    router.get("/get-game-id", getGameId);

    return router;
};