import users from '../../data/users';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    }
  }
}

export default resolvers;
