import models from '../../database/model';
import uuid from 'uuid/v1';

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return await models.User.findAll();
    }
  },
  Mutation: {
    createUser: async (obj, args, ctx, info) => {
      const id = uuid();
      const { company, city } = args.data;

      const newUser = {
        id,
        company,
        city,
      };
      await models.User.create(newUser);

      return true;
    },
    editUser: async (obj, args, ctx, info) => {
      const { data, id } = args;

      const updatedUser = {
        company: data.company,
        city: data.city,
      }
      await models.User.update(updatedUser, { where: { id } })

      return models.User.findByPk(id);
    }
  }
}

export default resolvers;
