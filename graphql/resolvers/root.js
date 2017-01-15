const data = require('../../data/data.json');

const { Airline } = require('../types/airline');
const { Flight } = require('../types/flight');

module.exports.root = {
  airline: ({name}) => {
    return new Airline(name);
  },

  airlines: () => {
    result = [];
    data.airlines.forEach(
      (airline) => result.push(
        new Airline(airline.name)
      )
    );
    return result;
  },

  flight: ({number}) => {
    return new Flight(number);
  },

  flights: () => {
    result = [];
    data.flights.forEach(
      (flight) => result.push(
        new Flight(flight.number)
      )
    );
    return result;
  }
};
