import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
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
}