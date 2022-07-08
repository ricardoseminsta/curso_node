import { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {

    let users = await User.findAll();







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
        users
    });
}