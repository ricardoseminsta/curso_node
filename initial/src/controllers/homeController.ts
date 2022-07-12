import { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
    
    // build + save
    /*const userC = User.build({
        name: 'Fulano',
        age: 25
    });
    
    //await userC.save();*/

    // create 

    const userC = await User.create({
        name: 'Ciclano',
        age: 40
    });

    
    let lista = Product.getAll();
    let expensivelist = Product.getFromPriceAfter(12);

    let user = {
        name: 'Ricardo',
        age: 25,
        showWelcome: true,
        showOld: true,
        products: lista,
        expensives: expensivelist,
        skills: ['brave', 'mustache', 'faster', 'express']
    }

    user.showOld = user.age > 30 ? true : false;
    res.render('pages/home', {
        user,
        
    });
}