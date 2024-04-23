import { expect, test, describe } from '@jest/globals';
import { RoadLogistics, SeaLogistics, Truck, Ship } from './FactoryMethod';

describe('Factory Method test suite', () => {
    test('Check if RoadLogistics Factory is instanciating Truck class', () => {
        const RoadLogisticsClass = new RoadLogistics();
        const TruckTransport = RoadLogisticsClass.createTransport();

        expect(RoadLogisticsClass).toBeInstanceOf(RoadLogistics);
        expect(TruckTransport).toBeInstanceOf(Truck);
    });

    test('Check if SeaLogistics Factory is instanciating Ship class', () => {
        const SeaLogisticsClass = new SeaLogistics();
        const SeaTransport = new SeaLogistics().createTransport();

        expect(SeaLogisticsClass).toBeInstanceOf(SeaLogistics);
        expect(SeaTransport).toBeInstanceOf(Ship);
    });
});
