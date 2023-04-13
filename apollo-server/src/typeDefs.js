import gql from 'graphql-tag'

const typeDefs = gql`
    type Query {
        hello(name: String): String,
        books: [Book]
    }
    type Book {
        id: ID,
        title: String,
        year: Int,
    }
`;

export default typeDefs