import express, { Router } from "express";
import AuthRouter from "./auth/AuthRouter";
import GuildsRouter from "./guilds/GuildsRouter";
import GuildRouter from "./guilds/GuildRouter";

export default class MainRouter {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.use("/auth", AuthRouter);
        this.router.use("/guilds", GuildsRouter);
        this.router.use("/guild", GuildRouter);
    }
}

