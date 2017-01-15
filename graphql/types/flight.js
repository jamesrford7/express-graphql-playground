const data = require('../../data/data.json');

module.exports.Flight = class Flight{
  constructor(number) {
    this.flightDetails = data.flights.find((flight) => flight.number == number);
  }

  number() {
    return this.flightDetails.number;
  }

  destination() {
    return this.flightDetails.destination;
  }

  cost() {
    return this.flightDetails.cost;
  }
};
