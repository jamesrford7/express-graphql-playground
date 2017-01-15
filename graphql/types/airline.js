const data = require('../../data/data.json');
const { Flight } = require('./flight')

module.exports.Airline = class Airline {
  constructor(name) {
    this.name = name;
  }

  name() {
    return this.name;
  }

  flights() {
    let result = [];
    let flights = data.airlines.find(
      (airline) => airline.name == this.name).flights;

    flights.forEach(
      (flight) => result.push(
        new Flight(flight.number)
      )
    );
    return result;
  }
};
