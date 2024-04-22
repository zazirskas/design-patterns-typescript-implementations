export default class SingletonExample {
    private static instance: SingletonExample;

    private constructor() {
        console.log('Created new instance!');
    }

    public static getInstance(): SingletonExample {
        if (!SingletonExample.instance) {
            SingletonExample.instance = new SingletonExample();
        }
        return SingletonExample.instance;
    }
}
