import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Ola! Mundo");
});

router.get('/contato', (req: Request, res: Response) => {
    res.send("Formulario de contato");
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send("Pagina de sobre");
});

router.get('/parana', (req: Request, res: Response) => {
    res.send("Pagina parana");
});

export default router;