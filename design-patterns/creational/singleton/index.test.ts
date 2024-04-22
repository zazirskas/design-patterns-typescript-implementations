import { expect, jest, test, describe } from '@jest/globals';
import SingletonExample from './Singleton';

describe('Singleton Test Suite', () => {
    test('When getting instance should only create instance one and cache it, and if called twice, return the same instance', () => {
        const Singleton1 = SingletonExample.getInstance();
        const Singleton2 = SingletonExample.getInstance();

        expect(Singleton1 === Singleton2).toBeTruthy();
    });
});
