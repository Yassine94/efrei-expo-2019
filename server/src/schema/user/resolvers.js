import users from '../../data/users';
import uuid from 'uuid/v1';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    }
  },
  Mutation: {
    createUser: (obj, args, ctx, info) => {
      const id = uuid();
      const { firstName, lastName, city } = args.data;

      const newUser = {
        id,
        firstName,
        lastName,
        city,
      };
      users.push(newUser);
      console.log(users);

      return true;
    },
    editUser: (obj, args, ctx, info) => {
      const { data } = args;
      const index = users.findIndex((user) => user.id === args.id);

      users[index] = {
        ...users[index],
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
      }

      return users[index];
    }
  }
}

export default resolvers;
