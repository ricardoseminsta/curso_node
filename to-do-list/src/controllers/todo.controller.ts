import { Request, Response } from 'express';
import { Todo } from '../models/Todos';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = async (req: Request, res: Response) => {

}

export const add = async (req: Request, res: Response) => {

}

export const update = async (req: Request, res: Response) => {

}

export const remove = async (req: Request, res: Response) => {

}