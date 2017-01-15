const data = require('../../data/data.json');

module.exports.Airline = class Airline {
  constructor(name) {
    this.name = name;
  }
  name() {
    return this.name;
  }
  flightNumber() {
    return data.airlines.find((airline) => airline.name == this.name).flightNumber;
  }
};
