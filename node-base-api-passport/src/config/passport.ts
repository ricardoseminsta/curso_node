import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { BasicStrategy } from "passport-http";
import { User } from "../models/User"
// Strategy configuration
const notAuthorizedJson = { status: 401, message: 'Not authorized' };

passport.use(new BasicStrategy(async (email, password, done) => {
    if(email && password) { 
        const user = await User.findOne({
            where: { email, password }
        });
        if(user) {
            return done(null, user);
        }
    } 
        return done(notAuthorizedJson, false);
    
}));

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('basic', (err, user) => {
        req.user = user;
        return user ? next() : next(notAuthorizedJson);
    })(req, res, next);
};

export default passport;