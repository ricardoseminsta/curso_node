import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

    let newUser = await User.create({
        name: { firstName: "Vick", lastName: "Fernandes"},
        email: "vick@gmail.com",
        age: 3,
        interests: ["eat", "care", "sleep"]
    });

    console.log('NOVO USUER', newUser);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};