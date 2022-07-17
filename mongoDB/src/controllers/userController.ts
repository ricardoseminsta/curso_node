import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let newUser = new User();
    newUser.name = {firstName: req.body.firstName, lastName: req.body.lastName}
    newUser.email = req.body.email;
    newUser.age = parseInt(req.body.age);
    newUser.interests = req.body.interests.split(',');
    if(newUser.name.firstName && newUser.email && newUser.name.lastName && newUser.age && newUser.interests) {
        try {
            let result = await newUser.save();
            console.log("Usuario inserdo com sucesso!");
            console.log("Usuario ", result);
            
        } catch (error) {
            console.log("erro ao insrerir Usuario ", error);      
        }
} else {
    console.log("Preencha todos os campos");
    
}
    res.redirect('/')
};