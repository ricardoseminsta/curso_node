import * as UserService from './UserService';
import { User , UserInstance} from '../models/User';

describe('Testing UserService', () => {

    let email: string = 'email@example.com';
    let password: string = 'password123456';

    beforeAll(async () => {
        await User.sync({ force: true });
    });

    it('should create a new user', async () => {
        const newUser = await UserService.createUser(email, password) as UserInstance;
        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('should not allow to create a user with existing email', async () => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).toBeInstanceOf(Error);
    });

    it('should find a user by email', async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        expect(user.email).toBe(email);
    });

    it('should match password from databases', async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = UserService.matchPassword(password, user.password);
        expect(match).toBeTruthy();
    });

    it('should not match password from databases', async () => {
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = UserService.matchPassword('invalid', user.password);
        expect(match).toBeFalsy();
    });

    it('should get a list of users', async () => {
        const users = await UserService.all();
        expect(users.length).toBeGreaterThanOrEqual(1);
        for(let i in users) {
            expect(users[i]).toBeInstanceOf(User);
        }
    });
});