const { root } = require('../resolvers/root');
const { schema } = require('../schema/schema');

module.exports.graphqlConfig = {
  schema: schema,
  rootValue: root,
  graphiql: true,
};
