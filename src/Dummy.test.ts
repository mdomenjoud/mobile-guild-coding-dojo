import { Dummy } from "./Dummy";

describe('Make sure', () => {
    it('works', () => {
        expect(6*7).toBe(42);
        expect(new Dummy().hello()).toBe('Hello, World');
    });

});