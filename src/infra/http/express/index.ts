import { Express }  from "express"
import express, { Request, Response } from 'express'
import { CreateRouteUseCase } from "../../../application/create-rote.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";

const app: Express = express();

app.use(express.json());

const routeRepo = new RouteInMemoryRepository();

const port = process.env.PORT || 3000;


app.post('/routes', async (req: Request, res: Response)=> {
    const createUseCase = new CreateRouteUseCase(routeRepo);

    const outpt = await createUseCase.execute(req.body);
    res.status(201).json(outpt);


    app.listen( port, ()=>{
            console.log('Server running...');
    });


})