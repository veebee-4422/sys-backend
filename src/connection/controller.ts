import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../utils/customErrors";
import {
	generateGameId,
} from "./service";

export async function getGameId(req: Request, res: Response, next: NextFunction){
	const gameId = generateGameId();

	return res.send({
		data: gameId,
		error: null
	})
}