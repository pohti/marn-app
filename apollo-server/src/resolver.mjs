const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name}!`
    }
};

export default resolvers;