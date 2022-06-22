import express, { Request, Response } from "express";

import mainRoutes from './routes/index';
import panelRoutes from './routes/panel';


const server = express();

server.use(mainRoutes); 
server.use('/panel', panelRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send("Page not found");
});


server.listen(3000);