import { QueryResolver } from './resolvers/QueryResolver';
import { mergeModulesSchemaWith, pool as pg } from '@amplify/postgres-node';
import { readFileSync } from 'fs';
import { ApolloServer } from 'apollo-server-express';
import { GQLContext } from './GQLContext';
import bodyParser from 'body-parser';

import express, { Application } from 'express';
import _ from 'lodash';

const PATH = '/graphql';

const node = express();
node.use(bodyParser.json({ limit: '30mb' }));
node.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

export const getProjectServer = _.memoize(async () => {
  const typeDefs = readFileSync('./schema.graphql', 'utf8');

  const schema = mergeModulesSchemaWith({
    typeDefs,
    resolvers: {
      Query: QueryResolver,
    },
  });
  const server = new ApolloServer({
    schema,
    //   @ts-ignore
    context: (): GQLContext => {},
  });

  await server.start();

  return server;
});

export async function createAmplifyServer(app: any) {
  const apolloServer = await getProjectServer();
  apolloServer.applyMiddleware({
    app,
    path: PATH,
  });
}

createAmplifyServer(node).then(() => {
  const PORT = 6002;
  node.listen(PORT);
  console.log('Apollo Server listening on port 6002/graphql 🚀');
});

export { node };
