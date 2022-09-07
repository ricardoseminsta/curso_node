import { Math } from './Math';

describe('testing math library', () => {

    it('should calculate sum two numbers correctly', () => {
        const response = Math.sum(1, 2);
        expect(response).toBe(3);
    });
    it('should calculate sub two numbers correctly', () => {
        const response = Math.sub(1, 2);
        expect(response).toBe(-1);
    });
    it('should calculate division two numbers correctly', () => {
        const response = Math.div(4, 2);
        expect(response).toBe(2);
    
        const response2 = Math.div(3, 0);
        expect(response2).toBe(false);
    });
    it('should calculate multiplication two numbers correctly', () => {
        const response = Math.mult(3, 5);
        expect(response).toBe(15);
    
        const response2 = Math.mult(0, 5);
        expect(response2).toBe(0);
    });

    it('count string length', () => {
        const response = 'Ricardo';
        expect(response).toHaveLength(7);
    });

    it.only('has email property', () => {
        const response = {
            name: 'John',
            email: 'john@example.com'
        };
        expect(response).not.toHaveProperty('idade');
    })

});
