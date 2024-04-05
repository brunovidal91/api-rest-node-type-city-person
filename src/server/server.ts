import express, { Request, Response } from 'express';

const server = express();
const port = 3333


server.get('/', (req: Request, res: Response) => {
    return res.send("Teste")
})



export { server };