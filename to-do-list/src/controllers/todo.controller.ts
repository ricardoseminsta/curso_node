import { Request, Response } from 'express';
import { Todo } from '../models/Todos';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = async (req: Request, res: Response) => {
    let list = await Todo.findAll();
    res.json({list});
}

export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTask = await Todo.create({ 
            title: req.body.title,
            done: req.body.done ? true : false
        });
        res.status(201).json({ item: newTask });

    } else {
        res.json({ error: "Data not send" })
    }
} 

export const update = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if(todo) {
        if(req.body.title) {
            todo.title = req.body.title;
        }
        if(req.body.done) {
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    todo.done = true;
                    break
                case 'false':
                case '0':
                    todo.done = false;
                    break
            }
        }
        await todo.save();
        res.json({ item: todo })
    } else {
        res.json({error: "Item Not Found"});
    }
}

export const remove = async (req: Request, res: Response) => {
    let id = req.params.id;
    let todo  = await Todo.findByPk(id);
    if(todo) {
        await todo.destroy();
    }
    res.json({});
}