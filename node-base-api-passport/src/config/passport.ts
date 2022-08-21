import passport from "passport";
import { BasicStrategy } from "passport-http";
import { User } from "../models/User"
// Strategy configuration
const notAuthorizedJson = { status: 401, message: 'Not authorized' };

passport.use(new BasicStrategy(async (email, password, done) => {
    if(email && password) { 
        const user = await User.findOne({
            where: { email, password}
        });
    } else {
        return done(notAuthorizedJson, false);
    }
    
}));

export default passport;