const data = require('../../data/data.json');
const { Flight } = require('./flight')

module.exports.Airline = class Airline {
  constructor(name) {
    this.airlineDetails = data.airlines.find(
      (airline) => airline.name == name
    );
  }

  name() {
    return this.airlineDetails.name;
  }

  base() {
    return this.airlineDetails.base;
  }

  flights() {
    let result = [];
    let flights = data.airlines.find(
      (airline) => airline.name == this.airlineDetails.name).flights;

    flights.forEach(
      (flight) => result.push(
        new Flight(flight.number)
      )
    );
    return result;
  }
};
