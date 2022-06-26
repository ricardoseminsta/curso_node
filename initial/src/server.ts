import express, { Request, Response } from "express";
import path from "path";
import mustache from "mustache-express";
import mainRoutes from './routes/index';
import panelRoutes from './routes/panel';


const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache()); 

server.use('/static', express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes); 
server.use('/panel', panelRoutes);
server.use((req: Request, res: Response) => {
    res.status(404).send("Page not found");
});


server.listen(3000);