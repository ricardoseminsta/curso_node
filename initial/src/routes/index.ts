import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let user = {
        name: 'Ricardo',
        age: 25,
        showWelcome: true,
        showOld: true,
        products: [
            {title:'Produto X', price:10},
            {title:'Produto Y', price:20},
            {title:'Produto Z', price:22}
        ],
        skills: ['brave', 'mustache', 'faster', 'express']
    }

    user.showOld = user.age > 30 ? true : false;

    res.render('pages/home', {
        user
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre')
});

router.get('/nome', (req: Request, res: Response) => {
    
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;
    
    res.render('pages/nome', {
        nome,
        idade
    })
});

router.get('/idade', (req: Request, res: Response) => {
    res.render('pages/idade');
});

router.post('/idade-resultado', (req: Request, res: Response) => {
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
})



export default router;