var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const people = [{name: "John", profession: "coder"},
                {name: "James", profession: "designer"}];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: [String]
    person(name: String): String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return ['Hello world!', 'Hello all'].map(function(greeting) {return greeting.toUpperCase()});
  },
  person: ({name}) => {
    return people.find(function(person) { return person.name == name }).profession;
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
