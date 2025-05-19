export default class InventoryManager {
    constructor(inventoryCanvas) {
        this.vehicles = {
            "car": 0,
            "truck": 0,
            "bike": 0,
            "bigRig": 0,
        }

        this.engines = {
            "4c": 0,
            "6c": 0,
            "8c": 0,
            "16c": 0,
        };

        this.bodies = {
            "car": 0,
            "truck": 0,
            "bike": 0,
            "bigRig": 0,
        }

        this.tires = 0;

        this.canvas = inventoryCanvas;
    }

    buildVehicle(qty, type) {
        this.bodies[type] -= qty;
        switch (type) {
            case "bike":
                this.engines["4c"] -= qty;
                this.tires -= 2 * qty;
                break;
            case "car":
                this.engines["6c"] -= qty;
                this.tires -= 4 * qty;
                break;
            case "truck":
                this.engines["8c"] -= qty;
                this.tires -= 4 * qty;
                break;
            case "bigRig":
                this.engines["16c"] -= qty;
                this.tires -= 16 * qty;
                break;
        }
        this.vehicles[type] += qty;
        return this.vehicles[type];
    }

    addTires(qty, type) {
        this.tires += qty;
        return this.tires;
    }

    addBodies(qty, type) {
        this.bodies[type] += qty;
        return this.bodies[type];
    }

    addEngines(qty, type) {
        this.engines[type] += qty;
        return this.engines[type];
    }

    removeVehicle(qty, type) {
        this.vehicles[type] -= qty;
        return this.vehicles[type];
    }
}