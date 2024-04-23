export abstract class Logistics {
    constructor() {}

    public planDelivery() {}

    public abstract createTransport(): Transport;
}

export class RoadLogistics extends Logistics {
    constructor() {
        super();
    }

    public createTransport(): Transport {
        console.log('Created Road Transport!');

        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    constructor() {
        super();
    }

    public createTransport(): Transport {
        console.log('Created Sea Transport!');

        return new Ship();
    }
}

export interface Transport {
    deliver(): void;
}

export class Truck implements Transport {
    constructor() {}

    public deliver(): void {
        console.log('Delivering shipment by Truck!');
    }
}

export class Ship implements Transport {
    constructor() {}

    public deliver(): void {
        console.log('Delivering shipment by Ship!');
    }
}
