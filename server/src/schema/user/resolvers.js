import users from '../../data/users';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    }
  },
  Mutation: {
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
