import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import models from './database/model';

const server = new GraphQLServer({
	schema,
});

const options = {
  port: 4000,
  cors: {
    credential: false
  }
}

models.sequelize.authenticate()
	.then(async () => {
		console.log('Connection has been established successfully.');

		server.start(options, () => {
			console.log(`Server started on port ${options.port} => http://localhost:${options.port}`);
		});
	})
	.catch(err => console.log('Connection to the database has failed.', err));
