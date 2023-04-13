import { Book } from './models/Book.mjs'

const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}!`,
        books: async () => await Book.find({})
    }
};

export default resolvers;