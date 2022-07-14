import { Response, Request } from "express";
import { User } from "../models/User";

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

export const addIdade = async (req: Request, res: Response) => {
    let id = req.params.id;
    let results = await User.findAll({ where: { id } });
    if(results.length > 0) {
        let usuario = results[0];
        usuario.age++;
        await usuario.save();
    }
    res.redirect('/');
}
export const diminuirIdade = async (req: Request, res: Response) => {
    let id = req.params.id;
    let results = await User.findAll({ where: { id } });
    if(results.length > 0) {
        let usuario = results[0];
        usuario.age--;
        await usuario.save();
    }
    res.redirect('/');
}
export const excluir = async (req: Request, res: Response) => {
    let id = req.params.id;
    await User.destroy({ where: { id } });
    res.redirect('/');
}