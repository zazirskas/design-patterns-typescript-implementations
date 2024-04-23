# Factory Method Design Pattern

## Overview

The Factory Method pattern defines an interface for creating an object but lets subclasses decide which class to instantiate. It lets a class defer instantiation to subclasses, ensuring that the use of an instance of a class is separated from its creation.

## Implementation in TypeScript

This folder contains the implementation of the Factory Method pattern. The `Creator` class declares the factory method that returns an object of the `Product` class. The subclasses of `Creator` typically provide the implementation of this factory method.

## Usage

The Factory Method is particularly useful when there is a need to manage and manipulate collections of objects that are different yet have many similarities in handling, for example, different types of documents, UI controls, or cross-platform elements.

## Code Example

```typescript
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract factoryMethod(): Product;

    /**
     * Also note that, despite its name, the Creator's primary responsibility is
     * not creating products. Usually, it contains some core business logic that
     * relies on Product objects, returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the factory method
     * and returning a different type of product from it.
     */
    public someOperation(): string {
        // Call the factory method to create a Product object.
        const product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Product {
    operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}
```

## Benefits of Factory Method

- **Flexibility and Scalability**: Allows classes to be written in a way that they can be flexible and scalable when introducing new products or types of data.
- **Decoupling Code**: Decouples the implementation of the product from its use, making it easier to extend or change the scope of the implementation without affecting the core of the application.
- **Single Responsibility Principle**: Supports the Single Responsibility Principle by enabling the separation of the creation logic from the business logic.
