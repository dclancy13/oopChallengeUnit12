class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk() {
        return ('Beep');
    }
    toString() {
        const { make, model, year } = this;
        return (`The vehicle is a ${make} ${model} from ${year}.`)
    }
};

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = numWheels;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine() {
        return ('VROOOM');
    }

}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(x) {
        if (x instanceof Vehicle) {
            if (this.capacity <= this.vehicles.length) {
                return ("Sorry We're Full")
            } else {
                this.vehicles.push(x);
                return ('Vehicle Added!');
            }

        }
        return ("Only Vehicles allowed in here!")
    }
}