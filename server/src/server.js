import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({

});

const PORT = 4000;
server.start({ port: PORT }, () => {
	console.log(`Server started on port ${PORT} => http://localhost:${PORT}`)
});
