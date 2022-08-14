import { Request, Response, NextFunction } from "express";

export const Auth  = {
    private: (req: Request, res: Response, next: NextFunction) => {
        //fazer verificação de auth
        let success = false;

        if(success) {
            next();
        } else {
            res.status(403); //Not authorized
            res.json({ error: "Not authorized" });
        }

    }
}