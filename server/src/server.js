import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import models from './database/model';

const server = new GraphQLServer({
	schema,
});

const PORT = 4000;

models.sequelize.authenticate()
	.then(async () => {
		console.log('Connection has been established successfully.');
		
		server.start({ port: PORT }, () => {
			console.log(`Server started on port ${PORT} => http://localhost:${PORT}`)
		});
	})
	.catch(err => console.log('Connection to the database has failed.', err));