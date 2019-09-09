import { mergeSchemas } from 'graphql-tools';
import userSchema from './user';
import porscheSchema from './porsche';

const schema = mergeSchemas({
  schemas: [
    userSchema,
    porscheSchema,
  ],
});

export default schema;
