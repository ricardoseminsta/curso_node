import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Home do painel");
});

router.get('/contato', (req: Request, res: Response) => {
    res.send("Lista de noticias");
});


export default router;