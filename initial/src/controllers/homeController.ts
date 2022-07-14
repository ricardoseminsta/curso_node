import { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";
import { log } from "console";


export const home = async (req: Request, res: Response) => {
    
    const [userFOC, created] = await User.findOrCreate({
        where: { name: "Mingau" },
        defaults: {
            age: 7
        }
    });

    console.log("USUARIO", userFOC);
    console.log("CREATED", created);
    
    


    let lista = Product.getAll();
    let expensivelist = Product.getFromPriceAfter(12);

    let users = await User.findAll();

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

export const newUser = async (req: Request, res: Response) => {
    
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

    let name: string = req.body.name;
    let age: number = parseInt(req.body.age);
    
    if(name){
        const userNew = User.build({ name })
        if(age) {
            userNew.age = age; 
        }
    await userNew.save();
    }

   res.redirect('/');
   }