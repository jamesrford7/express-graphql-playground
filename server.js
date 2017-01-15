var express = require('express');
var graphqlHTTP = require('express-graphql');
const { graphqlConfig } = require('./graphql/config');

var app = express();
app.use('/graphql', graphqlHTTP(graphqlConfig));
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
