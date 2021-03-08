
const { ApolloServer, gql } = require('apollo-server');
const port = 4000

const todos = [
    { task: 'Wash car', completed: false },
    { task: 'Clean room', completed: false },
];

const typeDefs = gql`
    type Todo {
        task: String
        completed: Boolean
    }
     type Query {
        getTodos: [Todo]
    }
    type Mutation {
        addTodo(task: String, completed: Boolean): Todo
    }
`;

const resolvers = {
    Query: {
        getTodos: () => todos
    },
    Mutation: {
        addTodo: (_, { task, completed }) => {
            const todo = { task, completed };
            todos.push(todo);
            return todo;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(port).then(() => {
    console.log("Server listening on %d...", port);
});
