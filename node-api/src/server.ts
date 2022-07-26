import express, { Request , Response, ErrorRequestHandler } from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";
import { MulterError } from "multer";
import cors from "cors"

dotenv.config();

const server = express();

server.use(cors({
    origin: '*'
}));

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: "Endpoint not found" })
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    if(err instanceof MulterError) {
        res.json({ error: err.code });
    } else {
        console.log(err);
        res.json({ error: 'an error occurred' });
        
    }

};

server.use(errorHandler);



server.listen(process.env.PORT)