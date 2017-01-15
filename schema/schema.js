var { buildSchema } = require('graphql');

module.exports.schema = buildSchema(`
    type Airline {
      flightNumber: String
      name: String
    }

    type Query {
      airline(name: String): Airline
    }
  `);
