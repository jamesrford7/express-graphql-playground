var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const data = {airlines: [{name: "BA", flightNumber: "BA101"}, {name: "JAL", flightNumber: "JAL202"}]};

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Airline {
    flightNumber: String
    name: String
  }

  type Query {
    airline(name: String): Airline
  }
`);

class Airline {
  constructor(name) {
    this.name = name;
  }
  name() {
    return this.name;
  }
  flightNumber() {
    console.log(data);
    return data.airlines.find((airline) => airline.name == this.name).flightNumber;
  }
}

// The root provides a resolver function for each API endpoint
var root = {
  airline: ({name}) => {
    return new Airline(name);
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
