import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

import resolvers from './resolver.mjs'
import typeDefs from './typeDefs.js'


const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.info(`🚀 Server ready at ${url}`);