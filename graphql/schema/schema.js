var { buildSchema } = require('graphql');

module.exports.schema = buildSchema(`
    type Airline {
      flights: [Flight]
      name: String
    }

    type Flight {
      number: String
      destination: String
      cost: Int
    }

    type Query {
      airline(name: String!): Airline
      airlines: [Airline]
      flight(number: String!): Flight
      flights: [Flight]
    }
  `);
