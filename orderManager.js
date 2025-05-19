import inventoryManager from "./inventoryManager.js"

export default class orderManager {
    constructor(orderCanvas) {
        this.inventory = new inventoryManager();

        this.waitTimes = {
            tire: 2 * 10000,
            bikeBody: 5 * 10000,
            carBody: 6 * 10000,
            truckBody: 6 * 10000,
            bigRigBody: 8 * 10000,
            engine4c: 3 * 10000,
            engine6c: 4 * 10000,
            engine8c: 5 * 10000,
            engine16c: 8 * 10000,
            bikeBuild: 5 * 10000,
            carBuild: 7 * 10000,
            truckBuild: 8 * 10000,
            bigRigBuild: 13 * 10000,
        };

        this.orderCallbacks = {
            tire: this.inventory.addTires,
            bikeBody: this.inventory.addBodies,
            carBody: this.inventory.addBodies,
            truckBody: this.inventory.addBodies,
            bigRigBody: this.inventory.addBodies,
            engine4c: this.inventory.addEngines,
            engine6c: this.inventory.addEngines,
            engine8c: this.inventory.addEngines,
            engine16c: this.inventory.addEngines,
            bikeBuild: this.inventory.buildVehicle,
            carBuild: this.inventory.buildVehicle,
            truckBuild: this.inventory.buildVehicle,
            bigRigBuild: this.inventory.buildVehicle,
            bikeSale: this.inventory.removeVehicle,
            carSale: this.inventory.removeVehicle,
            truckSale: this.inventory.removeVehicle,
            bigRigSale: this.inventory.removeVehicle,
        }

        this.canvas = orderCanvas;
    }

    createOrder(item, qty = 1) {
        const orderTime = Date.now();
        const waitTime = this.waitTimes[item];
        const inventoryType = item.includes("Body") || item.includes("Sale")
            ? item.slice(0, item.length - 4)
            : item.includes("engine")
                ? item.slice(6, item.length)
                : item.includes("Build")
                    ? item.slice(0, item.length - 5)
                    : item;

        console.log(`item: ${item}, inventoryType: ${inventoryType}`);

        const deliveryTime = orderTime + waitTime;
        const order = {
            item,
            qty,
            orderTime,
            deliveryTime,
            callback: () => this.orderCallbacks[item](qty, inventoryType),
        };

        this.scheduleDelivery(order);
        return order;
    }

    scheduleDelivery(order) {
        setTimeout(() => {
            this.deliverOrder(order);
        }, order.orderTime);
    }

    deliverOrder(order) {
        order.callback();
    }
}