class Device {
    constructor(name, powerConsumption) {
        this.name = name;
        this.powerConsumption = powerConsumption;
        this.isOn = false;
    }

    turnOn() {
        console.log(`${this.name} is on.`);
        this.isOn = true;
    }
    turnOff() {
        console.log(`${this.name} is off.`);
        this.isOn = false;
    }
}

class TV extends Device {
    constructor(name, brand, resolution, hasSmartTv, powerConsumption) {
        super(name, powerConsumption);
        this.brand = brand;
        this.resolution = resolution;
        this.hasSmartTv = hasSmartTv;
    }
}

class Lamp extends Device {
    constructor(name, brand, isDimmable, powerConsumption) {
        super(name, powerConsumption);
        this.brand = brand;
        this.isDimmable = false;
    }
}

const myLamp = new Lamp('Bedside Lamp 2', 'Xiaomi', true, 50);
const myTV = new TV('J6240', 'Samsung', '1080p', true, 250);