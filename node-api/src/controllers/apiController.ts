import { Request, Response} from "express";
import { Phrase } from "../models/Phrase";
import { Sequelize } from "sequelize";
import sharp from "sharp";

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number: nRand});
}

export const name = (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({name: `O nome enviado é ${name}`});
}

export const createPhrase = async (req: Request, res: Response) => {   
    let author: string = req.body.author;
    let txt: string = req.body.txt;
    
    res.status(201); //criado com sucesso
    let newPhrase = await Phrase.create({ author, txt });
    res.json({id: newPhrase.id, author, txt});
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json({ list });
}

export const getPhrase = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        res.json({ phrase });
    } else {
        res.json({ error: 'Phrase not found' });
    }
    
}

export const updatePhrase = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    let author: string = req.body.author;
    let txt: string = req.body.txt;

    let phrase = await Phrase.findByPk(id);

    if(phrase){
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();
        res.json({ phrase });
    } else {
        res.json({ error: 'Phrase not found' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    await Phrase.destroy({ where: { id } });
    res.json({});
}

export const randomPhrase = async (req: Request, res: Response) => {
let phrase = await Phrase.findOne({
    order: [
        Sequelize.fn('RANDOM') // No Mysql é RAND
    ]
});
    if(phrase){
        res.json({ phrase });
    } else {
        res.json({ error: 'Phrase not found' });
    }
}

export const uploadFile = async (req: Request, res: Response) => {
    if(req.file) {
        await sharp(req.file.path)
            .resize(300, 300, {
                fit: sharp.fit.cover,
                position: 'bottom'
            })
            .toFormat('jpeg')
            .toFile(`./public/media/${req.file.filename}.jpg`);

        res.json({image: `${req.file.filename}.jpg`});
    } else {
        res.status(400)
        res.json({ error: 'invalid file' });
    }
}