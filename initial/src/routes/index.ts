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


export default router;