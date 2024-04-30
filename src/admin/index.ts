import { Router } from "express";
import AdminController from "./controller";

export default function adminRoutes(){
    const router = Router();

    const controller = new AdminController();

    return router;
};