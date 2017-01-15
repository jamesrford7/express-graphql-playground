const { Airline } = require('../types/airline');

module.exports.root = {
  airline: ({name}) => {
    return new Airline(name);
  }
};
