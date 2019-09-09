import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';

const server = new GraphQLServer({
	schema,
});

const PORT = 4000;
server.start({ port: PORT }, () => {
	console.log(`Server started on port ${PORT} => http://localhost:${PORT}`)
});
