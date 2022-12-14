function Device(name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.isOn = false;
}

Device.prototype.turnOff = function() {
    console.log(`${this.name} is off.`);
    this.isOn = false;
};

Device.prototype.turnOn = function() {
    console.log(`${this.name} is on.`);
    this.isOn = true;
};

//Device 1
function TV(name, brand, resolution, hasSmartTv, powerConsumption) {
    this.name = name;
    this.brand = brand;
    this.resolution = resolution;
    this.hasSmartTv = hasSmartTv
    this.powerConsumption = powerConsumption;
}

TV.prototype = new Device();

//Device 2
function Lamp(name, brand, isDimmable, powerConsumption,) {
    this.name = name;
    this.brand = brand;
    this.powerConsumption = powerConsumption;
    this.isDimmable = isDimmable;
}

Lamp.prototype = new Device();

const myTV = new TV('J6240', 'Samsung', '1080p', true, 250);
const myLamp = new Lamp('Bedside Lamp 2', 'Xiaomi', true, 50);

