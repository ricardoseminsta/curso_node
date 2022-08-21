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
        from: 'no-reply@gmail.com',
        to: req.body.to,
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    };

    let info = await transport.sendMail(message);

    console.log('INFO', info);
    
    res.json({ sucess: true });
}