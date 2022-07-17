import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let ricardo = await User.findOne({ email: 'ricardo@gmail.com'});
    if(ricardo) {
    ricardo.name.lastName = 'Ferreira';
    ricardo.age = 35;
    await ricardo.save();
    }

    let users = await User.find({}).sort({"name.firstName": 1});

    res.render('pages/home', {
        users
    });
};