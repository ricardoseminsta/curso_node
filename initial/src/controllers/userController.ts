import { Response, Request } from "express";

export const name = (req: Request, res: Response) => {
    
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;
    
    res.render('pages/nome', {
        nome,
        idade
    })
}

export const age = (req: Request, res: Response) => {
    res.render('pages/idade');
}

export const ageResult = (req: Request, res: Response) => {
    let idade: number = 0;
    let mostrarIdade: boolean = false;

    if (req.body.ano) {
        let ano: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual -  ano;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
}