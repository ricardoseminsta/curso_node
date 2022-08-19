import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const contact = async (req: Request, res: Response) => {

    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "fe03d9e8b2020d",
            pass: "2773b51a6c6812"
        }
    });

    let message = {
        from: 'Ricardo Silva <ricardo@gmail.com>',
        to: 'joana@gmail.com',
        subject: 'Welcome to Ricardo Silva',
        html: 'Welcome to <strong>Ricardo</strong> how are you?',
        text: 'welcome to Ricardo, how are you?'
    };

    let info = await transport.sendMail(message);

    console.log('INFO', info);
    
    res.json({ sucess: true });
}