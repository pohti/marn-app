import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

import resolvers from './resolver.mjs'
import typeDefs from './typeDefs.js'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { Book } from './models/Book.mjs';

dotenv.config()

mongoose.set('strictQuery', true)
const MONGODB_ACC = process.env.MONGODB_ACC
const MONGODB_PW = process.env.MONGODB_PW
const URL = `mongodb+srv://${MONGODB_ACC}:${MONGODB_PW}@cluster0.amcq9yh.mongodb.net/marn`
const db = await mongoose.connect(URL, { useNewUrlParser: true })
// Book.find({})

console.info('📚 Connected to db', db?.connections[0]?._connectionString);

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.info(`🚀 Server ready at ${url}`);